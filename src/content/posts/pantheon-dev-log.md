---
title: "Pantheon dev log"
description: "Where the Pantheon report lives in the Artometrics repo and on the public site."
pubDate: 2026-10-30
draft: true
tags:
  - Research
  - Pantheon
author: "kyle-mcauliffe"
image:
  url: "/images/og/pantheon-dev-log.svg"
  alt: "Draft title card for Pantheon dev log"
---

This note is a draft. It is a pointer to the report, not a new dataset.

`articles/pantheon/README.md` in Artometrics/artometrics titles the piece "Power, Art, and Science Dominate Global Memory" and says the live page is https://artometrics.com/pantheon/. The same README says the desk is humanities and that the piece uses MIT's Pantheon dataset. It states "85,000+ biographies". The layout it lists is `_quarto.yml`, `pantheon.qmd`, `data/`, `charts/`, and `figures/`. The render command it prints is `quarto render` from `articles/pantheon`, then `npm run sync:article -- --slug pantheon`.

The public URL https://artometrics.com/pantheon answered with that report's title on 30 October 2026. There is no separate Artometrics/pantheon repository. The article lives inside Artometrics/artometrics.

## Sources

- README: https://github.com/Artometrics/artometrics/blob/main/articles/pantheon/README.md
- Live page: https://artometrics.com/pantheon
