# Songwriting Collaboration Research Pipeline

Phased Billboard → Genius → MusicBrainz pipeline for studying co-writer networks among
all-time Hot 100 artists.

## Status

| Phase | Output | Status |
|-------|--------|--------|
| 1. Artist seed list | `data/artists_seed.csv` | **Done** — awaiting review |
| 2. Charting singles | `data/charting_singles.csv` | Pending |
| 3. Genius writer credits | `data/song_credits.csv` | Pending |
| 4. MusicBrainz cross-check | `data/credit_crosscheck.csv` | Pending |
| 5. Analysis-ready tables | `data/songs_final.csv`, `data/artist_summary.csv` | Pending |

## Phase 1 source

- **Chart:** [Billboard Greatest of All Time Hot 100 Artists](https://www.billboard.com/charts/greatest-hot-100-artists/)
- **Retrieved:** 2026-08-13 from Billboard’s published live chart page
- **Columns:** `rank`, `artist_name`
- **N:** 100 artists (ranks 1–100, no gaps, no duplicate names)

Billboard ranks artists by combined Hot 100 performance (inverse points across weekly
chart history). The live page is the authoritative source for this seed list.
