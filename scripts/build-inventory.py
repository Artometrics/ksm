#!/usr/bin/env python3
"""Build a sanitized Master Inventory catalog and hosted thumbs/files for /inventory."""

from __future__ import annotations

import hashlib
import json
import re
import shutil
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse
from xml.sax.saxutils import escape as xml_escape

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/workspace/master-inventory/upgrade")
SCREEN = Path("/workspace/master-inventory/screenshots")
ARCHIVE_INV = Path("/workspace/ksm-archive/inventory.json")
OUT_CATALOG = ROOT / "data" / "inventory-catalog.json"
OUT_META = ROOT / "data" / "inventory-build-report.json"
THUMB_DIR = ROOT / "public" / "inventory" / "thumbs"
FILE_DIR = ROOT / "public" / "inventory" / "files"

HEADER = [
    "Title",
    "Category",
    "Summary",
    "Preview",
    "Link",
    "Live URL",
    "Last activity",
    "Size / file count",
    "Duplicate of / related",
    "Status",
    "Suggested action",
    "Reason",
    "Risky to delete",
    "Kyle decision",
    "Notes",
]

TAB_FILES = [
    ("Websites and live apps", "websites_and_live_apps.json"),
    ("Repos", "repos.json"),
    ("Projects", "projects.json"),
    ("Documents and lists and drafts", "documents_and_lists_and_drafts.json"),
    ("Rainfall", "rainfall.json"),
    ("Other people and clients", "other_people_and_clients.json"),
    ("Needs review", "needs_review.json"),
]

TAB_ORDER = [
    "Websites and live apps",
    "Repos",
    "Projects",
    "Documents and lists and drafts",
    "Needs review",
    "Other people and clients",
]

PUBLIC_HOSTS = {
    "artometrics.com",
    "www.artometrics.com",
    "kylesmcauliffe.com",
    "www.kylesmcauliffe.com",
    "twilda.com",
    "www.twilda.com",
}

BLOCKED_HOSTS = {
    "madison-510519.web.app",
    "invoicing-510519.web.app",
    "interntoimpact-510519.web.app",
    "tarabadhwar-510519.web.app",
    "mia-rentals-510519.web.app",
    "stratus-510519.web.app",
    "webfall.web.app",
    "stratus-chi-five.vercel.app",
    # Internal tools: list the item, but do not publish an open link.
    "crm-510519.web.app",
    "vault-510519.web.app",
    "mint-510519.web.app",
    "relay-510519.web.app",
    "loom-510519.web.app",
    "newsletter-510519.web.app",
    "priority-510519.web.app",
}

BLOCKED_REPOS = {
    ("artometrics", "tara"),
    ("artometrics", "madison"),
    ("artometrics", "intern"),
    ("kylesmcauliffe", "mia-maps"),
    ("kylesmcauliffe", "aftercare"),
    ("kylesmcauliffe", "sandbox"),
    ("kmcauliffe-rainfall", "rainfall-reports"),
}

# Strong omit: Rainfall, flagged/held-back, financial, credentials, third-party private.
OMIT_RE = re.compile(
    r"rainfall|"
    r"\bmadison\b|flower\.thief|flowerthief|"
    r"mia-?maps|mia maps|mia rentals|"
    r"intern to impact|interntoimpact|artometrics/intern|"
    r"tarabadhwar|artometrics/tara|"
    r"invoicing|artometrics-invoice|cost & timeline|cost and timeline|"
    r"payroll nine|"
    r"\b\.env\b|\.env\.production|id_rsa|service-account|credentials\.json|"
    r"credentialing-interface|luna-lucky-secret|"
    r"wish list|stanford jd|"
    r"/workspace/expenses|/workspace/invoices|"
    r"kylesmcauliffe/sandbox|kylesmcauliffe/aftercare|"
    r"\bstratus\b|\bwebfall\b",
    re.I,
)

# Titles that are only the word Tara (plus obvious Tara records). Held-back unflagged items.
TARA_TITLE_RE = re.compile(r"^(drive folder:\s*)?tara\b|tara badhwar|\btara\b", re.I)

BANNED_OUTPUT = [
    re.compile(p, re.I)
    for p in [
        r"drive\.google\.com",
        r"docs\.google\.com",
        r"cursor\.com/canvas",
        r"/workspace/",
        r"my drive/",
        r"rainfall",
        r"\bmadison\b",
        r"flower\.thief",
        r"mia-?maps",
        r"mia maps",
        r"mia rentals",
        r"intern to impact",
        r"interntoimpact",
        r"artometrics/tara",
        r"tarabadhwar",
        r"invoicing",
        r"service-account",
        r"id_rsa",
        r"credentials\.json",
        r"\b\.env\b",
        r"@rainfallhealth",
        r"kmcauliffe@",
    ]
]

