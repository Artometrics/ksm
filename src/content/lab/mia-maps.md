---
title: "Mia Maps"
description: "A Craigslist rental hunter for Mia. The hourly scrape was still running when the archive was packed."
pubDate: 2026-11-14
order: 1
disposition: "Archived"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Mia Maps was a San Francisco rental hunter for Mia. The 13 Nov 2026 feature inventory describes it as a Craigslist scrape, a score for neighborhoods and amenities, a listing tracker in SQLite and Excel, drafted landlord notes, and an email digest.

## What it was

A personal rental desk. The host was [mia-rentals-510519.web.app](https://mia-rentals-510519.web.app). The repo named in the archive index is [Artometrics/mia-maps](https://github.com/Artometrics/mia-maps). On 14 Nov 2026 that GitHub path was not visible from this account. The Drive package still holds a git bundle, so the history is in the zip even if the remote is gone.

## Why it was built

The inventory states the job in one line: find rentals for Mia. It is filed as archive-only, and the same note says it is not a Dawn feature.

## How it worked

The code the inventory describes is a Python pipeline. An hourly GitHub Actions workflow, `daily_scrape.yml`, scraped listings, deployed Hosting with a `FIREBASE_TOKEN` secret, committed the database, and sent the digest through Gmail SMTP. There was no Firestore, and no Firebase web app was registered.

The zip leaves out env vars, including applicant details. Offline, the `public/` tree from the working-tree zip can be served as static files. The scrape and the mail do not run without credentials.

## What I learned

The part that outlived the idea was the clock. At archive time the hourly workflow was still live, still using Actions minutes, a Firebase CI token, and email. The note I kept says to disable that workflow before retiring the host. Nothing in that pass was deleted.

## Where it went

Retired as a product. The useful copy is the Drive package. It did not move into Dawn, Bagel, or Pantheon.

## Download the archive

[mia-maps-archive.zip](https://drive.google.com/file/d/19hGawSGNTwI2qlZYOX2YezZJMZE6CEoR/view) in the [Unlisted sites 2026-11-13](https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw) folder. The index records 2,802,879 bytes and SHA-256 `5e5c98c3672f02695647bdd07dfcc52d8acc9b337bf86f44fe1861c872148743`. `SUMMARY.json` lists a git bundle, a working-tree zip, and a live mirror inside that package.

## Sources

- Artometrics Archive Index, Mia Maps row
- Dawn feature inventory, 13 Nov 2026 (`dawn-merge-inventory-2026-11-13.md`)
- Unlisted sites `SUMMARY.json` and folder README
