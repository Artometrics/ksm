---
title: "Godot game page"
description: "Part of artometrics.com rebuilt in Godot 4.7: a home page and two articles with 2D and 3D charts."
pubDate: 2026-11-13T23:08:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The project README says "A faithful copy of part of artometrics.com rebuilt as a Godot 4.7 app, to test what a game engine adds." `project.godot` `config/name` is "Artometrics (Godot experiment)." Main scene `res://main.tscn`.

Live URL in the archive: https://artometrics-godot-510519.web.app. Repo: https://github.com/Artometrics/artometrics-godot.

## Why it was built

The README states the test: rebuild part of the magazine in Godot and see what the engine adds. The archive index says it is a Godot port of the Artometrics site, not a Dawn game loop, and to retire it.

## How it worked

`project.godot` uses `config_version=5` and renderer `gl_compatibility`. The README is what says Godot 4.7. The project file that was opened does not set `config/features` to a 4.7 string. Scripts are `main.gd`, `chart.gd`, and `chart3d.gd`. The Web export preset writes `build/web/index.html` and the head include sets `noindex, nofollow`. `deploy/firebase.json` is site `artometrics-godot-510519`. `tools_convert.py` is described in the README as the converter from qmd and plotly JSON to `data/content.json`.

`data/content.json` has `cards` (8 titles) and `articles` (2 titles): "How Long Number-One Hits Stay on Top of the Hot 100" and "Oscars vs Grammys: How Award Shows Build Prestige." The README names deep links `#/billboard`, `#/oscars`, and `#/billboard/3d`. Charts in `chart.gd` and `chart3d.gd` are described in the README as animated draw-in, hover or tap tooltips, and a 3D orbit toggle. The README's known gaps: the box-plot chart was not ported, other cards are "coming soon," and text is not selectable or indexable.

One commit, HEAD `ba2ce1a16299`, October 25, 2026, 10:38 AM PT, author Artometrics: "Godot 4 experiment: Artometrics home + 2 articles with interactive 2D/3D charts."

![Godot game page desktop capture from the archive screenshots zip](/images/lab-reports/godot-game-page-desktop.png)

The file in `screenshots.zip` is `artometrics-godot-510519_web_app_desktop.png`, 1440×900. The zip also contains a mobile capture. The repo itself also names `shots/desktop-home.png`, `shots/desktop-article.png`, `shots/desktop-chart.png`, and `shots/desktop-3d.png`.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive index says the repo was deleted at 6:35 PM PT and the hosting site at 6:38 PM PT.

## What was learned

The archive does not record a separate lesson beyond the README's own test. The recorded outcome is that the Godot port was retired.

## Download

https://drive.google.com/drive/folders/1kGUV0AK0CO3Fcffof1ZyDPjCKZjXDCmV

The folder holds `README.md`, `godot-game-page.bundle`, `godot-game-page-working-tree.zip`, `godot-game-page-live-mirror.zip`, and `screenshots.zip`. Serve a web export over HTTP, not as a `file://` URL. The README export line is `godot --headless --path . --export-release Web build/web/index.html`.