EMAIL_RE = re.compile(r"\b\S+@\S+\.\S+\b")
DRIVE_RE = re.compile(r"https?://(?:drive|docs)\.google\.com\S+", re.I)
WORKSPACE_RE = re.compile(r"/workspace/\S+", re.I)
IMAGE_RE = re.compile(r'=IMAGE\("([^"]+)"', re.I)

USED_IDS: set[str] = set()


def slugify(text: str) -> str:
    s = text.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")[:60] or "item"
    return s


def short_hash(*parts: str) -> str:
    h = hashlib.sha1("|".join(parts).encode("utf-8")).hexdigest()
    return h[:8]


def make_id(title: str, tab: str, extra: str) -> str:
    base = slugify(title)
    hid = short_hash(title, tab, extra)
    ident = f"{base}-{hid}"
    n = 2
    while ident in USED_IDS:
        ident = f"{base}-{hid}{n}"
        n += 1
    USED_IDS.add(ident)
    return ident


def tab_id(title: str) -> str:
    return {
        "Websites and live apps": "websites",
        "Repos": "repos",
        "Projects": "projects",
        "Documents and lists and drafts": "documents",
        "Needs review": "needs-review",
        "Other people and clients": "other-people",
    }.get(title, slugify(title))


def load_tab(path: Path) -> list[dict]:
    raw = json.loads(path.read_text())
    rows = []
    for i, row in enumerate(raw):
        if i == 0 and row and row[0] == "Title":
            continue
        row = list(row) + [""] * (len(HEADER) - len(row))
        rec = dict(zip(HEADER, row[: len(HEADER)]))
        for k, v in rec.items():
            rec[k] = "" if v is None else str(v).strip()
        if rec["Title"]:
            rows.append(rec)
    return rows


def blob(rec: dict) -> str:
    return " ".join(rec.get(k) or "" for k in HEADER)


def flagged_needles() -> tuple[set[str], set[str]]:
    titles: set[str] = set()
    ids: set[str] = set()
    if ARCHIVE_INV.exists():
        data = json.loads(ARCHIVE_INV.read_text())
        for item in data.get("items", []):
            if not (item.get("exclude_from_public") or item.get("sensitivity_reason")):
                continue
            name = (item.get("name") or "").strip().lower()
            if name:
                titles.add(name)
            link = item.get("link") or ""
            for m in re.findall(r"/([-\w]{20,})", link):
                ids.add(m.lower())
    return titles, ids


def is_tara_or_held_back(rec: dict) -> bool:
    text = blob(rec)
    if re.search(r"artometrics/tara|\btarabadhwar\b|tara badhwar", text, re.I):
        return True
    if re.search(r"mia-?maps|mia maps|mia rentals", text, re.I):
        return True
    title = rec["Title"].strip()
    if re.fullmatch(r"(drive folder:\s*)?tara", title, re.I):
        return True
    return False


def public_blob(rec: dict) -> str:
    return " ".join(rec.get(k) or "" for k in ("Title", "Category", "Summary", "Link", "Live URL", "Duplicate of / related"))


def omit_reason(rec: dict, tab: str, flagged_titles: set[str], flagged_ids: set[str]) -> str | None:
    if tab == "Rainfall":
        return "employer-tab"
    text = blob(rec)
    visible = public_blob(rec)
    title_l = rec["Title"].strip().lower()
    if is_tara_or_held_back(rec):
        return "flagged-or-held-back"
    if title_l in flagged_titles:
        return "flagged-or-held-back"
    for m in re.findall(r"/([-\w]{20,})", text):
        if m.lower() in flagged_ids:
            return "flagged-or-held-back"
    # Coworker personal site, kept out of search until she asks to publish it.
    if re.search(r"\bcarrie\b|carrie-510519|artometrics/carrie", visible, re.I):
        return "sensitive"
    # Employer work that used a generic document title.
    if re.search(r"rainfall health|kmcauliffe-rainfall|rainfall-health", text, re.I):
        return "flagged-or-held-back"
    # Asset rollups explicitly marked keep-private because they mix client or employer files.
    if re.search(r"keep private; do not make public", rec.get("Reason") or "", re.I):
        return "sensitive"
    if OMIT_RE.search(visible) or OMIT_RE.search(rec.get("Link") or "") or OMIT_RE.search(rec.get("Live URL") or ""):
        if re.search(r"\bstratus\b|\bwebfall\b", visible, re.I) and not re.search(
            r"rainfall|\bmadison\b|invoicing|tara|mia-|intern to impact", visible, re.I
        ):
            return "sensitive"
        if re.search(r"rainfall|\bmadison\b|flower\.thief|mia-?maps|mia rentals|intern to impact|tarabadhwar|invoicing", visible, re.I):
            return "flagged-or-held-back"
        return "sensitive"
    return None


