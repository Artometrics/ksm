---
title: "Godot test"
description: "A scratch Godot project: a blue rectangle, the label Hello Kyle, then quit."
pubDate: 2026-11-13T23:04:00.000Z
draft: false
tags:
  - Lab reports
  - Games
author: "Kyle McAuliffe"
---

## What it was

The archive README says "Tiny Godot scratch project on the box (main.gd / main.tscn / project.godot plus one screenshot). Not a shipped site." No live URL and no repo were found. The links section of that README is empty.

## Why it was built

The files do not say. The archive README recommends retiring it because it is a scratch test, not a product.

## How it worked

`project.godot` names the project `GodotTest`, main scene `res://main.tscn`, renderer `gl_compatibility`. There is no version pin and no `package.json`.

`main.tscn` is a Control node with script `res://main.gd`. `main.gd` `_ready` adds a `ColorRect` (color `Color(0.2, 0.4, 0.8)`, size 1152×648), a `Label` whose text is "Hello Kyle" at font size 64, waits 10 frames, saves `res://shot.png`, and quits. That is the project described by these files.

The working-tree zip is 6,634 bytes and also contains `godot-test/shot.png`. There is no git bundle and no `screenshots.zip`.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT, with the other games. The recorded recommendation is retire.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that a hello-screen test was kept only as a zip.

## Download

https://drive.google.com/drive/folders/1GoQd0osrLA3sMQC-Bey8AmfbeKe8XRmG

The folder holds `README.md` and `godot-test-working-tree.zip`. Open `project.godot` in Godot 4.
