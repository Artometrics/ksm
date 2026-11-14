---
title: "Storefront"
description: "Artometrics digital counter meant to replace Gumroad: pay once, then a timed download."
pubDate: 2026-11-13T23:25:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The page title is "Storefront · Artometrics." The root `package.json` description is "Artometrics digital storefront. Replaces Gumroad." The README says buyers pay once, then open a library with the same email and download through a timed link. Firebase project `storefront-510519`, site https://storefront-510519.web.app. No GitHub remote was in the archive.

## Why it was built

The package description and README are the reason on file: a counter for Artometrics digital editions, with a library and a short-lived download link, in place of Gumroad.

## How it worked

The web app (`storefront-web`) is React 19, Vite, React Router 7, Firebase 12, and Tailwind. Functions (`storefront-functions`) depend on firebase-admin, firebase-functions, and stripe. `firebase.json` includes Firestore, storage, auth, functions, and hosting. An `openapi.yaml` is in the repo and under `web/public/`. An MCP client is present.

`functions/src/domain/ids.ts` names routes that include health, pricing, listProducts, getProduct, createCheckout, mockComplete, createDownload, streamDownload, listOrders, getOrder, ordersCsv, library, and adminClaim. `tokens.ts` sets `DOWNLOAD_TTL_MS` to 15 minutes and signs the download token with HMAC-SHA256. `money.ts` returns mock, test, or live from the secret string. `webhook.ts` returns 501 with code `stripe_mock` when Stripe is not configured. Otherwise it checks `stripe-signature` and fulfills a paid order. Pages on disk are `Catalog.tsx`, `ProductPage.tsx`, `CheckoutPages.tsx`, and `Library.tsx`. The README says `npm run dev` seeds five DEMO products and that mock checkout grants a download without charging a card.

No git bundle. Icons only.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. A later index row says Kyle deleted it at 8:17 PM PT. The Firebase project delete was requested at 8:22 PM PT. The index says Firestore was empty. The zip was re-checked against SHA-256 `2be2bfc0daa7a19853985a96511fc0b28f43068d4a92ab151587886cd0526aba`. The archive index also says commerce was not a Dawn feature.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the standalone shop was archived and then deleted the same evening.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1ohRZDZ0C6reI4fDzPGCTT8x0fz2pQ7C8/view

The index says `npm run dev` uses mock Stripe and emulators. `.env` files were excluded.
