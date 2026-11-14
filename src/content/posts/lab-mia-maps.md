---
title: "Mia Maps"
description: "SF rental intelligence: Python scrapers, a hosted dashboard, and an Expo shortlist. Archived November 13, 2026."
pubDate: 2026-11-13T23:28:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The README title is "Mia Maps: SF Rental Intelligence." The hosted page title is "Mia Maps • SF Rental Intelligence." It is a Python pipeline that scrapes listings, scores them, and writes a dashboard, plus a small Expo app that reads a JSON export.

The archived Firebase project is `mia-rentals-510519`. The live URL recorded in the archive is https://mia-rentals-510519.web.app. The GitHub repo recorded there is https://github.com/Artometrics/mia-maps.

## Why it was built

The README frames the project as rental intelligence for San Francisco listings. The git history is a build-out of scrapers, a dashboard, and a mobile shortlist across October 5–7, 2026, then hourly scrape commits. A separate reason, beyond that pipeline, is not written in the README.

## How it worked

Python dependencies in `requirements.txt` are requests, beautifulsoup4, openpyxl, and python-dotenv. `database.py` uses SQLite (`sf_rentals.db`). Firebase Hosting serves `public/` for project `mia-rentals-510519`. The mobile app in `mobile/` is Expo ~57 and React Native 0.86. `mobile/App.tsx` loads `mobile/data/listings.json` and has tabs named cards, map, and shortlist.

`main.py` `run_pipeline` scrapes Craigslist (`scrapers/craigslist_sf.py`), Zumper (`scrapers/zumper_playwright.py`), and Redfin (`scrapers/redfin_scraper.py`), inserts rows, calls `purge_dead_listings`, exports Excel, writes `email_digest.html`, and builds `preview.html` through `dashboard.py`. `scorer.py` detects a neighborhood, analyzes amenities, and returns a priority plus reasons. `commute_engine.py` computes a haversine distance and calls a Google Routes transit query. `outreach.py` writes a text file per listing under `outreach/`. `email_digest.py` can send the digest and an error alert. `scrapers/security_guard.py` checks listing and image URLs before a fetch. A GitHub Actions workflow, `.github/workflows/daily_scrape.yml`, is in the tree.

The bundle log, newest first, runs from `ad6fe9b` (2026-10-07, hourly scrape) back to `109bea5` (2026-10-05). Feature commits on October 6 add multi-source scraping, a dead-link purge, a commute overlay, and the Expo app. There is no separate screenshot of the dashboard in the archive zip. The image files are app icons and `public/icons/icon-192.png` and `icon-512.png`.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT, as `mia-maps-archive.zip` (working tree, live mirror, and `mia-maps.bundle`). The archive index says this pass did not delete the host. It also says the hourly workflow was still present, and that a retire would start by disabling that workflow.

The same index says Mia Maps is not a Dawn feature.

## What was learned

The archive does not record a separate lesson. The recorded decision is archive-only, with the host left up until the scrape workflow is turned off.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/19hGawSGNTwI2qlZYOX2YezZJMZE6CEoR/view

Offline, the archive index says to serve the `public/` tree from the working-tree zip. Scraping and email need credentials and will not run from the zip.
