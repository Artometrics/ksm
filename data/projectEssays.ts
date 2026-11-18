/** Long-form project essays. Every claim is sourced; nothing is invented. */

export type EssaySlide = { src: string; alt: string; caption?: string };
export type EssaySource = { label: string; href?: string; date?: string };
export type ProjectEssay = {
  slug: string;
  title: string;
  tagline: string;
  primaryCta?: { label: string; href: string };
  links?: { label: string; href: string }[];
  gallery: EssaySlide[];
  sections: { title: string; paragraphs: string[] }[];
  sources: EssaySource[];
};

const essays: Record<string, ProjectEssay> = {
  cardinal: {
    slug: "cardinal",
    title: "Cardinal",
    tagline: "The Stanford corridor, as a documentary book and a public reading room.",
    primaryCta: { label: "Open the reading room", href: "https://cardinal-510519.web.app" },
    links: [
      { label: "Source repo", href: "https://github.com/Artometrics/cardinal" },
    ],
    gallery: [
      { src: "/images/collectibles/cardinal-oil.jpg", alt: "Oil-style painting of a Northern Cardinal, made for this site.", caption: "Thematic art for the project, not a photograph of the reading room. The live site is password-locked, so no fabricated screenshot is used." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Cardinal is a two-sided history project by Kyle McAuliffe. One side is a Quarto book. The other is a public Astro reading room. The book has a companion volume, Dawn: An American Odyssey. The two volumes share a bibliography, styles, and research apparatus. The Cardinal README tells you to read Dawn first for the origins, or to read Cardinal on its own for the argument.",
          "The book itself is the American story: how a single stretch of the San Francisco Peninsula — the Stanford corridor — became a controlling position in the modern economy, told as a walk through the campus and the streets that record it. Dawn, in that same repo, is the deep history: three thousand years of empire, collapse, and reinvention in the old world, running to the eve of the American conquest of California.",
          "The working spine, recorded in the Chapter Breakdown for Kyle (Google Doc, 30 Oct 2026), is eight episodes plus a coda, rebuilt from an older 52-chapter Quarto draft. The episodes run from The Ledger through The Open Era. The coda, The Street Names, is a dusk walk of campus street names. The tone model named in that document is O.J.: Made in America — strict chronology, with the thesis held back until Episode 8. The project asks how one stretch of the Peninsula became that controlling position, not as a conspiracy, but as a stack of chokepoints, public subsidies, and people in rooms.",
        ],
      },
      {
        title: "Why it exists",
        paragraphs: [
          "The corridor is recorded in street names, subsidies, and rooms that were never a secret, only easy to walk past. Cardinal is the walk that makes those records readable. It is written as a documentary so a reader can follow the chronology without being handed the thesis on page one.",
          "A public reading room exists so the book is not only a PDF. The inventory of websites (Drive doc, 25 Oct 2026) describes the reading room as about 180 pages, with a noindex header. Artometrics.com is noted there as the indexing exception among the portfolio sites. The site stays out of search until launch.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Each book is a self-contained Quarto project under books/cardinal and books/dawn. From the book directory you can run quarto preview for a live local preview, or quarto render to build HTML and PDF into _book/. The reader-facing build hides the editorial apparatus. A draft profile, QUARTO_PROFILE=draft, shows the working briefs and summaries. The README says the latest rendered PDFs (Cardinal.pdf, Dawn.pdf) are committed at the repository root for download.",
          "The public reading room is a separate Astro site, deployed to cardinal-510519.web.app, from work that a repo deploy note (around 21 Oct 2026, PR #12) describes as coming from kylesmcauliffe/cardinal. Audio players on that build show “coming soon”; the audio has not been uploaded yet. Behind the scenes, rewrite scene files live under site/corpus/rewrite/chapters/, and source evidence work includes an Episode 3 sheet and an atlas of people and places. A Drive manuscript, Draft v1.1 (14 Oct 2026), is cited in the Chapter Breakdown as about 99,500 words and the cleanest assembled manuscript.",
          "Related work sits nearby: Cardinal Quest is a walkable campus-landmarks game with 14 landmarks, and Dawn Atlas embeds Cardinal Quest stops. Those are companions, not a substitute for the book.",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "A priorities note from 31 Oct 2026 lists Cardinal as an active finish. The reading room is live. Audio is still coming soon. The Chapter Breakdown still flags the preface and personal frame as a gap in the drafts. Multiple episode source packs are in progress. The site remains noindex until launch. This page does not invent a ship date.",
        ],
      },
    ],
    sources: [
      { date: "README", label: "Artometrics/cardinal README", href: "https://github.com/Artometrics/cardinal" },
      { date: "30 Oct 2026", label: "Chapter Breakdown for Kyle (Google Doc)", href: "https://docs.google.com/document/d/1piLSlPM2ZEmuiqi6_hNx3XW0pVutoHTUMoReGZbR_Zk/edit" },
      { date: "25 Oct 2026", label: "Websites inventory (Drive doc)", href: "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit" },
      { date: "14 Oct 2026", label: "Drive manuscript Draft v1.1, cited in the Chapter Breakdown" },
    ],
  },
  artometrics: {
    slug: "artometrics",
    title: "Artometrics",
    tagline: "Independent data journalism on culture, place, history, persona, and power.",
    primaryCta: { label: "Open the magazine", href: "https://artometrics.com" },
    links: [
      { label: "Source repo", href: "https://github.com/Artometrics/artometrics" },
    ],
    gallery: [
      { src: "/images/projects/artometrics/banner.jpg", alt: "The Artometrics homepage, captured 17 November 2026.", caption: "Live capture of artometrics.com, 17 November 2026." },
      { src: "/images/collectibles/artometrics-tile.jpg", alt: "The Artometrics wordmark.", caption: "Wordmark tile cropped from that same live capture." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Artometrics is the public magazine: independent data journalism for the creative industries, across culture, place, history, persona, and power. It is the indexing exception among Kyle’s portfolio sites — the one meant to be found. The live magazine is at artometrics.com.",
          "The masthead is the Chomsky blackletter wordmark, with the line “culture, quantified,” a date, a menu button, and a light/dark toggle. Desks on the magazine include Culture, Atlas, History, Persona, and Power. Reports sync from the Artometrics organization and render as an Expo site you can read on a phone or a desk.",
          "Related public tools hang off the same family: Gotha is the idea-map and artifact almanac, Academy holds training videos and resources, and Glossary holds definitions. Lab log and related report pages live on the same host. An ethics statement is published at /legal/ethics-statement.",
        ],
      },
      {
        title: "Why it exists",
        paragraphs: [
          "The work is built so a curious reader can follow the evidence: charts that earn their keep, issue skins that fit the subject, and citations that keep getting wired in — Oscars, Caesar, imperial, YouTube, Billboard, among the sources named in the existing project record. The magazine is the public face of the studio. Cardinal is the book. Dawn is the studio. Unpublished drafts stay off the public index.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The magazine is a shared React Native / Expo codebase with a Markdown-to-JSON content pipeline and interactive charts on the web. Multiple themed issue skins are in use. The live homepage captured on 17 November 2026 shows a dark masthead, the Chomsky wordmark, and a large culture story (“Geopolitics”) above a row of arts tiles (Pixar, Anime, Franchise, Simpsons).",
          "A nightly note from 30 October 2026 records the site as public and indexable, with continuous editorial and engineering work through the Artometrics organization. KSM lists it as the public magazine flagship.",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "The magazine stays the public indexable site. New issues and datasets continue through the Artometrics org. This page does not invent a lineup or a date that is not already written down in a source.",
        ],
      },
    ],
    sources: [
      { date: "17 Nov 2026", label: "Live capture of artometrics.com" },
      { date: "30 Oct 2026", label: "Existing KSM project record / nightly note" },
      { label: "Artometrics/artometrics on GitHub", href: "https://github.com/Artometrics/artometrics" },
    ],
  },
  pantheon: {
    slug: "pantheon",
    title: "Pantheon",
    tagline: "A historical 3D fighter you can play in the browser.",
    primaryCta: { label: "Play Pantheon", href: "https://pantheon-game-ksm.web.app" },
    links: [
      { label: "Intended URL", href: "https://pantheon.prismandpollen.com" },
      { label: "Source repo", href: "https://github.com/Artometrics/pantheon" },
    ],
    gallery: [
      { src: "/images/projects/pantheon/home.jpg", alt: "The Pantheon home screen, with historical figures and the game roster.", caption: "Live home screen of pantheon-game-ksm.web.app, captured 18 November 2026. This is the real landing page, not the empty desert frame that used to stand in for it." },
      { src: "/images/projects/pantheon/pantheon-hero.webp", alt: "A watercolor hall with an apple, a quill, and a banner.", caption: "Themed art already in the Pantheon project files." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Pantheon is a 3D historical fighter you can play in the browser. The README calls it a private, pre-launch build that is public and kept out of search. It is hosted on Firebase Hosting in project artometrics-510519, site pantheon-game-ksm. The intended URL is https://pantheon.prismandpollen.com. The address pantheon-game-ksm.web.app is the same site.",
          "A live capture of the home screen on 18 November 2026 shows a painted title card of Darwin, Einstein, and a knighted figure in front of a classical temple, with the word Pantheon in gold. Across the top are game modes: Fighter (Pantheon, 3D historical fighter), Parkour (Forum Run), FPS (The Proofing Room), Brawler, Tower defense (Pantheon Towers), and Kart (Pantheon Kart). Along the bottom is a roster of historical figures, among them Jordan, Napoleon, Cleopatra, JFK, Tesla, Curie, Genghis, Sun Tzu, Columbus, Lincoln, Shakespeare, Lovelace, Newton, and Turing. That is a description of the page as captured, not a claim about every mode’s finish state.",
          "This fighter is not the Artometrics magazine article of the same name. The magazine piece at artometrics.com/pantheon uses MIT’s Pantheon dataset and lives in the Artometrics/artometrics repo. The game lives in Artometrics/pantheon.",
        ],
      },
      {
        title: "How to play, and how it’s built",
        paragraphs: [
          "The README describes the opening: an Artometrics splash, then Pantheon, then a menu (Arcade, Story, Versus, Training, Tutorial, Trials, Moves, Options). Choose a fighter to see difficulty, playstyle, and a 3D preview. Standing kick is high; you can crouch under it. Version 0.9 adds CC0 Quaternius rigs for the historical roster (Newton keeps Meshy), Kenney props for several specials, and a Hall of Legends prop pass. License notes are in ASSETS.md, including a short Decided block for that pass.",
          "The site is already static. bash scripts/build-site.sh checks that tree; it does not compile. The output directory is site, which firebase.json points at. Push to main runs a GitHub workflow that deploys with Workload Identity Federation when the named Firebase secrets and variables are present. Search stays off: every response has X-Robots-Tag noindex, nofollow; each HTML head has a matching robots meta tag; and site/robots.txt disallows everything. There is no password on the public host.",
          "A Lineage section in the same README points at Waterloo, brought in from Artometrics/lineage (public/game.js, Three.js r111), available at /lineage/ and also /battles/. Cannae, Austerlitz, Alexander at Gaugamela, and Caesar at Alesia are not on the site. Their design notes remain in docs/lineage/ for a later pass.",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "The checklist for what is done and what is next is docs/FINISH_PLAN.md in the repo. Tests run with python3 run_tests.py (Node 20+, Playwright). This page does not invent remaining feature work beyond what that plan and the README already record.",
        ],
      },
    ],
    sources: [
      { label: "Artometrics/pantheon README", href: "https://github.com/Artometrics/pantheon" },
      { date: "18 Nov 2026", label: "Live capture of pantheon-game-ksm.web.app" },
    ],
  },
  gotha: {
    slug: "gotha",
    title: "Gotha",
    tagline: "An idea-map of artifacts, people, and events, with sources attached.",
    primaryCta: { label: "Open Gotha", href: "https://gotha.artometrics.com" },
    links: [
      { label: "Source repo", href: "https://github.com/Artometrics/gotha" },
    ],
    gallery: [
      { src: "/images/projects/gotha/banner.jpg", alt: "The Gotha tool home on Artometrics, captured 17 November 2026.", caption: "Live capture of the Gotha home, 17 November 2026." },
      { src: "/images/collectibles/gotha-hall.jpg", alt: "Oil-style painting of a genealogical hall.", caption: "Thematic art for the project, generated for this site." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Gotha is the Artometrics idea-map tool: a map of concepts, people, and events that draws connections, cites primary sources, and generates Artifact pages from those nodes. It is named for the Almanach de Gotha (1763–1944). Academy holds training videos and resources. Glossary holds definitions. Gotha is the connective tool. The McAuliffe Codex, the README says, is research and source material for building Gotha, not a separate public site.",
          "The live domain is gotha.artometrics.com (the default Hosting URL is gotha-510519.web.app). It is an Astro 5 static export on the Artometrics magazine shell — the same masthead, wordmark, type, and tokens. Indexing is off. Every page ships a noindex, nofollow robots meta tag; firebase.json sets X-Robots-Tag to the same; public/robots.txt disallows everything. CI fails if any page loses the meta tag.",
        ],
      },
      {
        title: "The deck, the map, and the sources",
        paragraphs: [
          "The home route is the tool home. /web (also /ideas) is an interactive idea map, built with d3-force. Edges come only from archive rows and figure source lists. Every node lists its citations. /artifacts is the deck: 57 collectible cards in a masonry grid, with suit and status chips, search, sort, and tap-to-flip. A card detail page shows a large image with credit, a plain-language breakdown, sources, and connections back to the idea map. There are five full briefs (the Aces) and 52 archive cards. /archive redirects to /artifacts. /map is Places: a Leaflet map on OpenStreetMap tiles, with attribution shown and no API key. /figures holds sources-versus-evidence pages for Genghis Khan, Julius Caesar, and Napoleon. /sources lists every citation.",
          "A live capture of the Artifacts deck on 17 November 2026 matches that record: “57 cards of lost, stolen & surviving things,” counts for cards, archival images, cited sources, and lost or destroyed items, and filter chips for texts, documents, artworks, objects, film, places, and status. Individual cards credit public-domain images via Wikimedia Commons. That capture is of the live site, not a mockup.",
        ],
      },
      {
        title: "How the data is kept honest",
        paragraphs: [
          "data/archive.csv is the 57-row archive and the source of truth. A build script turns it into data/archive.json before every build. The five sourced briefs live as Markdown and are rendered with marked; sections titled “Open questions and weak claims” are boxed, and weak markers are badged. Map pins are geocoded with OpenStreetMap Nominatim by a hand-run script, not as part of the build, at one request per second. Places without a documented location are listed as unpinned, with the reason.",
          "Each card has a public-domain or CC0 image from Wikimedia Commons, with caption, credit, license, and file page. A role field says whether the picture shows the artifact or a related image. The 2–4 sentence breakdown on a card only restates the sourced archive row. Cards are numbered No. 001–057. Suits are text, document, artwork, object, film, and place. Concept nodes on the idea map are the type and category labels already written on a sourced artifact row, not independent claims. The README’s rule is blunt: never invent facts, dates, or coordinates, and keep flagged claims flagged.",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "The site remains noindex. This page does not invent a public-launch date. New briefs and archive rows would have to be added to the sourced CSV and the briefs folder; this page will not pretend they already exist.",
        ],
      },
    ],
    sources: [
      { label: "Artometrics/gotha README", href: "https://github.com/Artometrics/gotha" },
      { date: "17 Nov 2026", label: "Live captures of gotha.artometrics.com / the Artometrics Gotha deck" },
    ],
  },
  dawn: {
    slug: "dawn",
    title: "Dawn",
    tagline: "A village of agents, a studio, and a map — the workshop around the public work.",
    primaryCta: { label: "Open Dawn", href: "https://dawn-510519.web.app" },
    links: [
      { label: "Live studio host", href: "https://dawn.artometrics.com" },
      { label: "Source repo", href: "https://github.com/Artometrics/dawn" },
    ],
    gallery: [
      { src: "/images/projects/dawn/banner.jpg", alt: "A live capture of Dawn.", caption: "Live capture of Dawn, 17 November 2026." },
      { src: "/images/collectibles/dawn-landscape.jpg", alt: "Oil-style landscape at dawn.", caption: "Thematic art for the project, generated for this site." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Dawn is a pixel-art village of agents, plus a studio and a model gateway for the Artometrics ecosystem. The README distinguishes Dawn Code, the browser editor in editor/, from the village app. Firebase Hosting serves the static export. The village and Studio chat call Gemini through Firebase AI Logic in the browser — no API keys on the page.",
          "Atlas is Dawn’s home screen, at / and still at /atlas. It is a map of real places, with Cardinal (Stanford, from the Cardinal book and podcast) as its first region. It opens on the Founders’ Walk, with a pixel character at the first stop. The README records 27 story stops with sources and a quiz, 12 more catalog places with notes and flags, five walking tours with real foot-routing lines, five book threads, a ten-event timeline, ranks, era stamps, and a daily hunt. Progress stays in localStorage on the device. There is no sign-in and no API key for Atlas. The basemap is OpenStreetMap data baked into the repo, with the OpenStreetMap credit. The 8-bit town that used to be home is at /town, and the village is at /village.",
        ],
      },
      {
        title: "The village and the studio",
        paragraphs: [
          "In the village you join with a name on local emulators, or Google on the Firebase host, and tap Trinity, Kali, or Nimbus. They can draft a send, a spend, a hire, or a post, and nothing leaves until you tap Approve. The Map tab is you on OpenStreetMap. Quests are short goals. The older studio UI is at /studio.",
          "The studio is described as an autonomous development workspace and a multi-model gateway, routing to model APIs (the README names Google Gemini, xAI Grok, DeepSeek, and Claude) with a unified code-editing and conversational interface. Dawn Agents, Kyle’s private desk at /agents, is one owner, with no signups and no billing; this page does not describe private gateway credentials or allowed-email lists. Recipes, a live editor for tickets, cards, posters, and other single-file HTML “recipes,” is part of the same studio family and was captured on Dawn in mid-November 2026.",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "The README points at ROADMAP.md for planned work. Books from the Carrie suite are filed for the Dawn Books desk, which is live at dawn.artometrics.com/books as of a 17 November 2026 capture. This page does not invent a date for unpublished roadmap items.",
        ],
      },
    ],
    sources: [
      { label: "Artometrics/dawn README", href: "https://github.com/Artometrics/dawn" },
      { date: "17 Nov 2026", label: "Live captures of Dawn and the Books desk" },
    ],
  },
  books: {
    slug: "books",
    title: "Books",
    tagline: "PageMatch and the Books desk, now on Dawn.",
    primaryCta: { label: "Open the Books desk", href: "https://dawn.artometrics.com/books" },
    links: [
      { label: "Carrie lab report", href: "/lab/carrie" },
      { label: "Carrie source repo", href: "https://github.com/Artometrics/carrie" },
    ],
    gallery: [
      { src: "/images/collectibles/books-still-life.jpg", alt: "Oil-style still life of books and a lamp.", caption: "Thematic art for the Books desk, generated for this site." },
      { src: "/images/lab/carrie/banner.jpg", alt: "The Carrie desk on Dawn.", caption: "The live Dawn desk at dawn.artometrics.com/books, captured 17 November 2026 at 1280×800." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Books, on this site, means the Books desk on Dawn — the place the Carrie suite’s book app was filed. A lab report dated 14 November 2026, updated with a 17 November capture, records the facts below. Nothing later is assumed.",
          "Carrie is a web suite Carrie made, hosted as three Firebase sites in the Artometrics org. The README on Artometrics/carrie names them: PageMatch at carrie-books.web.app, PawCert Studio at carrie-pets.web.app, and a portal at carrie-510519.web.app. The repo was still readable on 14 November 2026. The latest commit on main that day, a7345400, adds noindex for all three sites. This Carrie is the suite. Carrie Scott’s portfolio is a different site and is not this project.",
          "PageMatch is a book quiz. The README describes five questions (reading vibe, genre, pacing and length, tropes, and what you want out of the book), a score against a library it calls “35+ acclaimed bestsellers,” match reasons, Amazon affiliate buttons (default tag carrie-20, changeable in settings), a shelf in local storage, search, genre filters, and a dark and light theme.",
        ],
      },
      {
        title: "How it was built, and where it went",
        paragraphs: [
          "The suite is Vite, one app per folder: apps/books, apps/pets, and portal. The package name is carrie-suite. Production dependencies in that file are vite and canvas-confetti. The first commit, 6 October 2026, is the initial PageMatch and PawCert release. A later commit that day says it adds Literary Tarot, a Gutenberg press vault, CliffNotes capsules, and a one-screen PawCert studio. The README on main, read 14 November 2026, describes PageMatch and PawCert and does not repeat those names. This page does not invent how the tarot or the vault behaved beyond that commit message.",
          "The archive plan is that books go to Dawn and pets go to Bagel, and that the repo is retired only after both merges, and only after asking Carrie before taking the live sites down. On 14 November 2026 a code search of Artometrics/dawn for PageMatch, and of Artometrics/bagel for PawCert, returned no matches; GitHub marked those searches incomplete. The Carrie repo was still its own repo. By 17 November 2026 the Books desk was live on Dawn at dawn.artometrics.com/books, and was captured for the lab report. Pets were filed for Bagel; they are not this page.",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "The lab report’s open question remains the one the archive index wrote down: do not delete the repo, and do not take Carrie’s sites down, until the recorded plan is finished. This page does not claim the merge is complete beyond the live Dawn desk already captured.",
        ],
      },
    ],
    sources: [
      { date: "14–17 Nov 2026", label: "Carrie lab report", href: "/lab/carrie" },
      { label: "Artometrics/carrie README and commits 5715938e, 8835e4f6, a7345400", href: "https://github.com/Artometrics/carrie" },
    ],
  },
  dwts: {
    slug: "dwts",
    title: "Data with the Stars",
    tagline: "An unofficial Dancing with the Stars fan archive: seasons, scores, people, dances, and stories.",
    primaryCta: { label: "Open Data with the Stars", href: "https://dwts-510519.web.app" },
    links: [
      { label: "Source repo", href: "https://github.com/Artometrics/data-with-the-stars" },
    ],
    gallery: [
      { src: "/images/projects/dwts/home.jpg", alt: "Data with the Stars home, with a disco ball and the line Where the scores meet the sparkle.", caption: "Live home, 18 November 2026. The site describes itself as unofficial and not affiliated with ABC or BBC." },
      { src: "/images/projects/dwts/seasons.jpg", alt: "The Seasons index, 35 seasons newest first.", caption: "Seasons index, captured 18 November 2026: 35 seasons, newest first, with cast counts and recorded winners when the archive has them." },
      { src: "/images/projects/dwts/people.jpg", alt: "The People page of Data with the Stars.", caption: "People, captured 18 November 2026." },
      { src: "/images/projects/dwts/dances.jpg", alt: "The Dances page of Data with the Stars.", caption: "Dances, captured 18 November 2026." },
      { src: "/images/projects/dwts/season.jpg", alt: "A single-season page from the archive.", caption: "A season page, captured 18 November 2026." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Data with the Stars is an unofficial fan site for Dancing with the Stars (US), an Artometrics project by Mia and Kyle. The README is explicit: it is not affiliated with ABC, BBC, or the show. (The live homepage captured on 18 November 2026 uses the same notice, and calls the work a fan data archive: “Where the scores meet the sparkle.”)",
          "The site is a static build. Pages are generated from data/dwts.sqlite — performances, scores, cast, songs, judges — and portraits in data/photos_ok.csv, taken from Wikimedia Commons with license and attribution. Missing fields render as “Data coming soon.” Nothing in a gap is filled in from outside the archive.",
        ],
      },
      {
        title: "What you can open",
        paragraphs: [
          "The README lists the pages that the build generates. Home has the latest season, featured dancers, and leaderboard previews. There is a seasons index and a page per season, with cast, weekly scores, eliminations, and a winner when one is named. There are celebrity profiles and pro profiles, and one page per performance, with a youtube-nocookie.com embed when the match is medium or high confidence. There are pages for songs, dance styles, and judges, including unnamed Judge 1–4 slots. Leaderboards sort and filter in the browser. Quizzes include Guess the score, Who won this season, and Match the pro, plus song-to-dance, name the song, which scored higher, which season, where they finished, and which style scores higher. Stories are Markdown reports in src/content/stories, with PNG charts; two samples ship with the repo, and the folder is meant to hold about twenty. You can compare couples, search the site, and read About, including the unofficial-fan-site notice.",
          "A live capture of the Seasons index on 18 November 2026 shows 35 seasons, newest first, with couple and week counts, the network, and a recorded winner when the archive has one. Season 35 (2026) is listed with the note “Winner not recorded.” Videos are never copied onto the site. Low-confidence YouTube matches are linked, not embedded.",
        ],
      },
      {
        title: "How it’s built",
        paragraphs: [
          "The repo is Artometrics/data-with-the-stars. It needs Node.js 22.12 or newer. SQLite is read with Node’s built-in node:sqlite. npm run dev and npm run build both regenerate src/generated/ and the search and compare JSON. The static site is written to dist/ by astro build after the data script. Tests check name matching (including short score-table names), winner handling, YouTube embed hosts, photo rejection, and slug uniqueness against the SQLite file.",
          "Hosting is Firebase site dwts-510519. Hosting sends X-Robots-Tag noindex, nofollow. Pages also include a robots meta tag. A sitemap is still emitted. The canonical host used in Open Graph tags is https://dwts-510519.web.app. An inventory note records that GitHub Artometrics/data-with-the-stars and the Origin repo artometrics/ballroom-data are the same product (internal name ballroom-data).",
        ],
      },
      {
        title: "What's next",
        paragraphs: [
          "The README says to remove the noindex headers and the note in public/robots.txt when the site should be indexed. Stories can be added as Markdown files under src/content/stories, with a chart beside them, and then rebuilt. This page does not invent a public-launch date or fill any “Data coming soon” gap.",
        ],
      },
    ],
    sources: [
      { label: "Artometrics/data-with-the-stars README", href: "https://github.com/Artometrics/data-with-the-stars" },
      { date: "18 Nov 2026", label: "Live captures of dwts-510519.web.app" },
    ],
  },
  hoops: {
    slug: "hoops",
    title: "Hoops",
    tagline: "A toss game you can play in the browser.",
    primaryCta: { label: "Play Hoops", href: "https://storm-toss.vercel.app" },
    links: [
      { label: "Live game", href: "https://storm-toss.vercel.app" },
    ],
    gallery: [
      { src: "/images/projects/hoops/banner.jpg", alt: "A live capture of Hoops.", caption: "Live capture of storm-toss.vercel.app, 17 November 2026." },
    ],
    sections: [
      {
        title: "What it is",
        paragraphs: [
          "Hoops is a toss game you can play in the browser. The live host on this project record is https://storm-toss.vercel.app. A screenshot of that host was captured for KSM on 17 November 2026 and is the picture on this page. On KSM it is tagged as a Game, alongside Pantheon, and it appears in the Play now shelf when a public launch URL is present.",
          "A standalone GitHub repository named Artometrics/hoops was not found when this page was written. This essay is limited to what the KSM project record and the live capture actually show. It does not invent a design history, a score system, or a roadmap.",
        ],
      },
      {
        title: "What's here, and what's next",
        paragraphs: [
          "You can play the live game from the button above. If a source repo, a design note, or a lab report is added to the record later, this page should be updated from that document rather than filled in from memory.",
        ],
      },
    ],
    sources: [
      { date: "17 Nov 2026", label: "KSM project record and live capture of storm-toss.vercel.app" },
    ],
  },
};

export function getProjectEssay(slug: string): ProjectEssay | undefined {
  return essays[slug];
}

export function allEssaySlugs(): string[] {
  return Object.keys(essays);
}
