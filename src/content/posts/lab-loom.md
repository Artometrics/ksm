---
title: "Loom"
description: "A YouTube studio board: script, narration notes, captions, and a title package. It does not download YouTube."
pubDate: 2026-11-13T23:23:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The layout title is "Loom." The README says: "Loom is Kyle's YouTube studio. Give it a topic or an article URL and it keeps a cut on a board: script, narration, picture notes, captions, and a title, description, and thumbnail concepts." Package name `loom`. Firebase project `loom-510519`, site https://loom-510519.web.app. No GitHub remote was in the archive.

## Why it was built

The README is the brief: one board that holds a cut from a topic or an article URL through script, narration, pictures, captions, and the title package.

## How it worked

Next.js 15.5.28, React 19, Tailwind 4, Firebase 11, and Zod. Functions (`loom-functions`) use Express. Shared modules are `draft.ts`, `policy.ts`, `project.ts`, `text.ts`, `types.ts`, and `wav.ts`. An MCP server is in `mcp/`. `firebase.json` includes Firestore, storage, functions, hosting, and auth. `public/sw.js` and a web manifest are present.

App routes on disk include `cut/`, `find/`, `listen/`, `new/`, `shelf/`, and `sign-in/`. `functions/src/app.ts` routes include health, tools, me, project list and create, `generate`, `narrate`, `captions`, transcripts, media, and `GET /api/search`. `functions/src/gemini.ts` is the Gemini module. `functions/src/article.ts` sits beside `article.test.ts`.

The README says narration and transcription refuse until `GEMINI_API_KEY` is set, and that a local draft is still returned for the script. The README says Loom does not download YouTube.

No git bundle. Icons only.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. A later index row says Kyle deleted it at 8:17 PM PT. The Firebase project delete was requested at 8:22 PM PT. The index says Firestore was empty. Zip SHA-256 `70b303ba25e9344d784d799bde29fc65f51eac6fb09a33b8287c6cc06503a0c0`. The earlier index note had left open a later Dawn "YouTube cut" board. The delete row is the later record.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the studio board was archived and the Firebase project was deleted the same evening.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1YVshCnV0go12zgw1hIP2P3QMDHw-iy7I/view

The index says `npm run dev` against emulators, and that script writing works locally without a cloud key.
