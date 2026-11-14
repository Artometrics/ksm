---
title: "Webfall"
description: "No source tree was in the archive. The only saved page is an HTTP 404 from webfall.web.app."
pubDate: 2026-11-13T23:14:00.000Z
draft: false
tags:
  - Lab reports
  - Sites
author: "Kyle McAuliffe"
---

## What it was

The archive README and `manifest.json` say no local source tree was found. `github` is null. `working_tree` is empty. `bundle.present` is false. The only live URL recorded is https://webfall.web.app. The collection label in the manifest is "Sites."

## Why it was built

No application source was in the archive, so this report does not state a purpose.

## How it worked

Stack unknown. The opened files name a Firebase Hosting URL and do not include application source, a git repo, or a framework file.

The live-mirror zip is 15,647 bytes and two files: `wget-webfall.web.app.stderr.log` and `webfall.web.app/index.html`. The wget log is:

```
https://webfall.web.app/:
2026-11-13 18:21:07 ERROR 404: Not Found.
```

The README describes that page as Site Not Found. The HTTP status in the log is 404. The HTML title element was not extracted as text for this report.

A KSM dashboard commit on October 26, 2026, 1:57 PM PT, is titled "Dashboard: add Docs + Comics/boards; remove Webfall." The later dashboard HTML does not contain that tile. Named capture files `webfall_web_app_desktop.png` and `webfall_web_app_mobile.png` were not separate files in the Drive folder listing.

## Where it lives now

Packaged November 13, 2026, 6:21 PM PT. The archive README says nothing was deleted from Firebase or GitHub as part of that package. A later index row says the site was already gone: it was not among the Firebase projects on the artometrics.com team, and no repo was in the Artometrics or kylesmcauliffe GitHub accounts. The saved artifact is the 404 mirror.

## What was learned

The archive does not record a separate lesson. The recorded fact is that there was no source to retire, and the public URL already answered 404.

## Download

https://drive.google.com/drive/folders/1BdzUMMUZ1eqzNmfX2Y2WaVLWJ1VOXhmf

The folder holds `README.md`, `manifest.json`, and `webfall-live-mirror.zip`.
