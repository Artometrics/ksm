---
title: "Relay"
description: "One Expo desk for shows, a social queue, and a releases shelf."
pubDate: 2026-11-13T23:21:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The Expo name is "Relay." The README says Relay is Kyle McAuliffe's desk for Artometrics, and that one Expo app for iOS and web covers three jobs: Shows, Queue, and Releases. Package name `relay`. Firebase project `relay-510519`, site https://relay-510519.web.app. No GitHub remote was in the archive.

## Why it was built

The README states the three jobs in one app: a podcast host, a social queue, and a releases shelf.

## How it worked

Expo ~58, Expo Router ~58, React 19.3, React Native 0.88, react-native-web, Firebase 12, and expo-audio. Fonts are Anton and Atkinson Hyperlegible. `app.json` sets scheme `relay`, iOS and Android id `com.artometrics.relay`, web output `single`, and iOS background mode `audio`. Functions are `relay-functions`. There is a `firebase.json` and a `firebase.blaze.json`. An MCP server is in `mcp/`.

Routes include sign-in, a desk, `shows/`, episode pages, `queue/`, `releases/`, and settings. The desk loads Firestore collections `shows`, `posts`, and `releases`, prefers show id `cardinal`, and reads `downloadStats/{episodeId}`.

HTTP functions exported from `functions/src/index.ts` are `rss`, `download`, `embed`, and `api`. `rss.ts` `buildRss` writes RSS with iTunes duration. `handlers.ts` has `handleDownload` and `publishPost` / `runDispatch`. `social.ts` builds YouTube, X, and Instagram auth URLs and has `postToX`, `uploadYouTube`, and `postToInstagram`. `gates.ts` `postingGates` reads enable flags before a post can go out. The README says connectors stay off until every enable flag is open.

`seed/catalog.json` is the starter catalog. The README says the first show is Cardinal with eight starter episodes and that the audio files are a short tone. `assets/audio/` and `seed/audio/` each contain `e01.mp3` through `e08.mp3` plus `north-stair.mp3`. Artwork files include `cardinal.png` and `north-stair.png`.

No git bundle.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. A later index row says Kyle deleted it at 8:17 PM PT. The Firebase project delete was requested at 8:22 PM PT. The index says Firestore was empty. Zip SHA-256 `480a95e3b9af3529b4512bc3d825928988097a515a49b37549b49670485ab281`. The earlier note said to archive Relay as a whole product, and that the social queue was not ready to fold into Dawn as-is.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the desk was archived and the Firebase project was deleted the same evening.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1TRs1KC6O8g2cDVCBgGy2TMUwGhrWx-QY/view

The index says Expo web via `npm run web` after emulators. The starter catalog audio is a short tone.