def extract_image(preview: str) -> str | None:
    m = IMAGE_RE.search(preview or "")
    if not m:
        return None
    url = m.group(1).strip()
    try:
        host = urlparse(url).hostname.lower()  # type: ignore[union-attr]
    except Exception:
        return None
    if not host:
        return None
    if host in {"artometrics.com", "www.artometrics.com"}:
        return url
    if host.endswith(".web.app") or host.endswith(".firebaseapp.com"):
        if host in BLOCKED_HOSTS:
            return None
        return url
    if host in {"opengraph.githubassets.com", "repository-images.githubusercontent.com"}:
        # /1/owner/repo
        parts = urlparse(url).path.strip("/").split("/")
        if len(parts) >= 3:
            owner, repo = parts[1].lower(), parts[2].lower()
            if (owner, repo) in BLOCKED_REPOS:
                return None
        return url
    return None


def is_allowed_public_url(url: str) -> str | None:
    raw = (url or "").strip()
    # Review rows sometimes list several URLs; only a single public address is published.
    if raw.count("http://") + raw.count("https://") != 1:
        return None
    try:
        u = urlparse(raw)
    except Exception:
        return None
    if u.scheme not in {"http", "https"}:
        return None
    host = (u.hostname or "").lower()
    if not host:
        return None
    if any(part in host for part in ("google.com", "cursor.com", "vercel.app")):
        # allow nothing on vercel (stratus was there); no google
        return None
    if host in BLOCKED_HOSTS:
        return None
    if any(k in (u.query or "").lower() for k in ("token", "key", "secret", "sig")):
        return None
    if host == "github.com":
        parts = [p for p in u.path.split("/") if p]
        if len(parts) < 2:
            return None
        owner, repo = parts[0].lower(), parts[1].lower()
        if (owner, repo) in BLOCKED_REPOS:
            return None
        return f"https://github.com/{parts[0]}/{parts[1]}"
    ok = (
        host in PUBLIC_HOSTS
        or host.endswith(".web.app")
        or host.endswith(".firebaseapp.com")
    )
    if not ok:
        return None
    path = u.path.rstrip("/")
    return f"{u.scheme}://{host}{path}"


def clean_text(text: str) -> str:
    text = DRIVE_RE.sub("", text)
    text = WORKSPACE_RE.sub("", text)
    text = EMAIL_RE.sub("", text)
    text = re.sub(r"\s+", " ", text).strip(" ,;.-")
    return text


def normalize_status(raw: str) -> str:
    s = (raw or "").strip().lower()
    if not s:
        return "draft"
    if s.startswith("live"):
        return "live"
    if s.startswith("dormant"):
        return "dormant"
    if s.startswith("empty"):
        return "empty"
    if "test" in s or "scratch" in s:
        return "test/scratch"
    if s.startswith("draft"):
        return "draft"
    # keep short token
    token = re.split(r"[;\(,]", s)[0].strip()
    return token[:40] or "draft"


def normalize_url(url: str) -> str:
    try:
        u = urlparse(url.strip())
        host = (u.hostname or "").lower()
        path = (u.path or "").rstrip("/")
        return f"{host}{path}"
    except Exception:
        return url.strip().lower().rstrip("/")


def load_screenshots() -> list[dict]:
    manifest = json.loads((SCREEN / "manifest.json").read_text())
    shots = []
    for row in manifest:
        slug = row["slug"]
        url = row["url"]
        # prefer compact jpeg800
        jpg = SCREEN / "jpeg800" / f"{slug}.jpg"
        png = SCREEN / f"{slug}.png"
        src = jpg if jpg.exists() else png
        if src.exists() and row.get("ok"):
            shots.append({"slug": slug, "url": url, "path": src, "key": normalize_url(url)})
    return shots


def wrap_lines(title: str, width: int = 22) -> list[str]:
    words = title.split()
    lines: list[str] = []
    cur = ""
    for w in words:
        trial = (cur + " " + w).strip()
        if len(trial) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines[:6] or [title[:width]]


