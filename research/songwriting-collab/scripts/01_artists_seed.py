#!/usr/bin/env python3
"""Phase 1: compile Billboard Greatest of All Time Hot 100 Artists seed list.

Source: https://www.billboard.com/charts/greatest-hot-100-artists/

This script writes data/artists_seed.csv from a saved page dump, or can re-fetch
the live Billboard chart page and parse artist order.

Usage:
  python scripts/01_artists_seed.py --from-dump PATH
  python scripts/01_artists_seed.py --fetch
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "artists_seed.csv"
SOURCE_URL = "https://www.billboard.com/charts/greatest-hot-100-artists/"

# Headings that appear in Billboard chart chrome but are not artist names.
NON_ARTIST_HEADINGS = {
    "Gains in Weekly Performance",
    "Additional Awards",
    "Debut Position",
    "Peak Position",
    "Share",
    "Awards",
    "Credits",
    "Songwriter(s)",
    "Producer(s)",
    "Imprint/Label",
}


def artists_from_markdown_dump(text: str) -> list[str]:
    """Parse artists from a markdown conversion of the Billboard chart page."""
    lines = text.splitlines()
    artists: list[str] = []
    for i, line in enumerate(lines):
        if not line.startswith("### "):
            continue
        name = line[4:].strip()
        if name in NON_ARTIST_HEADINGS:
            continue
        window = lines[i + 1 : i + 6]
        if any(w.strip() == "### Debut Position" for w in window):
            artists.append(name)
    return artists


def artists_from_html(html: str) -> list[str]:
    """Parse artists from Billboard chart HTML (c-title class pattern)."""
    # Billboard chart rows use heading tags with chart-result title classes.
    pattern = re.compile(
        r'<h3[^>]*class="[^"]*c-title[^"]*"[^>]*>\s*([^<]+?)\s*</h3>',
        re.IGNORECASE,
    )
    artists: list[str] = []
    for match in pattern.finditer(html):
        name = re.sub(r"\s+", " ", match.group(1)).strip()
        if name and name not in NON_ARTIST_HEADINGS:
            artists.append(name)
    # Deduplicate while preserving order (page chrome may repeat titles).
    seen: set[str] = set()
    ordered: list[str] = []
    for name in artists:
        if name.lower() in seen:
            continue
        seen.add(name.lower())
        ordered.append(name)
    return ordered


def fetch_html(url: str = SOURCE_URL) -> str:
    import urllib.request

    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (compatible; songwriting-collab-research/0.1; "
                "+https://github.com/kylesmcauliffe/ksm)"
            )
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", errors="replace")


def write_csv(artists: list[str], path: Path = OUT) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["rank", "artist_name"])
        for rank, name in enumerate(artists, 1):
            writer.writerow([rank, name])


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--from-dump", type=Path, help="Markdown/text dump of Billboard page")
    group.add_argument("--fetch", action="store_true", help="Fetch live Billboard chart HTML")
    args = parser.parse_args()

    if args.fetch:
        html = fetch_html()
        artists = artists_from_html(html)
        if len(artists) < 100:
            # Fallback: some page shells only expose titles in alternate markup.
            print(
                f"HTML parse found {len(artists)} artists; expected 100.",
                file=sys.stderr,
            )
            return 1
        artists = artists[:100]
    else:
        artists = artists_from_markdown_dump(args.from_dump.read_text(encoding="utf-8"))

    if len(artists) != 100:
        print(f"Expected 100 artists, got {len(artists)}", file=sys.stderr)
        return 1
    if len(set(artists)) != 100:
        print("Duplicate artist names detected", file=sys.stderr)
        return 1

    write_csv(artists)
    print(f"Wrote {OUT} ({len(artists)} artists)")
    print("Source:", SOURCE_URL)
    print("Sample:", ", ".join(artists[:5]), "…", ", ".join(artists[-3:]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
