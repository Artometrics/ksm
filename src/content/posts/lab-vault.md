---
title: "Vault"
description: "A mobile-first PWA with a research shelf and a photograph shelf, on Next.js and Firebase."
pubDate: 2026-11-13T23:26:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The README says Vault is a mobile-first PWA for the Artometrics studio with two shelves, Research and Photographs. The layout title is "Vault." Package name `vault`. No GitHub remote was in the archive. Firebase project `vault-510519`, site https://vault-510519.web.app.

## Why it was built

The home page states the two jobs. Research is "PDFs, books, transcripts, and clips. Answers point at the page or the minute." Photographs are "Hearts, tags, a zip of the originals, and a watermark that never replaces the file." (`src/app/page.tsx`).

## How it worked

Next.js 15.5.28, React 19, Tailwind 4, Firebase 13, and JSZip. Functions (`vault-functions`) depend on firebase-admin, firebase-functions, jszip, sharp, and unpdf. An MCP server is in `mcp/` (`bin/vault-mcp.js`). `firebase.json` covers Firestore, storage, functions, hosting, and auth. `public/sw.js` and `public/manifest.webmanifest` are present.

`src/lib/projects.ts` lists four collections: Cardinal, Ivory, Silica, and Artometrics. `functions/src/index.ts` exports `api`, `ensureWorkspace`, `processSource`, `askVault`, and `watermarkAsset`. Modules next to it are `extract.ts`, `embed.ts`, `answer.ts`, `zipfiles.ts`, `watermark.ts`, and `pipeline.ts`.

The README says embeddings use Gemini model `gemini-embedding-001`, citations can export as Markdown or BibTeX, and without `GEMINI_API_KEY` answers are passage matches. The key value is not in the tree that was read.

No git bundle was in the zip. Icons only, no page capture.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. The archive index says keep project `vault-510519` and treat a Dawn library as later work, or leave it archived. It does not record a project delete.

## What was learned

The archive does not record a separate lesson. The recorded decision is archive now, with a possible later shelf inside Dawn.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1wuxPZg_VKHFOLqLebZouTEUXWptmu6IR/view

The index says `npm install && npm run dev` against emulators. Research answers need a local model key.
