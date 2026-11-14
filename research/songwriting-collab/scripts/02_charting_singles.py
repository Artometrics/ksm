#!/usr/bin/env python3
"""Phase 2: charting Hot 100 singles for seed artists.

Source (public historical Hot 100, not scraped live from Billboard):
  https://github.com/utdata/rwd-billboard-data
  data-out/hot-100-current.csv  (1958–present weekly rows)

Downloads the CSV if missing, filters to lead/equal credits for artists in
data/artists_seed.csv, aggregates to one row per (artist, song), and writes
data/charting_singles.csv.

Usage:
  python scripts/02_charting_singles.py
  python scripts/02_charting_singles.py --raw PATH
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
import urllib.request
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEED = ROOT / "data" / "artists_seed.csv"
RAW_DIR = ROOT / "data" / "raw"
RAW_DEFAULT = RAW_DIR / "hot-100-current.csv"
OUT = ROOT / "data" / "charting_singles.csv"
QA_OUT = ROOT / "docs" / "phase2_qa.md"

SOURCE_URL = (
    "https://raw.githubusercontent.com/utdata/rwd-billboard-data/"
    "main/data-out/hot-100-current.csv"
)
SOURCE_REPO = "https://github.com/utdata/rwd-billboard-data"

# Extra performer strings that map to a seed artist_name.
# Keys are seed names; values are additional exact aliases (case-sensitive as
# they appear on the Hot 100, plus common close variants).
ALIASES: dict[str, list[str]] = {
    "Jackson 5/The Jacksons": [
        "Jackson 5",
        "The Jackson 5",
        "The Jacksons",
        "Jacksons",
    ],
    "Gloria Estefan/Miami Sound Machine": [
        "Gloria Estefan",
        "Miami Sound Machine",
        "Gloria Estefan & Miami Sound Machine",
    ],
    "Bob Seger/The Silver Bullet Band": [
        "Bob Seger",
        "Bob Seger & The Silver Bullet Band",
        "Bob Seger System",
    ],
    "Daryl Hall John Oates": [
        "Daryl Hall John Oates",
        "Hall & Oates",
        "Daryl Hall & John Oates",
    ],
    "The 4 Seasons": [
        "The 4 Seasons",
        "The Four Seasons",
        "Frankie Valli & The 4 Seasons",
        "Frankie Valli & The Four Seasons",
    ],
    "P!nk": ["P!nk", "Pink"],  # "Pink" alone is rare; guarded against Pink Floyd below
    "JAY-Z": ["JAY-Z", "Jay-Z", "Jay Z"],
    "Beyonce": ["Beyonce", "Beyoncé", "Beyonce Knowles"],
    "Carpenters": ["Carpenters", "The Carpenters"],
    "Commodores": ["Commodores", "The Commodores"],
    "Eagles": ["Eagles", "The Eagles"],
    "Dion": ["Dion", "Dion (Di Muci)", "Dion Di Muci", "Dion DiMuci"],
    "The Miracles": [
        "The Miracles",
        "Smokey Robinson & The Miracles",
        'The Miracles (featuring Bill "Smokey" Robinson)',
    ],
    "Paul McCartney": [
        "Paul McCartney",
        "Paul McCartney & Wings",
        "Wings",
        "Paul McCartney and Wings",
        "Paul McCartney & Stevie Wonder",
        "Paul McCartney With The Frog Chorus",
    ],
    "Cher": ["Cher", "Sonny & Cher", "Sonny And Cher"],
    "Diana Ross": ["Diana Ross", "Diana Ross & The Supremes", "Diana Ross And The Supremes"],
    "Neil Diamond": ["Neil Diamond"],
    "R. Kelly": ["R. Kelly", "R.Kelly"],
    "Kanye West": ["Kanye West", "Ye"],
}

# Reject exact alias matches that collide with unrelated acts.
ALIAS_BLOCKLIST: dict[str, set[str]] = {
    "P!nk": {
        "Pink Floyd",
        "PinkPantheress",
        "Pinkfong",
        "Pink Lady",
        "Frijid Pink",
        "BLACKPINK",
        "Pretty In Pink",
        "Kissing The Pink",
    },
    "Dion": {
        "Celine Dion",
        "Dionne Warwick",
        "Dion DiMucci",  # keep Di Muci variants via aliases; this is noop safety
    },
}

FEAT_SPLIT = re.compile(
    r"\s+(?:Featuring|Feat\.?|Ft\.?|With|Duet With|Duet)\s+",
    re.IGNORECASE,
)
PRIMARY_SPLIT = re.compile(r"\s*(?:&|,|/| And | x | X | \+ )\s*")


def download_raw(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {SOURCE_URL} → {path}")
    req = urllib.request.Request(
        SOURCE_URL,
        headers={"User-Agent": "songwriting-collab-research/0.1"},
    )
    with urllib.request.urlopen(req, timeout=120) as resp, path.open("wb") as f:
        while True:
            chunk = resp.read(1024 * 256)
            if not chunk:
                break
            f.write(chunk)


def load_seed(path: Path) -> list[tuple[int, str]]:
    rows: list[tuple[int, str]] = []
    with path.open(encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            rows.append((int(row["rank"]), row["artist_name"]))
    return rows


def alias_list(seed_name: str) -> list[str]:
    extras = ALIASES.get(seed_name, [])
    # Always include the seed display name itself.
    ordered = [seed_name] + [a for a in extras if a != seed_name]
    # De-dupe case-insensitively, preserve order.
    seen: set[str] = set()
    out: list[str] = []
    for a in ordered:
        key = a.casefold()
        if key in seen:
            continue
        seen.add(key)
        out.append(a)
    return out


def primary_credit_names(performer: str) -> list[str]:
    """Names in the lead billing (before Featuring/With/etc.)."""
    primary = FEAT_SPLIT.split(performer, maxsplit=1)[0].strip()
    parts = [p.strip() for p in PRIMARY_SPLIT.split(primary) if p.strip()]
    return parts if parts else [primary]


def is_blocked(seed_name: str, candidate: str) -> bool:
    blocked = ALIAS_BLOCKLIST.get(seed_name, set())
    return any(candidate.casefold() == b.casefold() for b in blocked)


def performer_matches_seed(performer: str, seed_name: str, aliases: list[str]) -> bool:
    if is_blocked(seed_name, performer):
        return False
    # Exact full-string match to an alias.
    for alias in aliases:
        if performer.casefold() == alias.casefold():
            return True
        # Lead artist with features: "Alias Featuring …"
        if re.match(
            rf"^{re.escape(alias)}\s+(?:Featuring|Feat\.?|Ft\.?|With|Duet With|Duet)\b",
            performer,
            flags=re.IGNORECASE,
        ):
            return True

    # Equal billing among primary credits (before Featuring).
    primaries = primary_credit_names(performer)
    alias_cf = {a.casefold() for a in aliases}
    for p in primaries:
        if is_blocked(seed_name, p):
            continue
        if p.casefold() in alias_cf:
            return True
    return False


def aggregate_songs(
    weekly_rows: list[dict[str, str]], seed_name: str
) -> list[dict[str, object]]:
    """Collapse weekly chart rows into one row per song for this seed artist."""
    # key: casefolded title (Billboard sometimes changes capitalization on re-entries)
    songs: dict[str, dict[str, object]] = {}
    for row in weekly_rows:
        title = row["title"].strip()
        key = title.casefold()
        week = row["chart_week"]
        peak = int(row["peak_pos"])
        weeks = int(row["wks_on_chart"])
        if key not in songs:
            songs[key] = {
                "artist_name": seed_name,
                "song_title": title,
                "title_counts": {title: 1},
                "first_week": week,
                "peak_position": peak,
                "weeks_on_chart": weeks,
                "peak_week": week,
            }
            continue
        s = songs[key]
        counts: dict[str, int] = s["title_counts"]  # type: ignore[assignment]
        counts[title] = counts.get(title, 0) + 1
        # Prefer the most common spelling; break ties with earliest-seen title.
        s["song_title"] = max(counts.items(), key=lambda kv: (kv[1], -len(kv[0])))[0]
        if peak < int(s["peak_position"]):
            s["peak_position"] = peak
            s["peak_week"] = week
        elif peak == int(s["peak_position"]) and week < str(s["peak_week"]):
            s["peak_week"] = week
        if weeks > int(s["weeks_on_chart"]):
            s["weeks_on_chart"] = weeks
        if week < str(s["first_week"]):
            s["first_week"] = week

    out: list[dict[str, object]] = []
    for s in songs.values():
        # Year of the song's first chart appearance (more stable than re-peak years).
        year = int(str(s["first_week"])[:4])
        out.append(
            {
                "artist_name": s["artist_name"],
                "song_title": s["song_title"],
                "year": year,
                "peak_position": int(s["peak_position"]),
                "weeks_on_chart": int(s["weeks_on_chart"]),
            }
        )
    out.sort(key=lambda r: (int(r["peak_position"]), str(r["song_title"])))
    return out

def write_qa(
    path: Path,
    seed: list[tuple[int, str]],
    song_counts: dict[str, int],
    unmatched: list[str],
    n_songs: int,
    year_min: int,
    year_max: int,
    sample_rows: list[dict[str, object]],
) -> None:
    lines = [
        "# Phase 2 — Charting singles QA notes",
        "",
        "## Source",
        "",
        f"- Public dataset: [{SOURCE_REPO}]({SOURCE_REPO})",
        f"- File: `data-out/hot-100-current.csv` (mirrored locally as `data/raw/hot-100-current.csv`)",
        f"- Download URL: `{SOURCE_URL}`",
        "- Weekly Hot 100 rows from Aug 1958 through present; aggregated to song level.",
        "",
        "## Matching rules",
        "",
        "- Include songs where the seed artist (or alias) is a **lead or equal-billed**",
        "  primary credit (exact match, or before `Featuring` / `With` / `Duet`).",
        "- Exclude songs where the seed artist appears **only as a featured guest**.",
        "- `year` = calendar year of the song's first Hot 100 appearance.",
        "- `peak_position` = best (lowest) peak across weekly rows.",
        "- `weeks_on_chart` = max weeks-on-chart observed for that title/artist.",
        "",
        "## Counts",
        "",
        f"- Seed artists: {len(seed)}",
        f"- Artists with ≥1 matched single: {len(seed) - len(unmatched)}",
        f"- Artists with **zero** matches: {len(unmatched)}",
        f"- Total charting singles (rows): **{n_songs}**",
        f"- Peak-year range: {year_min}–{year_max}",
        "",
    ]
    if unmatched:
        lines += ["## Unmatched seed artists", ""]
        for name in unmatched:
            lines.append(f"- {name}")
        lines.append("")

    lines += [
        "## Songs per artist (top / bottom)",
        "",
        "| artist_name | n_songs |",
        "|-------------|---------|",
    ]
    ranked = sorted(song_counts.items(), key=lambda x: (-x[1], x[0]))
    for name, n in ranked[:10]:
        lines.append(f"| {name} | {n} |")
    lines.append("| … | … |")
    for name, n in ranked[-5:]:
        lines.append(f"| {name} | {n} |")

    lines += [
        "",
        "## Sample rows",
        "",
        "| artist_name | song_title | year | peak_position | weeks_on_chart |",
        "|-------------|------------|------|---------------|----------------|",
    ]
    for r in sample_rows:
        lines.append(
            f"| {r['artist_name']} | {r['song_title']} | {r['year']} | "
            f"{r['peak_position']} | {r['weeks_on_chart']} |"
        )
    lines += [
        "",
        "## Known limitations",
        "",
        "- Alias coverage is imperfect for career name changes (e.g. partial Wings,",
        "  Sonny & Cher vs Cher solo).",
        "- Dual-billed songs (`A & B`) are attributed to **each** matching seed artist,",
        "  so song titles can appear under more than one `artist_name`.",
        "- Guest-only features are excluded by design (see matching rules).",
        "- Raw weekly archive may have rare historical gaps inherited from upstream.",
        "",
    ]
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--raw", type=Path, default=RAW_DEFAULT, help="Path to hot-100 CSV")
    parser.add_argument("--skip-download", action="store_true")
    args = parser.parse_args()

    if not SEED.exists():
        print(f"Missing seed file: {SEED}", file=sys.stderr)
        return 1

    if not args.raw.exists():
        if args.skip_download:
            print(f"Missing raw CSV: {args.raw}", file=sys.stderr)
            return 1
        download_raw(args.raw)

    seed = load_seed(SEED)
    alias_map = {name: alias_list(name) for _, name in seed}

    # Stream weekly CSV and bucket rows by matched seed artist(s).
    buckets: dict[str, list[dict[str, str]]] = defaultdict(list)
    n_weekly = 0
    with args.raw.open(encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        required = {"chart_week", "title", "performer", "peak_pos", "wks_on_chart"}
        if not required.issubset(reader.fieldnames or []):
            print(f"Unexpected columns: {reader.fieldnames}", file=sys.stderr)
            return 1
        for row in reader:
            n_weekly += 1
            performer = row["performer"].strip()
            for _, seed_name in seed:
                if performer_matches_seed(performer, seed_name, alias_map[seed_name]):
                    buckets[seed_name].append(row)

    all_songs: list[dict[str, object]] = []
    song_counts: dict[str, int] = {}
    unmatched: list[str] = []
    for _, seed_name in seed:
        songs = aggregate_songs(buckets.get(seed_name, []), seed_name)
        song_counts[seed_name] = len(songs)
        if not songs:
            unmatched.append(seed_name)
        all_songs.extend(songs)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=[
                "artist_name",
                "song_title",
                "year",
                "peak_position",
                "weeks_on_chart",
            ],
        )
        writer.writeheader()
        # Stable order: seed rank order, then peak, then title.
        rank_order = {name: rank for rank, name in seed}
        all_songs.sort(
            key=lambda r: (
                rank_order[str(r["artist_name"])],
                int(r["peak_position"]),
                str(r["song_title"]),
            )
        )
        for row in all_songs:
            writer.writerow(row)

    years = [int(r["year"]) for r in all_songs]
    sample = all_songs[:8] + all_songs[len(all_songs) // 2 : len(all_songs) // 2 + 4]
    write_qa(
        QA_OUT,
        seed,
        song_counts,
        unmatched,
        len(all_songs),
        min(years) if years else 0,
        max(years) if years else 0,
        sample[:12],
    )

    print(f"Weekly rows read: {n_weekly:,}")
    print(f"Wrote {OUT} ({len(all_songs):,} songs)")
    print(f"Artists matched: {len(seed) - len(unmatched)}/{len(seed)}")
    if unmatched:
        print("Unmatched:", ", ".join(unmatched))
    print(f"QA notes: {QA_OUT}")
    print("Top song counts:")
    for name, n in sorted(song_counts.items(), key=lambda x: -x[1])[:8]:
        print(f"  {n:4d}  {name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
