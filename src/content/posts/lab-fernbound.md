---
title: "Fernbound"
description: "A Godot web shell on Firebase. The archive README says fold it into Dawn. The pack was not opened."
pubDate: 2026-11-13T23:02:00.000Z
draft: false
tags:
  - Lab reports
  - Merged
author: "Kyle McAuliffe"
---

## What it was

The archive-folder README, section "What it is," says: "Canvas game to be merged into Dawn as a Pokémon-style feature: hunt real monsters and spirits from history near you."

That sentence is the archive README. No project README was in the live mirror. A design doc dated November 9, 2026 ("Fernbound — Design Doc") does not contain that phrase. It calls Fernbound a thin experimental Hosting site, says the repo was not confirmed, and says key flows, the data model, and the tech stack were unknown beyond a Firebase-hosted web build. Its open risks include "No repo mapping, no README, no playtest."

Live URL in the archive README: https://fernbound-510519.web.app. The live page title is "Fernbound," with `noindex, nofollow`.

## Why it was built

The design doc does not establish a feature list. The archive README is the only place the spirit-hunt sentence appears, and it is written as the merge description.

## How it worked

The archive README stack line is "Canvas / static web, Firebase Hosting."

The live mirror `index.html` is a Godot web-export shell. It loads `index.js`, constructs `new Engine(GODOT_CONFIG)`, and sets `fileSizes` to `index.pck` at 2,039,352 bytes and `index.wasm` at 39,514,754 bytes. The page has `<canvas id="canvas">` and splash `index.png`. `index.js` is the Godot engine loader. A search of that loader found no "Fernbound," "pokemon," "spirit," or "monster" strings. The wget mirror did not save `index.pck` or `index.wasm`, so the gameplay inside the pack was not read.

`fernbound-working-tree.zip` is 11,981,445 bytes. It was not downloaded for this report. A project README inside that zip was not opened. The archive README says there was no git history.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT, from `/workspace/fernbound-deploy`. The archive README says save a copy, then merge into Dawn, and do not delete until that merge exists. Nothing was deleted from Firebase or GitHub as part of this archive. No GitHub repo was on file. The Dawn merge is not in this repository.

## What was learned

The archive does not record a separate lesson. The recorded decision is to keep the copy and fold the game into Dawn. What the pack actually plays was not readable from the files that were opened.

## Download

https://drive.google.com/drive/folders/1xtMxmPjFzBpJqs45PllaseDVljyPsWFW

The folder holds `README.md`, `fernbound-live-mirror.zip` (95,381 bytes), and `fernbound-working-tree.zip`. The README says to serve `public/` from the working tree with `python3 -m http.server`.
