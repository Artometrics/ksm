---
title: "Knightmare"
description: "A Three.js greybox of four rooms, built to prove one mechanic: Tuning In."
pubDate: 2026-11-13T23:09:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The project README says Knightmare is a static, single-page 3D greybox of the prologue's first four rooms: the dormitory, the kitchen, the courtyard, and the great hall. It exists to prove one mechanic, Tuning In.

Live URLs in the archive README: https://artometrics-knightmare.web.app and https://knightmare-ksm.web.app. The second site is described as a password-gated copy. Repo: https://github.com/Artometrics/knightmare. The archive README says screenshots of knightmare-ksm are of the lock page only, and that no password is stored in the archive.

## Why it was built

The README says the greybox exists to prove Tuning In. The archive index says retire it as a far-out greybox prototype.

## How it worked

`index.html` (`<title>Knightmare</title>`, `noindex, nofollow`), `game.js` (the README says the whole game, as an ES module), and `vendor/three.module.js` (Three.js r170, about 1.3 MB unminified). `firebase.json` hosts the repo root. There is no `project.godot` and no `package.json`.

The README, which points at those three files:

- Tuning In: hold attention on a face until the line comes clear, then split attention between two faces. Tune In is Space or right mouse on desktop, and the ring button on a phone. Split focus is Q, the right bumper, or the phone Split button, after H-1 is Clear.
- Rooms, in the commit subjects and the README: dormitory and kitchen in the first greybox, courtyard and steward as room 3, great hall and split focus as room 4. An end card follows the side-passage door.
- Phone slow-walk is stick pressure. Desktop slow-walk is Ctrl.
- `prefers-reduced-motion` is specified in the README: no camera bob, fades cut, the hall torch holds steady.
- The README says these stay out: memory journal, compose wheel, glitch tell, courtier, porter repeat line. It also says there is no audio. Sight is the mechanic.

Five commits, HEAD `4838394836fc`. October 30–31, 2026: initialize, Tuning In greybox, courtyard, great hall. November 10, 2026, 9:00 AM PT: README overhaul and Firebase Hosting config. There is no `screenshots.zip` in the folder.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive index says the repo was deleted at 6:35 PM PT and both hosting sites at 6:38 PM PT.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that both sites were retired. The password for the second site was not stored.

## Download

https://drive.google.com/drive/folders/1dqPGnKW6PxP3JkKEHx0pa1auIfPlwQ_9

The folder holds `README.md`, `knightmare.bundle`, `knightmare-working-tree.zip`, and `knightmare-live-mirror.zip`. From the repo root, `python3 -m http.server` and open the localhost URL. Do not open `index.html` as a file.
