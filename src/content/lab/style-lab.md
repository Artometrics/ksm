---
title: "Style Lab"
description: "A gallery for picking an Artometrics look, with favorites stored in the browser. The host was deleted after a Firestore dump of three user docs."
pubDate: 2026-11-14
order: 5
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Style Lab was a gallery for trying on the Artometrics visual system. Compare options, circle favorites, export Markdown or JSON. The box source is `/workspace/sl-dep`. There was no GitHub repo. The host was [stylelab-510519.web.app](https://stylelab-510519.web.app).

## What it was

A design reference, closer to a swatch book than a product. The archive README in that Drive folder describes a static-feeling gallery. The full box source also had Firestore and a Cloud Function that could mint option sets.

## Why it was built

Looks needed a place to be rejected in public, next to the magazine skins and the style picker on this site. The 13 Nov inventory says to treat it as a reference, not as a Dawn feature.

## How it worked

Vite, React, and TypeScript. Side-by-side specimens, picks stored in the browser, optional signed-in history, and optional Gemini-minted sets. `.env.production` was excluded. Offline, `npm install && npm run dev` in the `sl-dep` tree. The static live mirror still shows the picks.

Firestore (default) was present. The delete row says the dump held 3 docs under `users/`.

## What I learned

A style picker does not need an account to be useful. The browser copy was the product. The Cloud Function was optional machinery around it. The recorded decision was to archive it and drop the host.

## Where it went

Retired. The index says the Firebase project delete was requested at 8:22 PM PT on 13 Nov 2026, and the host was 404. The KSM style picker on this site is a separate surface. I am not claiming Style Lab's specimens were copied into it.

## Download the archive

[style-lab-archive.zip](https://drive.google.com/file/d/1RZNr5lHj0WxdFRl8f4NH_lnr_ONnn9jB/view) (3,476,718 bytes, SHA-256 `740045582b742bf6ee66888d8075e96404cd1caa627a4f55a233087e1c6ce9a9`).

Firestore dump: [stylelab-510519-firestore.json](https://drive.google.com/file/d/1zHw90Ym1tAbuz6NDy2_Q_imTHIdxNEPw/view) (SHA-256 `a57ee5adb763f7747acd9acf41d760a13b8149c400492605d2d8412545c5d512`).

Folder: [Unlisted sites 2026-11-13](https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw).

## Sources

- Artometrics Archive Index, both Style Lab rows
- Dawn feature inventory, 13 Nov 2026
- Drive folder README for Style Lab
