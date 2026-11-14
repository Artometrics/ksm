---
title: "Aftercare"
description: "An on-device almanac: a tarot table, numerology, and a map of favorites. Marked to open from a Dawn profile."
pubDate: 2026-11-13T23:01:00.000Z
draft: false
tags:
  - Lab reports
  - Merged
author: "Kyle McAuliffe"
---

## What it was

The archive README says "Almanac app: tarot with a 3D table, numerology, and a map of things you love. Data stays on the device." The live home page meta description matches that wording. Live: https://aftercare-510519.web.app. Repo named in the archive: https://github.com/Artometrics/aftercare.

The bundle and working tree are about 32 MB and were not unpacked. What follows is from the live-mirror HTML and the archive README, not from `package.json`.

## Why it was built

The home page states the product: no account, data stays on the device, free to explore. The archive README says merge it into Dawn so that clicking your profile shows Aftercare. That merge is not described as finished.

## How it worked

The live mirror is a static Astro build (`/_astro/` CSS and JS, a Vite modulepreload helper). Font files in the mirror are Fraunces and Outfit. The archive README stack line is "Web app (see repo), Firebase Hosting, on-device storage." The tarot page script imports chunks named `TarotTable`, `storage`, `html`, `cardArt`, and `reading`. Those chunks are not inside the live-mirror zip, so their source was not read.

From the mirrored HTML:

- Onboarding collects a name, birthday, birthplace, and favorite movies, books, and things. Optional time of birth is labeled "Kept for later chart features. Not used yet." Birthplace copy says about 190 well-known cities offline.
- Home copy: "No account needed," "Stays on your device," "Free to explore."
- Tarot blurb: "78 cards with original art, 3D shuffle and flip, reversed cards, and readings saved on your device." Spreads on `tarot/index.html` are One card, Three card, and Celtic Cross. A fallback sentence says the device can still draw cards if it cannot show the 3D table. Card pages exist for the major arcana and the four suits.
- Numerology: life path from date of birth, optional full name, master numbers 11, 22, and 33 kept. "Nothing leaves your device."
- Map blurb: birthplace, where favorite stories happen, places to remember.
- Share: a per-section switch. The privacy page says the share link carries chosen parts in the URL hash. Profile and saved readings use browser local storage keys `aftercare.profile` and `aftercare.readings`.
- Profile page: export and import a backup, and "Delete everything here."
- `journal/index.html` title is "The journal." The body says "It is not built yet." The footer link is "Journal (soon)."
- Marked on the home page as later, not as shipped: a knowledge hub, stories and comics, and a marketplace and community.

The archive README says 10 commits, HEAD `a19c6dc8cbec`. That count was not re-read from git.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive README says do not delete the Artometrics/aftercare repo until the Dawn profile merge exists. Nothing was deleted from Firebase or GitHub as part of this archive.

## What was learned

The archive does not record a separate lesson. The recorded decision is that Aftercare opens from a Dawn profile, and the repo stays until that is true. The journal page already says it is not built.

## Download

https://drive.google.com/drive/folders/1dSMnzvf6H_tytYjdbTGnNj2m5HQvS_-0

The folder holds `README.md`, `aftercare-live-mirror.zip` (916,283 bytes), `aftercare-working-tree.zip`, and `aftercare.bundle`. The same bundle size is also in the GitHub remainder folder. The README says to follow the repo README, and that on-device data should work once the app is built.
