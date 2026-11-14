---
title: "Nightlight"
description: "A flashlight horror walk to a radio desk. Three.js, ten commits, retired November 13."
pubDate: 2026-11-13T23:13:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The project README at HEAD `c5b73e7f26c2` says "Nightlight — flashlight horror walk-around." The play line is "Turn phone sideways, tap ▶, and walk to the radio station." The station counts when you reach the radio desk inside the cabin.

Firebase site `nightlight-510519`, live URL https://nightlight-510519.web.app. Repo recorded in the archive: https://github.com/Artometrics/nightlight.

## Why it was built

The README is a how-to-play, not an origin story. The archive index note says Kyle used this as the example that does not fold into Dawn. The archive README decision is archive, then retire.

## How it worked

`public/index.html` is the page (`<title>Nightlight</title>`, `noindex,nofollow`). `public/vendor/build/three.module.js` is Three.js r170. `firebase.json` hosts site `nightlight-510519` from `public/`. There is no `project.godot` and no root `package.json`.

The README and the files it names:

- Flashlight, hold-to-focus, and interact rules are in the "Decided" section of `README.md` and in `public/game.js`. The README says range 28, battery left off, only the cabin door is hold-to-open, and prompts are hand-lettered words.
- Character swap: `public/characters/index.json` lists `hana.glb` (Hana), `ranger.glb` (Ranger), and `robot.glb` (Robot). The README says a `.glb` can be loaded from the device.
- Footsteps: the README says gravel versus wood, Web Audio bursts, no audio files.
- One-time stair flicker, pine occlusion of the cabin window (`public/pine-window-reveal.js`), a ridge lookback (`public/dark-valley.js`), a valley moan (`public/distant-sound.js`), the radio-desk finish (`public/station-room.js`), and a run cap on the stairs and inside the station room (`public/move-speed.js`).

Ten commits on `main`, HEAD `c5b73e7f26c2`. Author dates in Pacific time, newest first: November 9 (run cap; valley moan), November 8 (radio desk), October 31 (ridge, pines, flicker, footsteps), October 30 (stair handrail; flashlight and gate), October 25 (README snapshot, author Artometrics). A draft that said 19 commits does not match this bundle.

![Nightlight desktop capture from the archive screenshots zip](/images/lab-reports/nightlight-desktop.png)

The file in `screenshots.zip` is `nightlight-510519_web_app_desktop.png`, 1440×900. The zip also contains `nightlight-510519_web_app_mobile.png`. No `video/playthrough.webm` was in the Drive folder listing.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive index says the repo was deleted at 6:35 PM PT and the hosting site at 6:38 PM PT. The idea was not marked to fold into Dawn.

## What was learned

The archive index records one decision in plain language: this flashlight walk was the example that stays retired, rather than a Dawn feature.

## Download

https://drive.google.com/drive/folders/1aUzM6Nj6QCX1FbVrtSlqXo2Mylfgxac1

The folder holds `README.md`, `nightlight.bundle`, `nightlight-working-tree.zip`, `nightlight-live-mirror.zip`, and `screenshots.zip`. Restore with `git clone` of the bundle. The playable tree is `public/`. Serve it over HTTP.
