---
title: "Storefront"
description: "A pay-once counter for Artometrics editions, meant to stand in for Gumroad. The Firebase project was deleted after the zip."
pubDate: 2026-11-14
order: 4
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Storefront was Artometrics' own counter for digital editions: magazines, reports, templates, and books. The inventory says it was meant to replace Gumroad. Pay once, then a library and 15-minute download links. No GitHub remote. The box path was `/workspace/storefront-dep`. The host was [storefront-510519.web.app](https://storefront-510519.web.app).

## What it was

A shop for our own files. The 13 Nov inventory calls the code good, with Cloud Functions and a mock checkout path for when Stripe secrets were absent.

## Why it was built

Selling a PDF should not require a third-party storefront if the file and the buyer already live next to the magazine. That is the reason the inventory records. It also says commerce is not a Dawn feature.

## How it worked

A PWA shop on Firebase, with Stripe checkout (mock until secrets exist), a webhook, signed downloads, Firestore products, Storage files, and allowlisted admins. `.env` files were excluded from the zip. Offline, `npm run dev` uses the mock Stripe path and the emulators.

Firestore (default) existed when the archive was packed. A later index row, "Deleted 2026-11-13," says the Firestore was empty, the project delete was requested at 8:22 PM PT, and the host answered 404.

## What I learned

The shop was real enough to archive and small enough to drop. The written call was archive-only. If selling ever belongs inside Dawn, this zip is the source. It does not belong there by default.

## Where it went

Retired. The index records the delete. It did not fold into Dawn, Bagel, or Pantheon.

## Download the archive

[storefront-archive.zip](https://drive.google.com/file/d/1ohRZDZ0C6reI4fDzPGCTT8x0fz2pQ7C8/view) (665,111 bytes, SHA-256 `2be2bfc0daa7a19853985a96511fc0b28f43068d4a92ab151587886cd0526aba`, re-checked on download).

Folder: [Unlisted sites 2026-11-13](https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw).

## Sources

- Artometrics Archive Index, both Storefront rows
- Dawn feature inventory, 13 Nov 2026
