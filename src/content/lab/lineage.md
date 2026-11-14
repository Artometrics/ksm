---
title: "Lineage"
description: "A browser battle for Cannae, Austerlitz, and Waterloo. The archive says merge it into Pantheon and keep the repo."
pubDate: 2026-11-14
order: 17
disposition: "Pantheon"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Lineage is a historical battle you play in the browser. The README on `Artometrics/lineage` calls it a Napoleonic battle sim and says to pick Cannae, Austerlitz, or Waterloo. The title screen in `public/index.html` is wider than that README: Alexander at Gaugamela and Caesar at Alesia are locked buttons, and Cannae, Austerlitz, and Waterloo are the playable chapters. The host in the README and in `DEPLOY.md` is [lineage-waterloo.web.app](https://lineage-waterloo.web.app), on Firebase project `artometrics-510519`. The page ships `noindex`.

The repo was still readable on 14 Nov 2026. The archive index says not to delete the repo or the site.

## What it was

A phase-by-phase battle, tap or click, with a command map. Waterloo is `public/game.js` (and `three.module.js` vendored next to it). Austerlitz is `public/austerlitz.js`. Cannae is `public/cannae.js`. Specs live in `docs/AUSTERLITZ_SPEC.md`, `docs/CANNAE_SPEC.md`, and `docs/ROADMAP_UNREAL.md`. Python files `test.py`, `test_cannae.py`, `test_v2.py`, and `test_v3.py` sit at the repo root. Screenshot PNGs are committed at the root and under `shots-v2/` and `shots-v3/`. This report does not describe those images.

## Why it was built

The title screen says "Play the great commanders. Give the real orders." The commits say the same thing in smaller pieces. Waterloo v1 was the baseline deployed 25 Oct 2026. Austerlitz became a chapter the same day. Cannae arrived on 9 Nov 2026 as a chapter about giving ground: Hannibal holds the centre, the crescent bends, the Africans turn inward. A follow-up the same day sets the end screen to Livy 22.49 (45,500 foot and 2,700 horse) and keeps Britannica's 55,000 as a note. PR #3 on 10 Nov adds an opt-in Livy dust view and a drier Roman cold open.

The 13 Nov archive row still says "Cannae is roadmap-only." The repo disagrees, and the Cannae commits are older than that row. I am treating the README, `index.html`, and those commits as the current fact. The index row is the merge plan, and it is stale on Cannae.

## How it worked

Vanilla JavaScript and Three.js, same pairing the archive index notes for Pantheon. Firebase Hosting of `public/`. Controls, from the title screen: WASD or arrows, or the left stick. Act with E or Space. Map with M. Sound toggle on the page.

`DEPLOY.md` creates the Hosting site `lineage-waterloo` on project `artometrics-510519` and deploys `hosting:lineage-waterloo`. Offline, serve `public/` over HTTP.

The index's suggested landing inside Pantheon is `site/lineage/`. On 14 Nov 2026 a code search of `Artometrics/pantheon` for "lineage" returned no matches. GitHub marked that search incomplete. The Pantheon README I read the same day describes Pantheon's own fighter (Arcade, Story, Versus, Training) and does not mention Lineage.

## What I learned

The playable part got ahead of the archive sentence. Cannae was a chapter with a cited death toll before the index called it a roadmap. The locked chapters are honest about that: Alexander and Alesia are on the title screen and disabled. The Unreal roadmap doc is a doc. The thing that runs is the browser build.

The merge target is Pantheon, not Dawn. Both are vanilla JS and Three.js, which is the reason the index gives.

## Where it went

Pantheon, as a planned merge. The repo and the Waterloo host were to stay until that merge exists. As of 14 Nov 2026 the Lineage repo was still its own repo. The Pantheon code search returned no hit and was marked incomplete. The Drive folder is the copy if the repo is retired later. It has not been retired.

## Download the archive

Folder: [Lineage](https://drive.google.com/drive/folders/13jIB8WmZ9r1PZomNeP2MP9qJsQDhfant).

The index says six files in that folder matched local sizes on 13 Nov 2026 at 8:29 PM PT. The git bundle is not in this folder. It is in the GitHub remainder set as three parts, `Artometrics--lineage.bundle.part-00` through `part-02`. The folder README there is described as an older copy.

Repo, still up when this was written: [Artometrics/lineage](https://github.com/Artometrics/lineage).

## Sources

- `Artometrics/lineage` README, `DEPLOY.md`, `public/index.html`, and `public/` listing, read 14 Nov 2026
- Commits `ace3d9b8` (Waterloo v1), `e80937ad` (Austerlitz), `757f4c5c` (Cannae, PR #1), `7d0c5941` (Livy 22.49, PR #2), `e56881b4` (Livy dust view, PR #3)
- Artometrics Archive Index, Lineage row
- Code search of Artometrics/pantheon on 14 Nov 2026
