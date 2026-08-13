# Phase 2 — Charting singles QA notes

## Source

- Public dataset: [https://github.com/utdata/rwd-billboard-data](https://github.com/utdata/rwd-billboard-data)
- File: `data-out/hot-100-current.csv` (mirrored locally as `data/raw/hot-100-current.csv`)
- Download URL: `https://raw.githubusercontent.com/utdata/rwd-billboard-data/main/data-out/hot-100-current.csv`
- Weekly Hot 100 rows from Aug 1958 through present; aggregated to song level.

## Matching rules

- Include songs where the seed artist (or alias) is a **lead or equal-billed**
  primary credit (exact match, or before `Featuring` / `With` / `Duet`).
- Exclude songs where the seed artist appears **only as a featured guest**.
- `year` = calendar year of the song's first Hot 100 appearance.
- `peak_position` = best (lowest) peak across weekly rows.
- `weeks_on_chart` = max weeks-on-chart observed for that title/artist.
- Titles are merged case-insensitively (Billboard sometimes changes capitalization on re-entries).

## Counts

- Seed artists: 100
- Artists with ≥1 matched single: 100
- Artists with **zero** matches: 0
- Total charting singles (rows): **4743**
- Peak-year range: 1958–2026

## Songs per artist (top / bottom)

| artist_name | n_songs |
|-------------|---------|
| Drake | 315 |
| Taylor Swift | 271 |
| Kanye West | 108 |
| Elvis Presley | 107 |
| Justin Bieber | 106 |
| The Weeknd | 102 |
| Ariana Grande | 98 |
| Beyonce | 93 |
| Eminem | 92 |
| James Brown | 86 |
| … | … |
| Richard Marx | 17 |
| The Black Eyed Peas | 16 |
| TLC | 15 |
| Paula Abdul | 14 |
| Destiny's Child | 13 |

## Sample rows

| artist_name | song_title | year | peak_position | weeks_on_chart |
|-------------|------------|------|---------------|----------------|
| The Beatles | A Hard Day's Night | 1964 | 1 | 13 |
| The Beatles | All You Need Is Love | 1967 | 1 | 11 |
| The Beatles | Can't Buy Me Love | 1964 | 1 | 10 |
| The Beatles | Come Together/Something | 1969 | 1 | 16 |
| The Beatles | Eight Days A Week | 1965 | 1 | 10 |
| The Beatles | Get Back | 1969 | 1 | 12 |
| The Beatles | Hello Goodbye | 1967 | 1 | 11 |
| The Beatles | Help! | 1965 | 1 | 13 |
| Boyz II Men | Thank You In Advance | 2000 | 80 | 4 |
| Connie Francis | Don't Break The Heart That Loves You | 1962 | 1 | 13 |
| Connie Francis | Everybody's Somebody's Fool | 1960 | 1 | 18 |
| Connie Francis | My Heart Has A Mind Of Its Own | 1960 | 1 | 17 |

## Known limitations

- Alias coverage is imperfect for career name changes (e.g. partial Wings,
  Sonny & Cher vs Cher solo).
- Dual-billed songs (`A & B`) are attributed to **each** matching seed artist,
  so song titles can appear under more than one `artist_name`.
- Guest-only features are excluded by design (see matching rules).
- Raw weekly archive may have rare historical gaps inherited from upstream.
