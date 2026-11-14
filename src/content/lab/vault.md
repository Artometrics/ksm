---
title: "Vault"
description: "A research shelf and a photo shelf. Heavier than the CRM, and left as a later Dawn library or an archive."
pubDate: 2026-11-14
order: 3
disposition: "Archived"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Vault was a mobile-first PWA with two shelves: research files, and photographs. No GitHub repo was found. The box path in the index is `/workspace/vault-dep`. The host was [vault-510519.web.app](https://vault-510519.web.app).

## What it was

A private library. One shelf took PDFs, EPUBs, and transcripts. The other took photos. The inventory calls the code good, and larger than Newsletter or CRM, because of Cloud Functions and embeddings.

## Why it was built

The inventory describes the job as filing research so questions come back with citations, and tagging photographs so the originals can be zipped. That is the whole brief that was written down.

## How it worked

Firebase project `vault-510519`, with Firestore (default). The research shelf filed work into collections named Cardinal, Ivory, Silica, or Artometrics, chunked and embedded the files, and answered questions with page or timestamp citations. Export was Markdown or BibTeX. The photo shelf had tags, favorites, a zip of originals, and watermark copies. There was a REST API and a small MCP server, plus rules tests.

Offline: `npm install && npm run dev` against emulators. Research answers need a local model or key. The index says not to delete the Firebase project.

## What I learned

Citations and embeddings made a better library and a worse merge. The 13 Nov note ranks it behind Newsletter and CRM for a Dawn move, and leaves the choice as "archive only for now, or a later Dawn library." Hosting could be disabled. The project stays while Firestore is there. The index does not record a later delete.

## Where it went

Archived. The optional later home is a Dawn library. That merge is not in the Dawn repo as of the 13 Nov note, which says Dawn was not changed.

## Download the archive

[vault-archive.zip](https://drive.google.com/file/d/1wuxPZg_VKHFOLqLebZouTEUXWptmu6IR/view) (829,448 bytes, SHA-256 `0ab3e176e34d8b31d83a0c880ebac06acde7b6a5f27a12aad4f988ca9024ac63`).

Folder: [Unlisted sites 2026-11-13](https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw).

## Sources

- Artometrics Archive Index, Vault row
- Dawn feature inventory, 13 Nov 2026
- Unlisted sites `SUMMARY.json`
