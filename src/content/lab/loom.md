---
title: "Loom"
description: "A YouTube cut board: script, captions, and a transcriber. It does not download YouTube. The host was deleted after the zip."
pubDate: 2026-11-14
order: 6
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Loom was a YouTube studio board. Topic or article URL in. Script, narration notes, picture notes, captions, title, description, and thumbnail concepts out. The inventory is explicit that it does not download YouTube. No GitHub repo. The box path was `/workspace/loom-dep`. The host was [loom-510519.web.app](https://loom-510519.web.app).

## What it was

A desk for cutting a video down to a package, plus a transcriber for uploaded recordings and a list of sources with their licenses. The inventory calls it Kyle's YouTube studio board.

## Why it was built

A studio that writes also has to package a video. The 13 Nov note says Loom is useful if Dawn is that studio, and that it was less urgent than Newsletter or invoicing.

## How it worked

Next.js PWA, Cloud Functions, an MCP surface, and emulator tests, on Firebase project `loom-510519`. The live site could still say the back end was not enabled if the functions had never been deployed. Script writing works locally without a cloud key. Offline, `npm run dev` against the emulators.

The delete row says Firestore was empty, the project delete was requested at 8:22 PM PT on 13 Nov 2026, and the host was 404.

## What I learned

The useful boundary was the one already written down: do not download YouTube. A transcriber for a file I uploaded, and a package of titles and captions, was the whole tool. The merge could wait.

## Where it went

Retired. The inventory's alternate was a later Dawn "YouTube cut" board. That merge was not done on 13 Nov. The zip is the source if it happens later.

## Download the archive

[loom-archive.zip](https://drive.google.com/file/d/1YVshCnV0go12zgw1hIP2P3QMDHw-iy7I/view) (722,225 bytes, SHA-256 `70b303ba25e9344d784d799bde29fc65f51eac6fb09a33b8287c6cc06503a0c0`).

Folder: [Unlisted sites 2026-11-13](https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw).

## Sources

- Artometrics Archive Index, both Loom rows
- Dawn feature inventory, 13 Nov 2026
