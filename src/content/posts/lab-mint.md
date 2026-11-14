---
title: "Mint"
description: "A private generator for images, short video, a gallery, a cost log, and social cards."
pubDate: 2026-11-13T23:18:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The archive README and `mint-dep/README.md` describe Kyle's private generator for images, short videos, a gallery with favorites, a per-generation cost log, and social-card composites from a brand kit. The live mirror title is "Mint." The meta description is "Kyle's private generator. Images, short video, and social cards." The static HTML shows a Mint wordmark and a client render slot for `Studio`. It is not, by itself, a picture of the signed-in gallery.

`PRODUCT.md` calls it a private Higgsfield-style studio for phone use, with spend visible on every generation, and says that comparison is the document's positioning, with the assumption that it is not a public product. The archive README says this is what a voice note called "MIT." That sentence is only in the archive README.

Firebase project `mint-510519`, site https://mint-510519.web.app. No git history on the box copy `/workspace/mint-dep`. No Artometrics GitHub repo named mint was found, per the archive README.

## Why it was built

`PRODUCT.md` and the README are the brief: a private phone studio that generates images, short video, and cards, and shows the cost of each generation.

## How it worked

`package.json` name `mint`, version 0.1.0. Next `15.5.28`, React `19.1.0`, Firebase, Tailwind 4. `next.config.ts` sets `output: "export"` and `images.unoptimized`. `npm run dev` sets `NEXT_PUBLIC_PREVIEW=1` and runs `next dev` on port 43123. Hosting public dir is `out`, with an SPA rewrite and `X-Robots-Tag: noindex, nofollow`. `public/robots.txt` disallows all crawlers. The manifest name is Mint, display standalone, background and theme `#090909`.

Auth in `firebase.json` is email/password and Google. Authorized domains are `localhost`, `mint-510519.web.app`, and `mint-510519.firebaseapp.com`. The README says Gemini runs only in Cloud Functions, with the key in Secret Manager. Hosting calls `https://us-central1-mint-510519.cloudfunctions.net/api`. Preview mode does not call Gemini or write Firestore. The working-tree zip has no `out/` directory. The live-mirror zip is a hosted Next export.

`domain/allowlist.ts` sets `ALLOWED_EMAILS` to `team@artometrics.com` and `kylesmcauliffe@gmail.com`. `HOURLY_MINT_LIMIT` is 30. `gate.tsx` signs out anyone not on that list. An unverified email gets a verification send and a sign-out. `tab-bar.tsx` tabs are Create, Styles, Gallery, Cards, and Ledger.

`PRODUCT.md` names house blue `#0047FF`, Anton headings, a near-black background, cream text, signal red, and Tiffany blue. `domain/brand.ts` accepts display and body fonts Anton or System, and color keys ground, ink, signal, tiffany, and blue.

The README API table lists `/v1/health`, `/v1/models`, `/v1/presets`, `/v1/platforms`, `/v1/brand`, `/v1/generations`, `/v1/images`, `/v1/videos`, `/v1/cards`, favorite, delete, and `/v1/costs`. README MCP tools include `list_models`, `generate_image`, `generate_video`, `cost_summary`, and `save_card`. Other source files present and not read line by line include `studio.tsx`, `gallery-view.tsx`, `ledger-view.tsx`, `functions/src/gemini.ts`, and `domain/costs.ts`.

A KSM dashboard commit on October 26, 2026 already links a tile "Mint" / "Image & video maker" to https://mint-510519.web.app. That is a link date, not a start date for this tree. The archive README says the live site is sign-in gated and screenshots may only show the sign-in screen. Named capture files `mint-510519_web_app_desktop.png` and `mint-510519_web_app_mobile.png` were not separate files in the Drive folder listing.

A data-export zip (10,230 bytes) is in the folder. Its records are not described here.

## Where it lives now

Packaged November 13, 2026, 6:21 PM PT from `/workspace/mint-dep`. The archive index says archive, then retire. It also says the default site was disabled at 6:38 PM PT and was not deleted in that line. The index calls it the private generator the voice note called MIT.

## What was learned

The archive does not record a separate lesson. The recorded decision is to retire the private generator app. No GitHub repo was found to delete.

## Download

https://drive.google.com/drive/folders/17kKorqgcZYM-qtQzAM2BHRWQ9S0cYnSF

The folder holds `README.md`, `mint-working-tree.zip`, `mint-live-mirror.zip`, and `mint-510519-data-export-2026-11-13.zip`. The index says `npm install && npm run dev`. Generation needs Functions and Secret Manager. Secrets were excluded.
