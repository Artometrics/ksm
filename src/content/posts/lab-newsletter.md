---
title: "Newsletter"
description: "The studio letter: signup, double opt-in, a markdown draft, batched send, and an archive."
pubDate: 2026-11-13T23:22:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The root `package.json` description is "Artometrics newsletter: signup, double opt-in, send, archive, and counts." The README calls it the studio letter. The page title is "Artometrics." Package name `artometrics-newsletter`. Firebase project `newsletter-510519`, site https://newsletter-510519.web.app. No GitHub remote was in the archive.

## Why it was built

The package line is the job: a letter people can join, confirm, receive, and read later, with counts on what was opened and clicked. The archive index names Dawn as the place that letter should live.

## How it worked

The web app is Vite, React 19, React Router 7, Firebase 13, and Tailwind 4. Fonts in that package are Bodoni Moda, Familjen Grotesk, and Literata. Functions are JavaScript (`functions/src/*.js`), not TypeScript. `firebase.json` includes Firestore, functions, hosting, and auth. The README names region `us-west1`. An MCP server is `mcp/server.js`. `openapi.yaml` is at the repo root and under `functions/`.

`functions/src/app.js` matches routes for health, subscribe, confirm, unsubscribe, archive, draft, subscriber count, issue create and send, schedule, stats, dry-runs, and open/click tracking. `trackClick` records a click, checks the target with `safeHttpUrl`, and responds 302. Files beside it include `send.js`, `draft.js`, `mail.js`, `markdown.js`, and `ssrf.js`. Web pages on disk are Home, Confirm, Unsubscribed, Archive, and Issue.

The README says sends go out in batches of 50, open and click counts are total and unique, and mail uses Resend only when `RESEND_API_KEY` is set. Otherwise the send is a dry run. The README says the emulator never calls Resend. The README names MCP tools `subscriber_count`, `draft_issue`, `schedule_issue`, `send_issue`, and `get_stats`. Those names were not re-read inside `mcp/server.js`.

No git bundle. The image in the tree is `web/public/favicon.svg`.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. A later index row says Kyle deleted the Firebase project at 8:17 PM PT (delete requested 8:22 PM PT). That row says Firestore was empty, so there were no subscribers, and that the source was kept on the box in `/workspace/newsletter-dep` for Dawn. Zip SHA-256 `024e6c75fd801d2e96fb50106316d9db270cf4ac9959725b6b5d56b6c057363b`. The Dawn merge is not in this repository. None of the opened source files name Dawn. That sentence is the archive record.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the hosted letter was deleted after the zip check, with the source kept aside for Dawn.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1YkJi4KKkibDaqJa0ei5dCY14y4nJ25v5/view

The index says `npm install` and `npm run dev`. Sending mail needs functions and is a dry run in the emulator.
