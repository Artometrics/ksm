---
title: "Mint"
description: "A private image and short-video generator. The voice note called it MIT. No GitHub repo was found."
pubDate: 2026-11-14
order: 14
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Mint was a private generator: images, short videos, a gallery with favorites, cost logging, and social-card composites from a brand kit. The Drive README says this is what a voice note called "MIT." No git history was on the box copy at `/workspace/mint-dep`. No Artometrics repo named mint was found. The host was [mint-510519.web.app](https://mint-510519.web.app).

## What it was

A signed-in studio for making pictures and short clips, closer to a private Higgsfield-style desk than to a public app. The KSM inventory had already summarized it that way. The archive README is the one that names the stack.

## Why it was built

The README lists the jobs: generate, keep favorites, log cost, and composite a social card from a brand kit. It was private. Sign-in was restricted, and the archive does not include secrets.

## How it worked

Next.js PWA on Firebase project `mint-510519`, with Cloud Functions, Firestore, and Storage. Gemini ran in Cloud Functions. The working tree is 87 files and 203,437 bytes. Offline, `npm install && npm run dev`. The README says a preview mode can avoid live Gemini calls, and that generation does not work without Functions and Secret Manager. Environment files other than `.env.example` were excluded.

The live site was sign-in gated, so screenshots in the archive may only show the gate. The index says the default Hosting site was disabled at 6:38 PM PT on 13 Nov 2026, not deleted. A later file in the same folder is named `mint-510519-data-export-2026-11-13.zip` (10,230 bytes). This report does not describe the inside of that zip.

## What I learned

The name in the voice note and the name on the host were not the same word. The README settles it: Mint, not MIT. Generation without the functions is a gallery. The archive keeps the UI and leaves the secrets out, which is the correct split.

## Where it went

Retired as a private generator. The index does not record a Dawn, Bagel, or Pantheon destination. The default host was disabled. The project delete is not in the rows I used.

## Download the archive

Folder: [Mint](https://drive.google.com/drive/folders/17kKorqgcZYM-qtQzAM2BHRWQ9S0cYnSF).

- [mint-working-tree.zip](https://drive.google.com/file/d/1XAW7cXcSD3I65ZE2ZFmNGEzXRrKkvArT/view)
- [mint-live-mirror.zip](https://drive.google.com/file/d/1raGF1m0E2eUSE0i1iUb9rNydW2g35R-u/view)
- [mint-510519-data-export-2026-11-13.zip](https://drive.google.com/file/d/1yjrmNrcIpvfZgsGfqdPq4XgIk00nc_Rw/view)
- [README](https://drive.google.com/file/d/1t7sbsQWip4Xi8h7H-ku2J3kjTinpd0Kl/view)

The index says three files matched local sizes on 13 Nov 2026 at 8:29 PM PT. The data-export file is newer (14 Nov 2026 in Drive) and was not part of that three-file check.

## Sources

- Artometrics Archive Index, Mint row
- Drive README in the Mint folder
