---
title: "Aftercare"
description: "Astrology, tarot, and a journal, as an Expo app, a Netlify web app, and an Astro site. The plan was a Dawn profile."
pubDate: 2026-11-14
order: 19
disposition: "Dawn"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Aftercare is astrology, tarot, and a journal. The README on `Artometrics/aftercare` calls it "soft guidance for your inner life." The repo was still readable on 14 Nov 2026. The archive index says not to delete it until a Dawn merge exists. The host named for the Astro app is [aftercare-510519.web.app](https://aftercare-510519.web.app). The Netlify app is [aftercare-artometrics.netlify.app](https://aftercare-artometrics.netlify.app).

## What it was

Three surfaces in one repo.

The root is an Expo app. `package.json` names Expo `~57`, Expo Router, React Native `0.86`, and Nativewind. `app.json` is present. The README says this native app is for a later release, and that web is the live surface.

`web/` is the Netlify app, deployed from `main` with `netlify.toml` (`base = web`). The README lists Netlify Identity, a private journal with mood tags in Netlify Database, tarot spreads with an AI interpretation and Gemini card art cached in Blobs, daily mood check-ins with a chart, birth profile tools (sun sign, life path, next birthday, moon), and a daily home with a sky note.

`site/` is a separate local-first Astro app: a three.js tarot table, numerology, and a shareable "second self" profile. PR #6 (10 Nov 2026) is the commit that adds that MVP. PR #7 gives `site/` its own Firebase project, `aftercare-510519`, with noindex, and leaves the Netlify app alone. PR #8 adds a GitHub Actions deploy of `site/` to that Hosting site.

## Why it was built

The README's line is the brief: astrology, tarot, and journaling. The archive index's destination is more specific. Clicking your profile in Dawn should show Aftercare. That is the fold that was written down. The repo does not, on its own, say why Dawn was the home. The index does.

## How it worked

Expo at the root for the phone app. Astro and three.js in `site/` for the tarot table. Netlify Identity, Netlify Database, and Blobs in `web/` for the account, the journal, and the card art. Schema for the web database is `web/db/schema.ts`. Migrations live under `web/netlify/database/migrations/`.

Local web dev is `cd web && npm install && npm run dev`. The README says Identity does not fully work in local-only mode until the site has been deployed once, and points at `npx netlify dev` for auth. The Astro site is the Firebase target. Offline, the index says on-device data should work once the app is built. I am not restating emulator passwords. The inventory omitted those on purpose.

## What I learned

Aftercare grew a second and third app instead of picking one. The Netlify app has the account and the journal. The Astro app has the 3D table and the shareable profile. The Expo app is still the root `package.json`. The archive note treats the thing Dawn should open as "Aftercare," singular. The repo is three codebases. Any merge has to say which one.

A smaller note from the history: on 22 Jul 2026 a commit replaced a top nav that spilled past the phone with a five-tab bottom bar. The layout problem showed up before the Astro rewrite.

## Where it went

Dawn, as a profile, in the archive plan. The repo was still separate on 14 Nov 2026. A code search of `Artometrics/dawn` for aftercare returned no matches. GitHub marked that search incomplete. The index says to keep the repo until that merge exists. The Drive folder is a copy, not a replacement.

## Download the archive

Folder: [Aftercare](https://drive.google.com/drive/folders/1dSMnzvf6H_tytYjdbTGnNj2m5HQvS_-0).

The index says four files in the folder matched local sizes on 13 Nov 2026 at 8:29 PM PT. The repo itself is the fuller history: [Artometrics/aftercare](https://github.com/Artometrics/aftercare).

## Sources

- `Artometrics/aftercare` README and root `package.json`, read 14 Nov 2026
- Commits `1f247fc5` (22 Jul 2026, bottom nav), `a76898cb` (PR #6), `7616fbb8` (PR #7), `a19c6dc8` (PR #8)
- Artometrics Archive Index, Aftercare row
- Code search of Artometrics/dawn on 14 Nov 2026
