---
title: "Spider Mom Rooftops"
description: "Run, jump, and web-swing an eight-roof San Francisco level. Three.js, two commits."
pubDate: 2026-11-13T23:06:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The project README title is "Spider Mom Rooftops." How to play: run, jump, and web-swing across rooftops to finish the mission, with touch controls on a phone. `site/index.html` is titled "Spider Mom · Rooftops." The blurb in that file: a courier walked out with 5 stolen drives and is running the roofs toward the Bay Bridge. Grab the drives, then stop the courier.

Live URL: https://spidermom-rooftops.web.app. Repo: https://github.com/Artometrics/spider-mom-rooftops.

The archive README also says "plus concept art and a design bible." The cloned bundle has no filename containing "concept" or "bible," and no markdown besides `README.md`. The working-tree zip is 82,927,391 bytes and was not downloaded, so that line is not confirmed from a file inside the zip.

## Why it was built

The page blurb is the mission. The archive index says retire it: far-out original work, not a Dawn feature.

## How it worked

`site/index.html` is the playable page. `site/lib/three.module.min.js` reports Three.js r169. `GLTFLoader.js` is present. Character files are `site/mara.glb`, `mara_rigged.glb`, `anim.py`, and `rig.py`. `deploy/firebase.json` names site `spidermom-rooftops`. The page in the bundle is under `site/`, not a directory named `game/` or `public/`. There is no `package.json` and no `project.godot`.

In `site/index.html`: `ROOFS` has 8 objects. On-screen keys are WASD, Space, and hold F or right-click to web-swing. Touch lines are a left stick, JUMP, and hold WEB. `updHud()` shows drives out of 5. Landmark comments in the same file name the Bay Bridge, Transamerica, Salesforce, and Sutro. `fogTex` is in the same file.

Two commits, HEAD `86347fdee036`, both October 25, 2026. `69cfdae` at 4:42 AM PT (Grok Bot) adds the 8-roof level. `86347fd` at 10:17 AM PT (Artometrics) adds the README snapshot.

![Spider Mom Rooftops desktop capture from the archive screenshots zip](/images/lab-reports/spider-mom-desktop.png)

The file in `screenshots.zip` is `spidermom-rooftops_web_app_desktop.png`, 1440×900. The zip also contains a mobile capture.

## Where it lives now

Archived November 13, 2026, 6:24 PM PT. The archive index says the repo was deleted at 6:35 PM PT and the hosting site at 6:38 PM PT.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the rooftop game was retired.

## Download

https://drive.google.com/drive/folders/1aIRszIv6lmJXtiJo2OHFcHM5AIHxc531

The folder holds `README.md`, `spidermom-rooftops.bundle`, `spidermom-rooftops-working-tree.zip`, `spidermom-rooftops-live-mirror.zip`, and `screenshots.zip`. In the bundle the page is `site/index.html`. Serve that folder over HTTP.
