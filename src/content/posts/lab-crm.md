---
title: "CRM"
description: "A private Artometrics desk for people, companies, a five-stage pipeline, and a today view."
pubDate: 2026-11-13T23:27:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The project README calls it a private desk for Kyle at Artometrics: people, companies, the pipeline, follow-ups, and a today view. The package name is `artometrics-crm`. The page title in `index.html` is "Artometrics."

There was no GitHub remote in the archive. Firebase project `crm-510519`, site https://crm-510519.web.app.

## Why it was built

The README states the job: one private desk for contacts, companies, deals, and the tasks that are due today. The archive index later files that desk as the piece to fold into Dawn.

## How it worked

`package.json` lists React 19, Vite 8, TypeScript 6, Tailwind 4, React Router 7, Firebase 12, Papa Parse, and a PWA plugin. Cloud Functions live in `functions/` (`artometrics-functions`). `firebase.json` includes auth, Firestore, storage, functions, and hosting. Rules files are `firestore.rules` and `storage.rules`.

`src/App.tsx` routes are `/` (Today), `/people`, `/people/:id`, `/companies/:id`, `/pipeline`, `/tasks`, and `/settings`. `src/lib/types.ts` defines stages Lead, Contacted, Proposal, Won, and Lost. `PipelinePage.tsx` renders one column per stage. `src/lib/fields.ts` cleans contact tags, Instagram handles, and websites.

`functions/src/index.ts` exports `morningDigest` on a schedule and `intake` over HTTP. `digest.ts` buckets tasks as overdue, today, or later. `intake.ts` parses a lead payload and checks a shared token. The README says Google sign-in is limited to an allowlist, the app is installable, and a Settings demo toggle loads synthetic records. Those allowlist addresses are not copied here.

No git bundle was in the zip. The image files are the favicon and PWA icons, not page captures.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. The archive index says disable Hosting only and keep project `crm-510519`, because Firestore is there. It does not record a later delete for this project. The intended landing is Dawn, as a contacts and pipeline desk. That merge is not in this repository.

## What was learned

The archive does not record a separate lesson. The recorded decision is to keep the data project and fold the desk into Dawn.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1CRJwhCt20Zj7znBZ9r7321W7lqDudFXB/view

The index says `npm install && npm run build`, then serve `dist/`. Auth and Firestore need emulators. Secrets were excluded from the zip.
