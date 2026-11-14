---
title: "Voltspire"
description: "A retro-futurist first-person maintenance shooter in Godot 4.7. One hall, three enemy types."
pubDate: 2026-11-13T23:10:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The project README at HEAD `83094cdb2c25` says "A retro-futurist first-person shooter prototype in Godot 4.7 (GDScript). You are a maintenance technician sent into District VII, an abandoned art-deco power hall." The kit named there is a service pistol, a pipe wrench, an arc lance, and a kinetic grip. `project.godot` `config/description` is "Retro-futurist first-person maintenance shooter prototype." `config/version` is `0.1.0`.

Two live URLs in the archive README: https://voltspire-510519.web.app and https://artometrics-voltspire.web.app. Repo: https://github.com/Artometrics/voltspire. The project README at the same HEAD says the Firebase Hosting deploy "has not been run yet." The archive README, written later, lists both live URLs.

## Why it was built

The README is the fiction and the kit. The archive index says retire it: a far-out retro-futurist FPS, not a Dawn feature.

## How it worked

`project.godot` is Godot 4 (`config_version=5`, features `4.7`), renderer GL Compatibility, main scene `res://scenes/main.tscn`. The README names Godot 4.7.2 for export. `export_presets.cfg`, `tools/export.sh`, `tools/smoke.sh`, and `firebase.json` (`hosting.public` = `build/web`) are in the tree. `build/` is gitignored. The README says the web export writes `build/web/index.html`.

From the README structure section and the files present at HEAD:

- Hall, player, HUD, and pause menu: `scenes/main.tscn`, `scenes/player/player.tscn`, `scenes/ui/hud.tscn`, `scenes/ui/pause_menu.tscn`.
- Move, look, pistol, wrench, and off-hand powers: `scripts/player/player.gd`, `weapon_rig.gd`, `offhand.gd`.
- Enemy display names in `scripts/enemies/automaton.gd`: Cogling, Lampwight, Kilnbrute. The README status line is one hall, three enemy types, two weapons, two powers, pickups, a pause menu, and a clear/death panel.
- Pickups and props in `scripts/world/`. Energy bolt in `scripts/combat/energy_bolt.gd`. Procedural audio in `scripts/autoload/sfx.gd`.
- The README says geometry, materials, and sound are generated in-engine, with no third-party meshes, textures, fonts, or audio.
- Headless smoke test: `tools/smoke.sh`.

Four commits, HEAD `83094cdb2c25`. October 20, 2026: initialize, add the prototype, add export presets. November 10, 2026, 8:59 AM PT: Firebase Hosting config, noindex web export, and an upgraded README.

![Voltspire combat.png from docs/screenshots in the git bundle](/images/lab-reports/voltspire-combat.png)

There is no `screenshots.zip` in the Drive folder. The bundle contains `docs/screenshots/combat.png` and `docs/screenshots/power.png`. The image above is `combat.png`.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive index says the repo was deleted at 6:35 PM PT, both hosting sites at 6:38 PM PT, and project `voltspire-510519` about 6:39 PM PT.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that both sites were retired.

## Download

https://drive.google.com/drive/folders/195wGn8hFuSG2O7l59Hi0l7mi3XhduoNJ

The folder holds `README.md`, `voltspire.bundle`, `voltspire-working-tree.zip`, and `voltspire-live-mirror.zip`. Serve the Godot web export over HTTP. To edit, `godot --path .` with Godot 4.7.2.
