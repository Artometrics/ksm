# Phase 1 — Artist seed list QA notes

## Source verification

- Official URL: https://www.billboard.com/charts/greatest-hot-100-artists/
- Parsed 2026-08-13 from Billboard’s published chart page (live HTML → markdown dump)
- Cross-check: top 10 matches Wikipedia’s “Top 10 artists of all time (1958–2021)”
  summary on the Hot 100 achievements page (Beatles → Rihanna)

## QA checks (all passed)

- Row count: **100**
- Ranks: contiguous 1–100
- Unique `artist_name`: 100 / 100
- No blank names

## Naming quirks to watch in Phase 2 matching

These Billboard display strings may not match Hot 100 historical datasets 1:1:

| Seed name | Likely match variants |
|-----------|------------------------|
| Daryl Hall John Oates | Hall & Oates, Daryl Hall & John Oates |
| The 4 Seasons | The Four Seasons, Frankie Valli & The Four Seasons |
| Jackson 5/The Jacksons | The Jackson 5, The Jacksons, Jackson 5 |
| Beyonce | Beyoncé |
| Gloria Estefan/Miami Sound Machine | Gloria Estefan, Miami Sound Machine |
| Bob Seger/The Silver Bullet Band | Bob Seger, Bob Seger & The Silver Bullet Band |
| P!nk | Pink, P!nk |
| JAY-Z | Jay-Z, JAY Z |
| Carpenters | The Carpenters |
| Commodores | The Commodores |
| Eagles | The Eagles |
| Dion | Dion & The Belmonts (partial career) |

## Methodology note

Billboard’s page blurb still mentions an Oct 2015 cutoff in places, but the **live
ranked list** includes post-2015 acts (Drake, Post Malone, The Weeknd, etc.).
We treat the live chart order as authoritative for this seed.