def write_thumb_svg(ident: str, kicker: str, title: str, footer: str) -> str:
    lines = wrap_lines(title, 22)
    start_y = 168
    texts = "\n  ".join(
        f'<text x="48" y="{start_y + i * 42}" font-family="Georgia, \'Times New Roman\', serif" font-size="32" fill="#1c2348">{xml_escape(line)}</text>'
        for i, line in enumerate(lines)
    )
    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img">
  <rect width="800" height="500" fill="#fff6e8"/>
  <rect x="18" y="18" width="764" height="464" fill="none" stroke="#2d3561" stroke-width="8"/>
  <rect x="34" y="34" width="732" height="56" fill="#ffb961"/>
  <text x="52" y="70" font-family="Courier New, monospace" font-size="22" letter-spacing="2" fill="#1c2348">{xml_escape((kicker or "INVENTORY").upper()[:28])}</text>
  {texts}
  <rect x="48" y="400" width="36" height="36" fill="#b10f24"/>
  <text x="100" y="426" font-family="Courier New, monospace" font-size="20" fill="#2d3561">{xml_escape(footer[:48])}</text>
</svg>
"""
    path = THUMB_DIR / f"{ident}.svg"
    path.write_text(svg)
    return f"/inventory/thumbs/{ident}.svg"


def write_shelf_card(ident: str, title: str, tab: str, category: str, status: str, summary: str, public_url: str | None) -> tuple[str, str]:
    lines = [
        "KSM Inventory",
        title,
        "",
        " · ".join(p for p in [tab, category, status] if p),
        "",
    ]
    if summary:
        lines.append(summary)
        lines.append("")
    if public_url:
        lines.append(public_url)
        lines.append("")
    lines.append("Hosted on this site. Not a private Drive link.")
    text = "\n".join(lines).strip() + "\n"
    assert_safe(text, f"file {ident}")
    name = f"{ident}.txt"
    (FILE_DIR / name).write_text(text)
    return f"/inventory/files/{name}", name


def assert_safe(text: str, where: str) -> None:
    for pat in BANNED_OUTPUT:
        if pat.search(text):
            snippet = text[max(0, pat.search(text).start()-40): pat.search(text).end()+40]
            raise SystemExit(f"Refusing to write {where}; matched {pat.pattern}: ...{snippet!r}...")


def match_screenshot(rec: dict, shots: list[dict]) -> dict | None:
    urls = [rec.get("Live URL") or "", rec.get("Link") or ""]
    keys = {normalize_url(u) for u in urls if u.startswith("http")}
    for shot in shots:
        if shot["key"] in keys:
            return shot
        # also compare host-only for site roots
        for k in keys:
            if k and (k == shot["key"] or k.startswith(shot["key"] + "/") or shot["key"].startswith(k + "/")):
                return shot
    return None


def copy_thumb(src: Path, ident: str) -> str:
    ext = src.suffix.lower() or ".jpg"
    dest = THUMB_DIR / f"{ident}{ext}"
    shutil.copyfile(src, dest)
    return f"/inventory/thumbs/{ident}{ext}"


def main() -> None:
    if THUMB_DIR.exists():
        shutil.rmtree(THUMB_DIR)
    if FILE_DIR.exists():
        shutil.rmtree(FILE_DIR)
    THUMB_DIR.mkdir(parents=True)
    FILE_DIR.mkdir(parents=True)

    flagged_titles, flagged_ids = flagged_needles()
    shots = load_screenshots()

    omitted = Counter()
    items: list[dict] = []
    source_rows = 0

    screenshot_thumbs = 0
    typographic_thumbs = 0
    og_thumbs = 0

    for tab, filename in TAB_FILES:
        rows = load_tab(SOURCE / filename)
        source_rows += len(rows)
        if tab == "Rainfall":
            omitted["employer-tab"] += len(rows)
            omitted["total"] += len(rows)
            continue
        for rec in rows:
            reason = omit_reason(rec, tab, flagged_titles, flagged_ids)
            if reason:
                omitted[reason] += 1
                omitted["total"] += 1
                continue
            title = clean_text(rec["Title"])
            if not title:
                omitted["empty-title"] += 1
                omitted["total"] += 1
                continue
            # If cleaning the title emptied a banned name, skip
            if OMIT_RE.search(title) or is_tara_or_held_back({"Title": title, **{k: "" for k in HEADER if k != "Title"}}):
                omitted["flagged-or-held-back"] += 1
                omitted["total"] += 1
                continue

            preview = rec["Preview"]
            title_only = preview.strip().lower() == "private"
            ident = make_id(title, tab, rec.get("Link") or rec.get("Live URL") or rec["Status"])

            category = clean_text(rec["Category"]) if not title_only else ""
            # Don't publish a Rainfall category if any slipped through
            if re.search(r"rainfall", category, re.I):
                omitted["flagged-or-held-back"] += 1
                omitted["total"] += 1
                continue
            status = "" if title_only else normalize_status(rec["Status"])
            summary = "" if title_only else clean_text(rec["Summary"])
            last_activity = "" if title_only else clean_text(rec["Last activity"])

            public_url = None
            if not title_only:
                for cand in (rec.get("Live URL"), rec.get("Link")):
                    if cand:
                        public_url = is_allowed_public_url(cand)
                        if public_url:
                            break

            # thumbs
            thumb = None
            thumb_kind = "type"
            if not title_only:
                shot = match_screenshot(rec, shots)
                if shot:
                    thumb = copy_thumb(shot["path"], ident)
                    thumb_kind = "screenshot"
                    screenshot_thumbs += 1
                else:
                    image_url = extract_image(preview)
                    # We do not hotlink; typographic fallback unless we already copied a screenshot.
                    # Public og images stay as typographic cards to avoid adding a network dependency
                    # at build time for GitHub (optional download skipped if it fails later).
                    if image_url:
                        thumb_kind = "og-missing"
            if not thumb:
                kicker = "Inventory" if title_only else (category or tab)
                footer = "Title only" if title_only else (status or tab)
                thumb = write_thumb_svg(ident, kicker, title, footer)
                typographic_thumbs += 1
                thumb_kind = "type" if thumb_kind != "og-missing" else "type"

            download = None
            download_name = None
            if not title_only:
                download, download_name = write_shelf_card(
                    ident, title, tab, category, status, summary, public_url
                )

            item = {
                "id": ident,
                "title": title,
                "tab": tab,
                "tabId": tab_id(tab),
                "category": category,
                "status": status,
                "summary": summary,
                "lastActivity": last_activity,
                "titleOnly": title_only,
                "thumb": thumb,
                "thumbKind": "screenshot" if thumb_kind == "screenshot" else "type",
            }
            if public_url:
                item["publicUrl"] = public_url
            if download:
                item["download"] = download
                item["downloadName"] = download_name

            packed = json.dumps(item, ensure_ascii=False)
            assert_safe(packed, f"item {ident}")
            items.append(item)
            if title_only:
                omitted["private-title-only-shown"] += 1
            else:
                omitted["shown-full"] += 1

    # tabs present
    tab_counts = Counter(i["tab"] for i in items)
    tabs = [
        {"id": tab_id(name), "title": name, "count": tab_counts[name]}
        for name in TAB_ORDER
        if tab_counts[name]
    ]

    meta = {
        "generated": datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %I:%M %p PT"),
        "source": "Master Inventory sheet (upgraded local snapshot)",
        "sourceRows": source_rows,
        "shown": len(items),
        "shownFull": omitted["shown-full"],
        "shownTitleOnly": omitted["private-title-only-shown"],
        "omittedEmployerTab": omitted["employer-tab"],
        "omittedFlaggedOrHeldBack": omitted["flagged-or-held-back"],
        "omittedSensitive": omitted["sensitive"],
        "omittedEmptyTitle": omitted["empty-title"],
        "omittedTotal": omitted["total"],
        "screenshotThumbs": screenshot_thumbs,
        "typographicThumbs": typographic_thumbs,
        "tabs": len(tabs),
        "rule": (
            "The employer tab is omitted. Flagged and held-back records are omitted. "
            "Rows marked private are title-only, with no summary or links. "
            "Downloads are text shelf cards hosted on this site. "
            "Open links are public live sites or public GitHub repos only. "
            "Private Drive links are not published."
        ),
    }

    catalog = {"meta": meta, "tabs": tabs, "items": items}
    raw = json.dumps(catalog, ensure_ascii=False, indent=2) + "\n"
    assert_safe(raw, "catalog")
    OUT_CATALOG.write_text(raw)

    report = {
        "meta": meta,
        "omitted": dict(omitted),
        "tabCounts": dict(tab_counts),
        "statusCounts": dict(Counter(i["status"] for i in items if not i["titleOnly"])),
        "categoryCounts": dict(Counter(i["category"] for i in items if i["category"]).most_common(40)),
    }
    OUT_META.write_text(json.dumps(report, indent=2) + "\n")
    # report file is not deployed; still avoid secrets
    print(json.dumps(meta, indent=2))


if __name__ == "__main__":
    main()
