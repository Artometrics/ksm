---
title: "Questroad"
description: "A GPS quest RPG on a real map, with a downtown San Francisco demo. Standalone site retired."
pubDate: 2026-11-13T23:07:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The project README says "Questroad — GPS quest RPG." How to play: allow location, walk the map, fight monsters, collect loot, and take quests from real nearby places. The play button runs a demo walk in downtown San Francisco.

Live URL: https://questroad-510519.web.app. Repo: https://github.com/Artometrics/questroad. The archive README also notes a box copy at `/workspace/games/waze` for the same Firebase site.

## Why it was built

The README describes how to play, not why the project started. The archive index says retire the standalone site and fold the idea into Dawn, because GPS quests and walking the real world fit Dawn. That fold is the index note. It is not a completed change in Dawn.

## How it worked

`public/index.html` loads MapLibre GL 4.7.1 from unpkg and `config.js`. The title is Questroad, with `noindex,nofollow`. `firebase.json` hosts site `questroad-510519` from `public/` and points at `firestore.rules`. The only `package.json` is under `tests/` and depends on `firebase` and `@firebase/rules-unit-testing`. Its npm `test` script is still the placeholder. `tests/rules.test.mjs` is a separate file. There is no `project.godot`.

`public/config.js` sets `window.QR_CONFIG = { backend: false, firebase: null }`. The comment says false means local or mock mode. `docs/BACKEND.md` status is "OFF" at v0.4, dated October 25, 2026. It lists anonymous sign-in, cloud save, and a local sim for wanderers, rivals, party, and guild when the flag is off. Kenney sprite packs are CC0, named in `LICENSES` and in `public/assets/kenney/*.txt`.

Six commits, all author-dated October 25, 2026, HEAD `4828f94e33c2`:

- `d2c0c77` prototype v0.
- `2467d16` v0.2: Kenney CC0 sprites, hero picker, road reports, flagged Firebase backend, Firestore rules and tests.
- `2d56659` v0.3: real-OSM daily quests from vector tiles, landmark bosses, HP and stats, inventory and equipment, daily streak, events, weekly leaderboard, rules and tests.
- `bbfef46` v0.4: onboarding, walk cycles, party and guild tab, pilgrimage and bounty and report and party quests, recenter, landscape layout, `docs/BACKEND.md`.
- `c090d6f` v0.3 to v0.4 save-upgrade test.
- `4828f94` README and gitignore snapshot.

There is no `screenshots.zip` in the folder listing read for this report. A lab-report draft names `questroad-510519_web_app_desktop.png` and a mobile capture. Those files were not in that listing.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive index says the repo was deleted at 6:35 PM PT and the hosting site at 6:38 PM PT. Firebase project `questroad-510519` had been deleted earlier. The idea is marked to fold into Dawn. The standalone site is retired.

## What was learned

The archive does not record a separate lesson. The recorded decision is that the walking-quest idea belongs with Dawn, and that this host does not stay up on its own.

## Download

https://drive.google.com/drive/folders/1ugpj1946MfvEp_1zpQwW8ErZJKh0f9VN

The folder holds `README.md`, `questroad.bundle`, `questroad-working-tree.zip`, and `questroad-live-mirror.zip`. Serve `public/` with `python3 -m http.server`. Map, GPS, and Firestore are limited offline. `backend` in the archived `config.js` is false.
