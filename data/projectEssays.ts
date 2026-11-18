/** Long-form project essays. Every claim is sourced; nothing is invented. */

export type EssaySlide = { src: string; alt: string; caption?: string };
export type EssaySource = { label: string; href?: string; date?: string };
export type EssayBook = { volume?: string; title: string; hook: string };
export type EssaySection = {
  title: string;
  paragraphs: string[];
  gallery?: EssaySlide[];
  books?: EssayBook[];
};
export type ProjectEssay = {
  slug: string;
  title: string;
  tagline: string;
  primaryCta?: { label: string; href: string };
  links?: { label: string; href: string }[];
  gallery?: EssaySlide[];
  sections: EssaySection[];
  sources: EssaySource[];
};

const essays: Record<string, ProjectEssay> = {
  cardinal: {
    slug: "cardinal",
    title: "Cardinal",
    tagline: "A documentary about the Stanford corridor, with a locked reading room and a research library behind it.",
    primaryCta: {
      label: "Open the locked reading room",
      href: "https://read.stanford.phd"
    },
    links: [
      {
        label: "Source repo",
        href: "https://github.com/Artometrics/cardinal"
      },
      {
        label: "stanford.phd (redirects to the locked room)",
        href: "https://stanford.phd"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/collectibles/cardinal-oil.jpg",
            alt: "Oil-style painting of a Northern Cardinal, made for this site.",
            caption: "Thematic art for the project. The live reading room is password-locked, so this page does not invent a public screenshot of the interior."
          },
          {
            src: "/images/projects/cardinal/cardinal-hero.webp",
            alt: "A still from the Cardinal project.",
            caption: "Existing Cardinal still from the KSM project record."
          },
          {
            src: "/images/projects/cardinal/cardinal-inline-sign.webp",
            alt: "A campus sign associated with the Cardinal project.",
            caption: "A campus still used on earlier Cardinal pages."
          }
        ],
        paragraphs: [
          "Cardinal is Kyle McAuliffe's long documentary about a short stretch of land. The story is how one corridor on the San Francisco Peninsula — the streets, subsidies, and rooms around Stanford — became a controlling position in the modern economy. It is told as a walk, not as a conspiracy. The facts are meant to be checked against the repository that holds them.",
          "The work has more than one body. One is a Quarto book, with a companion volume in the same repository called Dawn: An American Odyssey. The Cardinal README says to read that companion first if you want the long origins, or to read Cardinal on its own if you want the argument. The two volumes share a bibliography, styles, and research apparatus. Dawn, in that sense, is the deep history: a long run of empire, collapse, and reinvention that arrives at the eve of the American conquest of California. It is not the same project as dawn.artometrics.com, the studio named Dawn.",
          "The other body is a public reading room, rebuilt in mid-November 2026 as a chronological documentary site. A Google Doc, Chapter Breakdown for Kyle, dated 30 October 2026, gives the working spine: eight episodes plus a coda, rebuilt from an older 52-chapter Quarto draft. The episodes run from The Ledger through The Open Era. The coda, The Street Names, is a dusk walk of campus street names. The tone model named in that document is O.J.: Made in America — strict chronology, with the thesis held back until Episode 8.",
          "The Artometrics Master Project Inventory, a spreadsheet in the Artometrics HQ Drive folder, describes the same project in one line as of 17 November 2026: “Cardinal (book, site, podcast, Web of People).” The public GitHub repository is Artometrics/cardinal, created on 13 August 2026 at 7:33 AM PT. As of 17 November 2026 it held 61 commits on main. Private source texts sit in a separate repository, Artometrics/cardinal-sources."
        ]
      },
      {
        title: "The reading room, and why it is locked",
        gallery: [
          {
            src: "/images/projects/cardinal/banner.jpg",
            alt: "A Cardinal banner used on this site.",
            caption: "The live room itself is not shown here. After 13 November 2026 it answers behind a password."
          }
        ],
        paragraphs: [
          "A websites inventory written on 25 October 2026 described the reading room as about 180 pages, with a noindex header. Artometrics.com was already named there as the indexing exception among the portfolio sites. That still holds. Cardinal is not meant to be findable in search until it is launched in public, and the live room is no longer an open tab.",
          "On 13 November 2026 the public site was gated. Pull request #31, “Gate the live site with HTTP Basic Auth,” was merged at 3:55 PM PT. Pull request #32, “Serve Cardinal from App Hosting with HTTP Basic Auth,” followed at 4:11 PM PT. Two more merges that evening finished the cutover: pull request #33, “Stop publicly caching pages behind Cardinal's password,” at 6:27 PM PT, and pull request #34, “Redirect classic Hosting to the password-protected read.stanford.phd,” at 6:30 PM PT. The inventory's later status check records the result: stanford.phd redirects to read.stanford.phd, and that address returns 401 unless you have the password.",
          "The lock is a design decision, not a temporary glitch. The November record treats it as already decided: the room stays locked, including through later rebuilds. This page does not print credentials, and it does not use a fabricated screenshot of pages behind the password. What you can see without the lock is the fact of the lock itself, the public repository, and the research that feeds the book.",
          "Each book is a self-contained Quarto project under books/cardinal and books/dawn in the repo. From the book directory you can run a live local preview or render HTML and PDF. A draft profile shows the working briefs; the reader-facing build hides that apparatus. The README says the latest rendered PDFs, Cardinal.pdf and Dawn.pdf, are committed at the repository root for download. A Drive manuscript, Draft v1.1, dated 14 October 2026 and cited in the Chapter Breakdown, is recorded as about 99,500 words and the cleanest assembled manuscript at that date.",
          "Audio players on an earlier reading-room build showed “coming soon.” This page does not claim that the audio has been uploaded since. Related work sits nearby rather than inside the book: Cardinal Quest is a walkable campus-landmarks game with 14 landmarks, and a Dawn Atlas desk later embedded those stops. Those are companions. They are not a substitute for the documentary."
        ]
      },
      {
        title: "How the documentary was rebuilt",
        gallery: [
          {
            src: "/images/projects/cardinal-quest/cardinal-quest-hero.webp",
            alt: "A still from Cardinal Quest, the campus-landmarks companion.",
            caption: "Cardinal Quest is a companion with 14 campus landmarks, not the book itself."
          }
        ],
        paragraphs: [
          "The chronological rebuild landed the same night as the lock. Pull request #35, “Rebuild Cardinal as a chronological documentary site,” was merged on 13 November 2026 at 9:21 PM PT. The point of that pass was to make the public site follow the same spine as the book: a documentary you can walk in order, rather than a pile of chapters in the old 52-part shape.",
          "The next day, pull request #36, “Integrate Web of People into Cardinal site at /web,” was merged on 14 November 2026 at 7:00 PM PT. The Web of People had been a standalone view. It now lives at /web on the Cardinal site, still behind the same lock. A leftover standalone Web of People host was recorded in the inventory as still existing; whether that leftover should be retired was left as an open question, not as a completed step.",
          "Behind the scenes, rewrite scene files have lived under site/corpus/rewrite/chapters/, and the source work includes an Episode 3 sheet and an atlas of people and places. A priorities note from 31 October 2026 listed Cardinal as an active finish. The Chapter Breakdown still flagged the preface and personal frame as a gap in the drafts. Multiple episode source packs were in progress. This page does not invent a ship date, and it does not pretend those gaps have closed unless a later public record says so.",
          "The inventory's one-line description still includes a podcast alongside the book, the site, and the Web of People. Earlier reading-room work left audio players marked “coming soon.” This page treats the podcast as part of the project as named, and it does not claim that episode audio is already on the live, locked site.",
          "A related path now sits on Dawn. Dawn's Atlas desk, described in the Dawn product notes, opens on the Founders' Walk at Stanford as its first region, with 27 story stops that have sources and a quiz, plus catalog places, walking tours, and book threads. Progress stays on the device. That desk is a companion to Cardinal, not a replacement for the locked reading room, and it is described more fully on the Dawn page.",
          "Cardinal Quest, the 14-landmark campus game, is recorded in the inventory as having no live host — the old cardinalquest-510519 address returned 404 on the 17 November check. The landmarks and the walk still matter as design history and as Atlas material. They are not advertised here as a game you can open today."
        ]
      },
      {
        title: "The research library behind the book",
        gallery: [
          {
            src: "/images/collectibles/cardinal-oil.jpg",
            alt: "The Cardinal emblem used on this site.",
            caption: "The research corpus is a Drive library of published books, not a picture of the locked room."
          }
        ],
        paragraphs: [
          "The journalism and the book sit on a named research corpus. A Google Doc, “Cardinal Research — Master Guide, Curriculum & Index,” describes that library as the central research corpus of Artometrics. It consolidates 28 foundational volumes across five thematic modules. Each module has its source volumes and a dossier with chapter-level questions and story prompts. The root folder is named Cardinal Research.",
          "Module 1 is California, Stanford, and the railroad dynasties. Its scope, as the guide states it, runs from the Pacific Railway Acts and the Big Four through Chinese railroad labor, the founding and governance of Stanford University, David Starr Jordan and the eugenics legacy, San Francisco's resource-extractive empire, and modern undergraduate power pipelines. The core volumes named there include Palo Alto by Malcolm Harris, The Associates, Ghosts of Gold Mountain by Gordon H. Chang, Railroaded and Who Killed Jane Stanford? by Richard White, How to Rule the World, Imperial San Francisco by Gray Brechin, Why Fish Don't Exist by Lulu Miller, and Nothing Like It In the World.",
          "Module 2 is Silicon Valley, founders, and venture capital: the shift from garage tinkerer to institutional venture finance, power-law mathematics, the personal computer and internet booms, the internal war of PayPal, and ideological venture nationalism. The named core volumes are Valley of Genius, Troublemakers, The Founders, The Power Law, and The Contrarian.",
          "Module 3 is information empires and platform power: communications monopolies, Google's PageRank and ad auctions, Facebook's engagement optimization, Cambridge Analytica, and the US-China tech corridor. The named core volumes are The Master Switch, In the Plex, Facebook: The Inside Story, Mindf*ck, and The Transpacific Experiment.",
          "Module 4 is a Musk dossier and tech megaprojects, framed as a decade-long study from 2015 to 2025 across three biographical eras. The named core volumes are Ashlee Vance's 2015 biography, Walter Isaacson's 2023 biography, and Hubris Maximus by Faiz Siddiqui, dated 2025 in the guide.",
          "Module 5 is state power, the military-industrial complex, and mega-contractors: corporate civil rights under the Fourteenth Amendment, the Bechtel engineering empire, Herbert Hoover's corporate-state coordination, ARPANET's surveillance origins, and Cold War psychic research. The named core volumes are We the Corporations, Friends in High Places, The Profiteers, Hoover, Surveillance Valley, and Phenomena.",
          "The same guide tells writers how to use the corpus: ground editorial briefs in named historical precedents; use the figures in those books as benchmark series for charts; and keep the tone detached, forensic, and analytical, letting verifiable figures, primary memos, and chronological sequences carry the argument. That is the method Cardinal claims for itself. Every fact is supposed to cite the repo. This essay follows the same rule."
        ]
      }
    ],
    sources: [
      {
        label: "Artometrics/cardinal README",
        date: "README",
        href: "https://github.com/Artometrics/cardinal"
      },
      {
        label: "Artometrics/cardinal repository metadata (created 13 Aug 2026, 61 commits on main as of 17 Nov 2026)",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/cardinal"
      },
      {
        label: "Pull requests #31–#36 (Basic Auth, App Hosting, cache, redirect, documentary rebuild, Web of People)",
        date: "13–14 Nov 2026",
        href: "https://github.com/Artometrics/cardinal"
      },
      {
        label: "Chapter Breakdown for Kyle (Google Doc)",
        date: "30 Oct 2026",
        href: "https://docs.google.com/document/d/1piLSlPM2ZEmuiqi6_hNx3XW0pVutoHTUMoReGZbR_Zk/edit"
      },
      {
        label: "Websites inventory (Drive doc)",
        date: "25 Oct 2026",
        href: "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit"
      },
      {
        label: "Artometrics — Master Project Inventory (Google Sheet, Artometrics HQ)",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      },
      {
        label: "Cardinal Research — Master Guide, Curriculum & Index (Google Doc)",
        date: "Guide in Cardinal Research",
        href: "https://docs.google.com/document/d/1vr4O5qSwoEYXMnYEJvCjyi-bRDjN9AIVAY42K5nhjX0/edit"
      }
    ]
  },
  artometrics: {
    slug: "artometrics",
    title: "Artometrics",
    tagline: "An independent data-journalism magazine: culture, quantified.",
    primaryCta: {
      label: "Open the magazine",
      href: "https://artometrics.com"
    },
    links: [
      {
        label: "Source repo",
        href: "https://github.com/Artometrics/artometrics"
      },
      {
        label: "Academy",
        href: "https://academy.artometrics.com"
      },
      {
        label: "Glossary",
        href: "https://glossary.artometrics.com"
      },
      {
        label: "Gotha",
        href: "https://gotha.artometrics.com"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/artometrics/home-live.jpg",
            alt: "The Artometrics homepage on 18 November 2026.",
            caption: "Live capture of artometrics.com, 18 November 2026, 12:30 AM PT hour, showing the Geopolitics lead and Arts tiles."
          },
          {
            src: "/images/projects/artometrics/banner.jpg",
            alt: "An earlier live capture of the Artometrics homepage.",
            caption: "Earlier live capture, 17 November 2026."
          },
          {
            src: "/images/collectibles/artometrics-tile.jpg",
            alt: "The Artometrics wordmark.",
            caption: "Wordmark tile cropped from a live capture."
          }
        ],
        paragraphs: [
          "Artometrics is Kyle McAuliffe's data-journalism magazine and the studio's public home. The live masthead, captured on 18 November 2026, reads “Artometrics” in a blackletter wordmark, with the line “culture, quantified” underneath, and a date line of Wednesday, November 18, 2026. The lead story on that capture is a full-width plate titled Geopolitics, with the dek “Film and music lead cultural exports; Korea rose 70 points since 1990.” Under it, an Arts row of covers names Pixar, Anime, Franchise, and Simpsons.",
          "The site is an Astro and Tailwind magazine, migrated from Ghost Pro. The public repository, Artometrics/artometrics, was created on 28 June 2026 at 3:50 PM PT. As of 17 November 2026 it held 439 commits on main, was public, and was about 1.4 gigabytes in GitHub's size field. It is the one property in this portfolio that is meant to be found: artometrics.com returns 200 and is indexable. The typo domain artometric.com forwards to it. A November inventory note records that www.artometrics.com, which had failed TLS on a 9 November check, now answers 200 and redirects to the apex.",
          "The Cardinal Research master guide, written as a guide to the magazine's research library, describes Artometrics as an independent data-science magazine and investigative publication dedicated to culture, power, and the creative economy. The journalism, it says, is grounded in named and dated facts, primary historical source material, reproducible datasets, and structural economic analysis. The house tone, pointed to in the magazine's style guide, is detached, authoritative, forensic, and analytical. It is supposed to avoid cheap polemics and let figures, memos, cap tables, and chronology carry the argument.",
          "The magazine says the same thing in its own voice on the About page. The masthead line there is “Art for data scientists. Data science for artists.” The page describes Artometrics as an independent magazine that treats culture like data — anime catalogs, franchise economics, civilizational cycles, and the institutions that shape creative markets — and says every report pairs editorial judgment with reproducible charts and public datasets. It is founded and edited by Kyle McAuliffe. Desk reports, the page says, are written under human editorial control with named sources, dated facts, and open method notes.",
          "The method paragraph on that page is a public rule, not a private style memo. Prefer public datasets and the reader's own inputs. Separate observed data, derived metrics, editorial indices, and context literature. Publish exports — HTML, PDF, EPUB, and CSV — on artometrics.com. Do not invent statistics. The topic questions in the menu match the desks named there: Arts asks what film, music, and design reveal; Sports, what leagues and fandom reward; Science, what the evidence shows; Humanities, how history and ideas shape us; Civics, who sets the rules and who pays; Culture, how we travel, eat, and live."
        ]
      },
      {
        title: "What is on the site",
        gallery: [
          {
            src: "/images/projects/artometrics/editions.jpg",
            alt: "The Editions index on artometrics.com.",
            caption: "Live capture of artometrics.com/editions, 18 November 2026."
          },
          {
            src: "/images/projects/artometrics/franchise.jpg",
            alt: "The Franchise report.",
            caption: "Live capture of artometrics.com/franchise, 18 November 2026."
          },
          {
            src: "/images/projects/artometrics/artometrics-inline-covers.webp",
            alt: "A row of Artometrics report covers.",
            caption: "Cover row used on earlier Artometrics pages."
          }
        ],
        paragraphs: [
          "A live sitemap, last modified on 17 November 2026 at 10:15 PM PT, lists 255 URLs. The Master Project Inventory, updated the same night, describes the magazine as “artometrics.com (magazine + 103 article projects).” That number matches the sitemap's sources section: 103 pages under /sources. Counting another way, the sitemap has 105 top-level report slugs — one page per story, sitting at the root of the site rather than under a /articles path.",
          "Those report slugs include, among others, airlines, albums, alcohol, anime, atlas, beyonce, bikeshare, billboard, bioeconomics, blockbusters, blueprint, breweries, broadway, caesar, calories, carols, catalog, celtics, ceos, cetaceans, coffee, comics, cowboys, diplomacy, dodgers, dynasties, emmys, emperors, exercise, exporters, factbook, fame, fandom, franchise, games, geopolitics, giants, gutenberg, heritage, horror, hurricanes, imperial, institutions, jackson, lakers, languages, leagues, legos, longevity, lyrics, mac, majors, margins, markers, medium, metrics, metros, museums, narratives, netflix, novels, nuclear, oscars, padres, parks, patriots, phds, pixar, pizza, plastic, playboy, poison, pokemon, polling, prisons, protection, radio, ramen, rankings, readmitted, restaurants, rivalry, schools, sf, sherlock, simpsons, slices, steam, streaming, superbowl, television, trademarks, tuition, voters, warriors, wastewater, wealth, wine, yankees, and youtube. A few slugs are data-fix companions, such as anime-data-fix, franchise-data-fix, and padres-data-fix. This list is a sitemap inventory, not a claim that every page was re-read for this essay.",
          "The magazine is also organized as editions and topics. The sitemap has 15 URLs under editions, including an editions index and sections for music, movies, games, food, sports, power, science-art, canon, geo, platforms, identity, money, risk, and psychonomics. Topics run through arts, sports, science, humanities, civics, and culture. Around that spine are a blog, a podcast with interview pages, an authors index, an about page, a studio page, a library and a library/reference page, contact, pricing, and legal pages.",
          "Standalone report repositories still exist beside the main magazine repo. The inventory names them as anime, franchise, readmitted, pokemon, caesar, warrior, h3, giant, imperial, and coffee. Anime was recorded as live at artometrics.com/anime; the others were recorded as repo-only. The magazine is also the hub the inventory names for Academy, Glossary, Gotha, the book series, Cardinal, and those report repos."
        ]
      },
      {
        title: "How it has been built",
        gallery: [
          {
            src: "/images/projects/artometrics/home-live.jpg",
            alt: "The live magazine homepage.",
            caption: "The magazine is the studio's one indexable site."
          }
        ],
        paragraphs: [
          "Recent work on the magazine is visible in the pull requests. On 14 November 2026 at 11:35 PM PT, pull request #222 merged a batch that covered article covers, wrapping, charts, the footer, tools, sources pages, and two new reports. Early on 15 November, at 12:31 AM PT, pull request #223 merged “Editorial charts for every report (460 of 503), real GitHub targets, Book buttons.” Those two numbers are from the pull-request title itself: 460 charts in place out of 503 planned.",
          "On 17 November 2026 at 10:02 PM PT, pull request #225 merged a Universe nav that links Academy, Glossary, and Gotha from the magazine menu and footer. Pull request #226, merged twelve minutes later at 10:14 PM PT, had the same intent and landed as an empty duplicate commit, with no further change. The inventory's progress column marks the Universe nav as done and verified that night. Dawn, Pantheon, and Books were named in an earlier next-step note for that nav; as of that merge, the live links were Academy, Glossary, and Gotha.",
          "Academy and Glossary are sister sites at academy.artometrics.com and glossary.artometrics.com. The inventory records both as live 200 responses and noindex. Academy is described there as art-and-science beginner guides; Glossary as an encyclopedia and style board, and a candidate home for a shared people index. Both feed back into the magazine and the books. They share a house style with Gotha and with artometrics.com, including the same blackletter wordmark visible on the Gotha captures.",
          "Even a typographic fix is part of the record. On 14 November 2026 at 10:15 PM PT, pull request #221, “Fix clipped Swiss figures on the Franchise report,” merged a repair for two long percentage strings on /franchise — 29.5% / 58.3% and 71.4% vs 51.5% — that were visually clipped on both 1280-pixel desktop and 390-pixel mobile. The full strings were already in the page. A fit-text script had been measuring a full-width box instead of the width of the glyphs, so every figure was capped at a font size that overflow hid. The fix was to measure the actual ink width and shrink until the numerals fit. The Franchise page captured for this essay is that live report, after the typography work and after the later chart pass.",
          "The magazine and Gotha now share more than a link. Gotha's README says the almanac is an Astro 5 static export on the Artometrics magazine shell: the same masthead, wordmark, single-A icons, type, and tokens. A Wednesday date line and the line “culture, quantified” appear on both live captures from 18 November 2026. That is a house-style decision, not a coincidence of screenshots."
        ]
      },
      {
        title: "The research method",
        gallery: [
          {
            src: "/images/projects/artometrics/editions.jpg",
            alt: "Editions are one way the magazine groups its reports.",
            caption: "Live Editions index, 18 November 2026."
          }
        ],
        paragraphs: [
          "The Cardinal Research library is not only behind the Cardinal book. The master guide presents it as the magazine's research corpus: 28 foundational volumes in five modules, from railroad California through venture finance, platform monopolies, a Musk dossier, and state power. When a writer drafts an editorial brief, the guide says to consult the relevant dossier so the reporting starts from named precedents rather than from a blank page. Charts are supposed to use historical and financial figures from those texts as benchmark series.",
          "That is the same posture as the magazine's public sources pages. The sitemap's 103 source URLs exist so a report can show its work. Pull request #222's sources-pages work, and the inventory's note to add Sources page links to a Source Ledger, are both about making that trail visible. This essay does not invent what is on every ledger line. It records that the ledger is part of the design.",
          "What comes next editorially — which report is written after this one, whether Twilda becomes the house CMS, whether a Franchise restyle lands — is not something this page will guess. The live magazine is already large, indexable, and linked to its sister sites. The numbers above are from the sitemap, the inventory, and the repository as they stood on 17 and 18 November 2026.",
          "The standalone report repositories remain useful as history even when the story now lives on artometrics.com. Anime, already live at /anime, still has a repo; franchise, pokemon, caesar, and the others named in the inventory were recorded as repo-only on 17 November 2026. Pull request #223's “real GitHub targets” line is about pointing the magazine at real repositories rather than at placeholders. Book buttons from the same pull request are a door toward the series described on the Books page, not a storefront."
        ]
      }
    ],
    sources: [
      {
        label: "Live sitemap at artometrics.com/sitemap.xml (255 URLs; last-modified 17 Nov 2026, 10:15 PM PT)",
        date: "17 Nov 2026",
        href: "https://artometrics.com/sitemap.xml"
      },
      {
        label: "Live captures of artometrics.com, /editions, and /franchise",
        date: "18 Nov 2026",
        href: "https://artometrics.com"
      },
      {
        label: "Artometrics/artometrics repository (created 28 Jun 2026, 439 commits on main as of 17 Nov 2026)",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/artometrics"
      },
      {
        label: "Pull requests #222, #223, #225, and #226",
        date: "14–17 Nov 2026",
        href: "https://github.com/Artometrics/artometrics"
      },
      {
        label: "Artometrics — Master Project Inventory (Google Sheet)",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      },
      {
        label: "Cardinal Research — Master Guide, Curriculum & Index",
        date: "Guide in Cardinal Research",
        href: "https://docs.google.com/document/d/1vr4O5qSwoEYXMnYEJvCjyi-bRDjN9AIVAY42K5nhjX0/edit"
      }
    ]
  },
  pantheon: {
    slug: "pantheon",
    title: "Pantheon",
    tagline: "A 3D historical fighter, still in a public but unlisted pre-launch build.",
    primaryCta: {
      label: "Play Pantheon",
      href: "https://pantheon.prismandpollen.com"
    },
    links: [
      {
        label: "Same site on Firebase Hosting",
        href: "https://pantheon-game-ksm.web.app"
      },
      {
        label: "Source repo",
        href: "https://github.com/Artometrics/pantheon"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/pantheon/home.jpg",
            alt: "The Pantheon home screen with Darwin, Einstein, and a knight, plus the mode list.",
            caption: "Live home capture, 18 November 2026, used earlier on this preview."
          },
          {
            src: "/images/projects/pantheon/menu.jpg",
            alt: "A Pantheon menu still.",
            caption: "A menu still from the KSM project record."
          },
          {
            src: "/images/collectibles/pantheon-statues.jpg",
            alt: "Statue-like figures used as thematic art for Pantheon.",
            caption: "Thematic art, not a substitute for the live capture."
          }
        ],
        paragraphs: [
          "Pantheon is a three-dimensional historical fighting game. You pick a figure from history, learn a short move list, and fight in arcade, story, versus, and training modes. The README calls the current build a private, pre-launch game that is nonetheless public on the web and kept out of search. The intended address is https://pantheon.prismandpollen.com. The same files are served at pantheon-game-ksm.web.app. Both sit on Firebase Hosting in the artometrics-510519 project, under the site name pantheon-game-ksm. A response header on 17 November 2026 at 6:28 PM PT showed last-modified of 14 November 2026 at 6:28 PM PT, with a noindex, nofollow robots tag.",
          "The repository, Artometrics/pantheon, is private. It was created on 25 October 2026 at 10:26 AM PT. As of 17 November 2026 it held 56 commits on main. The README for the current build is labeled v0.9. That pass added CC0 Quaternius character rigs for the historical roster, with Newton still on a Meshy rig; Kenney props for several specials; and a Hall of Legends prop pass. License notes live in ASSETS.md, including a short “Decided” block for that pass.",
          "The opening sequence, as the README describes it, is an Artometrics splash, then Pantheon, then a menu: Arcade, Story, Versus, Training, Tutorial, Trials, Moves, and Options. Choose a fighter and you see difficulty, playstyle, and a 3D preview. A standing kick is high; you can crouch under it. The Master Project Inventory, checked on 17 November 2026, records the live title as “Pantheon — v0.9.” It also names a Forge alongside the fighter, and a planned Marigold tool for 3D storyboard staging that had no live URL yet."
        ]
      },
      {
        title: "The roster, as built",
        gallery: [
          {
            src: "/images/projects/pantheon/home.jpg",
            alt: "The live home screen, with the roster in view.",
            caption: "Home capture used because the select screen is part of what the live site actually shows."
          },
          {
            src: "/images/projects/pantheon/pantheon-inline-select.webp",
            alt: "A fighter-select still from an earlier capture.",
            caption: "Earlier select-screen still from the KSM record."
          }
        ],
        paragraphs: [
          "A working sheet, “Pantheon — Character Roster & Move-Set Sheet v0.1,” was written on 29 October 2026 from the then-current build in site/js/game.js and from the Pantheon concept document. It is a reading of the build, not a wish list. Anything in that document marked PROPOSAL is called out as not yet built. The roster at a glance, as built, is 14 selectable fighters, one arcade boss, and seven locked “coming soon” slots. The concept document's first three were Darwin, Einstein, and Joan of Arc. Columbus and John F. Kennedy, once listed as coming soon, were already in the build when the sheet was written.",
          "The sheet's stat key is taken from the game code. Speed is walk speed, with a base around 3.0 to 3.4. Power is a damage-dealt multiplier. Defense is a damage-taken divisor; higher means tougher. In that table: Charles Darwin, the Naturalist, is a zoner and summoner at 3.1 speed, 1.00 power, 1.00 defense. Albert Einstein, the Relativist, is a trickster with time control, slightly softer at 0.95 power and 0.90 defense, with a quick light jab and a heavy that stuns longer. Joan of Arc, the Maid of Orléans, is rushdown with a sword, the fastest walker at 3.4, and a long-reach sword heavy. Napoleon Bonaparte, the Emperor, is artillery and saber at 1.10 power. Cleopatra VII, Queen of the Nile, is poison and sustain, with a long sweep and a fast jab. John F. Kennedy, the New Frontier, is an all-rounder with a stronger launcher.",
          "Nikola Tesla, the Wizard of Electricity, is a zoner who plants traps; his shock heavy chips and stuns. Marie Curie, the Radiant, is area denial and poison. Genghis Khan, the Great Khan, is the heavy: 1.10 power, the highest selectable defense at 1.15, and the heaviest heavy attack, slow, at 12 damage. Sun Tzu, the Strategist, is mix-up and deception, with the fastest jab string. Christopher Columbus, the Navigator, is space control, with a long-reach heavy and a big push. Abraham Lincoln, the Rail-Splitter, is a grappler with an axe, the longest-reach axe heavy, and throws at plus 35 percent. William Shakespeare, the Bard of Avon, is a zoner and trickster. Ada Lovelace, the Enchantress of Number, is a zoner built around setplay, with a fast jab and a long sweep, and the same low 0.90 defense as Einstein and Tesla.",
          "The arcade boss is the Archivist, Keeper of All Histories, and is not selectable. The sheet gives the Archivist 3.35 speed, 1.10 power, and 1.25 defense, and says the boss uses Sun Tzu's model as a gold-and-shadow phantom. The locked slots in the build, still labeled coming soon, are Leonardo da Vinci, Harriet Tubman, Isaac Newton, Frida Kahlo, Alexander the Great, Hypatia, and Miyamoto Musashi. The Fusion Design document's “14 fighters” matches the 14 selectable names above; the Archivist is extra."
        ]
      },
      {
        title: "How a fight plays",
        gallery: [
          {
            src: "/images/projects/pantheon/menu.jpg",
            alt: "Modes and menu chrome from the build.",
            caption: "Menu still from the project record."
          }
        ],
        paragraphs: [
          "Every fighter shares a set of normals, also read from the build. Light punch does 4 damage and chains into a second light, a heavy, a launcher, a sweep, or a low jab. The second light does 5 and can end in heavy, launcher, or sweep. Heavy is a kick for 9, an ender with the biggest push. Down plus punch is a low jab. Down plus kick is a sweep for 8 and a knockdown. Forward plus kick is a launcher for 10, also used as anti-air. Jump lights and heavies are overheads, at 5 and 8. Special and forward-plus-special are unique to each fighter. A super, used at full meter, is cinematic and opens that fighter's “reality marble” stage. Clean hits on a foe who is starting or recovering from an attack count as counter hits, at 1.2 times damage with extra stun.",
          "The unique moves are already in the build, and the sheet names them. Darwin throws a darting finch, rolls an armored tortoise shell, and, for a super, Origin of Species, a stampede after which he evolves. Einstein slows a foe with Time Dilation, teleports with Quantum Leap, and uses E = mc² as a super. Joan has a Banner Rush, Holy Fire, and Siege of Orléans. Napoleon fires a Grande Batterie and a Cavalry Charge, then Sun of Austerlitz. Cleopatra's Asp Strike poisons low; an Ankh of Isis returns and can heal her; Wrath of the Nile floods the arena. Kennedy's Ask Not is a shockwave speech that shatters projectiles; PT-109 is a ramming dash; We Choose the Moon drops a Saturn V. Tesla throws Ball Lightning, plants a Tesla Coil, and calls Wardenclyffe. Curie lobs a Radium Vial, bursts with Polonium Pulse, and ends with Radiant Decay.",
          "Genghis fans three arrows, charges on horseback, and calls The Great Horde. Sun Tzu leaves a decoy with Deception, bursts bamboo stakes as a Terrain Trap, and, for a super, The Art of War, thirteen strikes for thirteen chapters. Columbus tosses an anchor, blows a foe back with Trade Winds, and, in New World, brings the Niña, the Pinta, and the Santa María in broadside. The sheet notes that Columbus's ending already reframes “discovery”: the shore was found long ago by the people who lived there. Lincoln throws a spinning axe, drops a House Divided overhead chop, and uses Four Score. Shakespeare throws a quill and a skull, then All the World's a Stage. Lovelace rolls a Difference Engine, fans Punch Cards, and, in The First Program, runs Note G. The Archivist does not have a fixed special: Borrowed Chapter and Footnote each cast a random legend's move, and Stolen Phantasm is the boss super."
        ]
      },
      {
        title: "Design decisions that were already made",
        gallery: [
          {
            src: "/images/projects/pantheon/pantheon-hero.webp",
            alt: "An earlier Pantheon hero still.",
            caption: "Earlier hero still from the KSM record."
          }
        ],
        paragraphs: [
          "The 29 October sheet also read the numbers for design. Every special, at that date, was a projectile, a dash, or a teleport. Nobody had a command throw or a counter or parry special. The softest defense, 0.90, belonged to Einstein, Tesla, and Lovelace. The toughest selectable defense was Genghis at 1.15, then the Archivist at 1.25.",
          "On 9 November 2026, at about 8:45 PM PT, a project work session closed some of those questions. The decision, recorded on the same sheet, was to keep the 14 selectable fighters plus the Archivist and to rebalance before adding anyone else. New figures would have repeated a gap the sheet had already named, and they would also have needed sourced biographies first. The first rebalance step decided there was to give Sun Tzu an added parry, “Win Without Fighting,” on a back-plus-special input, without deleting Deception or Terrain Trap. This essay records that as a decision from that session. It does not claim, from this page, that the parry has already shipped in the live v0.9 build unless a later public note says so.",
          "A quote-check pass was not left open. The sheet says that pass is done in Pantheon pull request #8, merged on 9 November 2026. The problem it addressed is that several win quotes were well known but contested or paraphrased. This page names moves and titles from the build. It does not repeat those quotes as if they were settled history. Still open, as of that same session, were which locked slots come next, whether the Archivist should become selectable after Arcade, and whether other endings should carry the kind of critical note already written for Columbus."
        ]
      }
    ],
    sources: [
      {
        label: "Pantheon README (play URL, v0.9 assets, modes)",
        date: "README",
        href: "https://github.com/Artometrics/pantheon"
      },
      {
        label: "Artometrics/pantheon repository metadata (created 25 Oct 2026, 56 commits on main as of 17 Nov 2026)",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/pantheon"
      },
      {
        label: "Pantheon — Character Roster & Move-Set Sheet v0.1 (Google Doc)",
        date: "29 Oct 2026, with 9 Nov 2026 decisions",
        href: "https://docs.google.com/document/d/114PQUyJ7KbdTVoS5hnpDarcmWlWdWn0K_prnPrdP5-k/edit"
      },
      {
        label: "Pantheon pull request #8, quote-check pass, merged 9 Nov 2026",
        date: "9 Nov 2026",
        href: "https://github.com/Artometrics/pantheon/pull/8"
      },
      {
        label: "Live headers for pantheon.prismandpollen.com (200, noindex; last-modified 14 Nov 2026, 6:28 PM PT)",
        date: "17 Nov 2026",
        href: "https://pantheon.prismandpollen.com"
      },
      {
        label: "Artometrics — Master Project Inventory",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      },
      {
        label: "Live home capture used on this site",
        date: "18 Nov 2026",
        href: "https://pantheon.prismandpollen.com"
      }
    ]
  },
  gotha: {
    slug: "gotha",
    title: "Gotha",
    tagline: "An almanac of artifacts, dealt as collectible cards on a cited idea map.",
    primaryCta: {
      label: "Open Gotha",
      href: "https://gotha.artometrics.com"
    },
    links: [
      {
        label: "The deck",
        href: "https://gotha.artometrics.com/artifacts"
      },
      {
        label: "Idea map",
        href: "https://gotha.artometrics.com/map"
      },
      {
        label: "Source repo",
        href: "https://github.com/Artometrics/gotha"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/gotha/home.jpg",
            alt: "The Gotha homepage, a map of ideas.",
            caption: "Viewport crop of a Gotha home capture already in the project screenshots."
          },
          {
            src: "/images/projects/gotha/home-390.jpg",
            alt: "The Gotha homepage at a phone width.",
            caption: "Mobile crop of the same home capture."
          },
          {
            src: "/images/collectibles/gotha-hall.jpg",
            alt: "A hall used as thematic art for Gotha.",
            caption: "Thematic art used on the collectible project card."
          }
        ],
        paragraphs: [
          "Gotha is the Artometrics almanac of artifacts. The live site, gotha.artometrics.com, titles itself “Gotha — a map of ideas.” It is a 200 response with a noindex, nofollow robots tag. A header check on 17 November 2026 showed last-modified at 11:50 PM PT that same night, just after a pair of merges that turned the artifacts into collectible cards.",
          "The repository, Artometrics/gotha, is private. It was created on 16 November 2026 at 10:25 AM PT, and pull request #1, “Build Gotha,” was merged three minutes later, at 10:28 AM PT. As of 17 November 2026 the repo held 12 commits on main. It is a young site, but it is not an empty one. The Master Project Inventory, written the same week, already described “57 artifacts, 5 long briefs (Invictus, Turner Diaries, The Collector, Secret History, Nietzsche gift), figures, map, web, sources pages.”",
          "A live capture of the Artifacts page on 18 November 2026 confirms those numbers in the site's own type. The headline is “57 cards of lost, stolen & surviving things.” The dek says every artifact on the idea map is also a collectible card: a public-domain image, a plain-language breakdown, and the sources behind it. You tap a card to flip it, and open it for the full record. Aces, marked (A), are the five full briefs. A status row on that same page reads: 57 cards, 52 with archival images, 106 cited sources, 28 lost or destroyed.",
          "The name is not a flourish. The README says Gotha is named for the Almanach de Gotha, the 1763–1944 almanac of houses and lineages. In this version it is an idea-map tool: a map of concepts, people, and events that draws connections, cites primary sources, and generates Artifact pages from those nodes. Academy holds training videos and resources. Glossary holds definitions. Gotha is the connective tool. A body of research called the McAuliffe Codex is source material for building Gotha, not a separate public site.",
          "The hosting facts are specific. The live domain is gotha.artometrics.com, with a default Hosting URL at gotha-510519.web.app, in the artometrics-510519 Firebase project, site gotha-510519. It is an Astro 5 static export on the Artometrics magazine shell. Indexing is refused three ways: a robots meta tag on every page, an X-Robots-Tag header in firebase.json, and a robots.txt that disallows everything. Continuous integration is set to fail if any page loses the meta tag."
        ]
      },
      {
        title: "The deck",
        gallery: [
          {
            src: "/images/projects/gotha/artifacts.jpg",
            alt: "The Artifacts deck on Gotha, with counts and filters.",
            caption: "Live capture of gotha.artometrics.com/artifacts, 18 November 2026."
          },
          {
            src: "/images/projects/gotha/brief-invictus.jpg",
            alt: "The Invictus brief, one of the five aces.",
            caption: "Viewport crop of a Gotha brief screenshot already in the repo."
          },
          {
            src: "/images/projects/gotha/banner.jpg",
            alt: "A Gotha banner used on this site.",
            caption: "Earlier Gotha still from the KSM record."
          }
        ],
        paragraphs: [
          "The same Artifacts page splits the deck by kind and by fate. The kind filters, with their counts, are Texts 25, Documents 13, Artworks 8, Objects 9, Film 1, and Places 1. The fate filters are Extant 28, Lost 25, Destroyed 3, Disputed 1, and Aces / Briefs 5. Those figures add up in the way the page presents them; this essay repeats the labels as they appear, rather than re-tallying a private spreadsheet.",
          "The five ace briefs are named in both the inventory and the data tree: Invictus, The Turner Diaries, The Collector, The Secret History, and Hitler's Nietzsche gift to Mussolini. The cards file in the repo holds 57 keys, which matches the live “57 cards” line. Among the names in that file, besides the aces, are Julius Caesar's will, Aristotle's Poetics Book II, Livy's lost books, the Sibylline Books, The History of Cardenio, Columbus's first-voyage diario, Hemingway's 1922 lost manuscripts, the original Amber Room, the Honjo Masamune, the Peking Man fossils, the Irish Crown Jewels, Van Eyck's Righteous Judges, Caravaggio's Palermo Nativity, Vermeer's The Concert, Rembrandt's Storm on the Sea of Galilee, the missing leaves of the Aleppo Codex, Nietzsche's sword cane, Leonardo's Battle of Anghiari, the Yongle Encyclopedia, missing imperial Fabergé eggs, Raphael's Portrait of a Young Man, Special Order 191, the Wannsee Protocol, the Einstein–Szilárd letter, the Zimmermann Telegram, the Ems Dispatch, Anne Frank's diaries, and others. This is a catalog of what the deck contains, not a retelling of each brief.",
          "The navigation on the live site, as captured, is Gotha, Idea Map, Artifacts, Places, Sources vs Evidence, and Sources. That is slightly richer than the first inventory shorthand of “figures, map, web, sources.” Figures are still in the site — a Caesar figure page was already screenshotted in the Gotha repo — and a /web view exists as well. The house chrome is the same Artometrics blackletter wordmark and “culture, quantified” line as the magazine, with a small Gotha mark under it, and the same Wednesday, November 18, 2026 date line.",
          "The data path is as strict as the deck looks. The README names data/archive.csv as the 57-row source of truth, compiled to JSON before every build. data/cards.json holds, for each card, a public-domain or CC0 Wikimedia Commons image with caption, credit, license, and file page, plus a two-to-four-sentence breakdown that is only allowed to restate the sourced archive row, plus extra primary-text links. A field on the image says whether the picture shows the artifact itself or a related image. Numbering runs from 001 to 057, with Aces reserved for the briefs, and suits assigned as spade for text, diamond for document, heart for artwork, club for object, a star for film, and a triangle for place — the same counts the live filters show. The five briefs are Markdown files, rendered with open questions and weak claims boxed and weak markers badged. The rule written in the README is the same rule as the magazine: never invent facts, dates, or coordinates, and keep flagged claims flagged."
        ]
      },
      {
        title: "The map, the cards, and the citations",
        gallery: [
          {
            src: "/images/projects/gotha/map.jpg",
            alt: "The Gotha idea map.",
            caption: "Viewport crop of a Gotha map screenshot already in the repo."
          },
          {
            src: "/images/projects/gotha/map-390.jpg",
            alt: "The idea map at a phone width.",
            caption: "Mobile crop of the same map capture."
          },
          {
            src: "/images/projects/gotha/figure-caesar.jpg",
            alt: "A figure page for Julius Caesar.",
            caption: "Viewport crop of a Gotha figure screenshot already in the repo."
          }
        ],
        paragraphs: [
          "The look of the site changed in a short evening of merges on 17 November 2026. At 10:19 PM PT, pull request #2, “Universe links: Academy + Glossary in nav, Universe footer row,” tied Gotha back to the rest of the Artometrics universe. At 10:42 PM PT, pull request #5, “Idea map tool: citations on every node, Artifacts from nodes,” made the map a cited tool rather than a loose illustration. At 11:47 PM PT, pull request #6, “Artifacts as collectible cards,” turned the 57 records into the deck the live page now describes. Two minutes later, at 11:49 PM PT, pull request #7, “Card back: inline corner index,” finished a card-back detail. The last-modified time on the live host, 11:50 PM PT, sits immediately after that last merge.",
          "The live dek is the design in one sentence: a public-domain image, a plain-language breakdown, and the sources behind it, with a flip for the back of the card and a full record behind that. Aces are longer because they are briefs, not because they are exempt from sources. The idea map is supposed to carry citations on every node, and artifacts can be made from those nodes. That is what pull request #5 named, and what the Artifacts page still points to.",
          "The inventory also notes some overlap with other projects. People in Gotha overlap with Pantheon — da Vinci, Einstein, Columbus, Shakespeare — and with The Handover, on the book side, for figures such as Franklin D. Roosevelt, Woodrow Wilson, Ronald Reagan, and Theodore Roosevelt. A next step recorded there was to add Pantheon characters as Gotha figures and to wire figures to a shared people index. That remains a recorded intention, not a claim that the wiring is finished.",
          "The routes are named in the README with more precision than a nav bar can show. The idea map lives at /web, also /ideas, as a d3-force map whose edges may only come from archive rows and figure source lists; every node lists its citations. Concept nodes are the type and category labels already written on a sourced artifact row, not independent claims. /map is not that idea map; it is Places, a Leaflet map on OpenStreetMap tiles, with no key and with attribution shown. Pins are geocoded by hand from a specification file, at a one-request-a-second Nominatim rate, and places without a documented location are listed as unpinned, with the reason. Figure pages, under /figures, are a sources-versus-evidence view for Genghis Khan, Julius Caesar, and Napoleon, with grades of supported, disputed, or legend. /sources lists every citation. An old /archive path 301s to /artifacts.",
          "The five ace briefs already have one-line statements of what they are about, written for a sample index in the briefs folder. Invictus is a hospital poem, written after an amputation, that was recited on Robben Island, performed by Oprah from age seven, paraphrased by Churchill, and handed by Timothy McVeigh as his unspoken last statement. The Turner Diaries brief is a critical history of how that novel sat in later crimes, and the index is explicit that it is critical history only, with no operational content. The Collector follows a novel and a film through later citations, and says that evidence grades differ on purpose. The Secret History tracks how a “weird Classics group” appeared as Easter eggs in another novel before publication, and how classmates still argue whether the campus is a roman à clef. The Nietzsche set Hitler gave Mussolini is a correction of a usual memory: the inscription is for Mussolini's sixtieth birthday on 29 July 1943, four days after Mussolini had already been deposed, and the set reached him in captivity and has never been found. The tightest documented thread between two of those briefs, the index says, is one reader, McVeigh, and two texts — not a claim that the poem and the novel mean the same thing."
        ]
      },
      {
        title: "How Gotha sits with Dawn and the magazine",
        gallery: [
          {
            src: "/images/projects/gotha/artifacts.jpg",
            alt: "The deck, as it appears on the live site.",
            caption: "The same 18 November 2026 Artifacts capture."
          }
        ],
        paragraphs: [
          "Gotha is linked from artometrics.com's Universe nav, as of magazine pull request #225, merged 17 November 2026 at 10:02 PM PT. Academy and Glossary were getting the reciprocal Gotha links in their own open pull requests when the inventory was updated that night. The brand pack — wordmarks, thumbnails, house style — is recorded as in use on both Gotha and the magazine.",
          "Dawn has an /artifacts route as well, but the inventory is careful about what that route is. As of 17 November 2026, Dawn's /artifacts was the Recipes design board, not the historical almanac. An interim Dawn pull request, #48, “Link /artifacts to Gotha,” was merged at 10:20 PM PT that night so the studio would point at the almanac rather than confuse the two. Kyle still had to decide, in that note, exactly where Dawn should link Gotha. The important fact for this page is the distinction: Gotha is the almanac; Dawn's Recipes board is a different desk."
        ]
      }
    ],
    sources: [
      {
        label: "Live gotha.artometrics.com headers (200, noindex; last-modified 17 Nov 2026, 11:50 PM PT)",
        date: "17 Nov 2026",
        href: "https://gotha.artometrics.com"
      },
      {
        label: "Live capture of /artifacts, including the 57 / 52 / 106 / 28 counts and filters",
        date: "18 Nov 2026",
        href: "https://gotha.artometrics.com/artifacts"
      },
      {
        label: "Artometrics/gotha repository (created 16 Nov 2026, 12 commits on main) and pull requests #1, #2, #5, #6, #7",
        date: "16–17 Nov 2026",
        href: "https://github.com/Artometrics/gotha"
      },
      {
        label: "data/cards.json in the Gotha repo (57 card keys)",
        date: "17 Nov 2026"
      },
      {
        label: "Artometrics — Master Project Inventory",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      },
      {
        label: "Artometrics pull request #225, Universe nav",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/artometrics/pull/225"
      },
      {
        label: "Dawn pull request #48, Link /artifacts to Gotha",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/dawn/pull/48"
      }
    ]
  },
  dawn: {
    slug: "dawn",
    title: "Dawn",
    tagline: "A dark studio and a pixel village, with the tools Kyle chose to keep sitting as desks around it.",
    primaryCta: {
      label: "Open Dawn",
      href: "https://dawn.artometrics.com"
    },
    links: [
      {
        label: "Source repo",
        href: "https://github.com/Artometrics/dawn"
      },
      {
        label: "Books desk",
        href: "https://dawn.artometrics.com/books"
      },
      {
        label: "Recipes",
        href: "https://dawn.artometrics.com/recipes"
      },
      {
        label: "Gotha, the artifact almanac",
        href: "https://gotha.artometrics.com"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/dawn/home-live.jpg",
            alt: "The Dawn village, captured 18 November 2026.",
            caption: "Live capture of dawn.artometrics.com, 18 November 2026."
          },
          {
            src: "/images/projects/dawn/banner.jpg",
            alt: "An earlier Dawn still.",
            caption: "Earlier Dawn capture from the KSM record."
          },
          {
            src: "/images/collectibles/dawn-landscape.jpg",
            alt: "Landscape art used for the Dawn project card.",
            caption: "Thematic art, alongside the live village capture."
          }
        ],
        paragraphs: [
          "Dawn is two things at once, and the repository description still says both. It is a unified AI development studio and model gateway — Gemini, Grok, and a code engine — and it is a pixel village of agents. The live site's own fallback description, visible even on a missing page, is: “A pixel village of agents. You approve anything that leaves the room.” The address is dawn.artometrics.com, also served from dawn-510519.web.app. It returns 200, with noindex and nofollow. A header check early on 18 November 2026 showed last-modified at 12:05 AM PT, two minutes after a Recipes Studio merge.",
          "The public repository, Artometrics/dawn, was created on 9 October 2026 at 7:23 PM PT. As of 17 November 2026 it held 87 commits on main. The design notes in the repo describe a serif wordmark that simply reads “Dawn,” and a shell that is dark and calm: a near-black ground, soft grey text tiers, and one warm accent. A left drawer of icon-and-label rows is part of that shell. A live capture of the Books desk on 18 November 2026 shows that drawer in use, with the wordmark at the top and a list of desks down the side.",
          "The Master Project Inventory, updated 17 November 2026, calls Dawn a “studio + village,” live at 200, noindex, and lists village routes and desks that include Atlas, Books, Aftercare, Games, Artifacts, and Research. Some of those names later moved or were retired. This essay uses the live sidebar and the later pull requests as the current picture, and treats the inventory as a dated snapshot when the two disagree."
        ]
      },
      {
        title: "The desks around the village",
        gallery: [
          {
            src: "/images/projects/dawn/books.jpg",
            alt: "The Dawn Books desk, with Literary Tarot cards face down.",
            caption: "Live capture of dawn.artometrics.com/books, 18 November 2026. Shop links stay off, as the page itself says."
          },
          {
            src: "/images/projects/dawn/recipes.jpg",
            alt: "The Recipes desk.",
            caption: "Live capture of dawn.artometrics.com/recipes, 18 November 2026."
          },
          {
            src: "/images/projects/dawn/dawn-inline-agents.webp",
            alt: "Village agents from an earlier Dawn still.",
            caption: "Earlier agents still from the KSM record."
          }
        ],
        paragraphs: [
          "On the 18 November Books capture, the left drawer lists Atlas, Quests, Village, Characters, and Library, then a Work group of Projects, Studio, Recipes, Letter, Newsletter, Games, and Aftercare. Fernbound is not in that list. That is not an accident of the screenshot. Dawn pull request #50, “Retire Fernbound from the live Dawn desk,” was merged on 17 November 2026 at 11:11 PM PT. The standalone Fernbound host was already gone. The remaining lab report for that retirement lives on this site, at /lab/fernbound, not as a Dawn desk.",
          "Books is one of the desks that were folded into Dawn on 13 November 2026, first as a thin port and then, after that port was judged too basic, as a full merger. Pull request #44, the Books merger, was merged at 10:28 PM PT that night. A live capture of the desk now opens with a single sentence: “An oracle, a three-question match, the Gutenberg press, and a shelf on this phone.” Under that: “PageMatch stays on this phone. Shop links stay off.” Tabs on that page are Oracle, Quiz, Press, Library, and a Shelf count, which was 0 on the capture. The Oracle is Literary Tarot, three cards labeled Querent, Crucible, and Grimoire — who is reading, the path, and the book — with a note that this oracle is not the Aftercare deck.",
          "Aftercare, Games, Research, Walk, Cuts, Shows, and Newsletter were part of the same 13 November merger wave, in a sequence of pull requests that rebuilt retired tools in Dawn's design language. Atlas is a Stanford map desk, related to Cardinal Quest. Recipes is newer. Pull request #49, merged 17 November 2026 at 10:49 PM PT, added search, a Saved filter, a /recipes alias, and a Gotha Artifacts link. Pull request #51, at 11:22 PM PT, added Midway Mania and voice-actor Shorts as Recipes references. Pull request #52, “Ship Recipes Studio: editable HTML recipes + PNG export,” was merged on 18 November 2026 at 12:03 AM PT, and the live last-modified time followed two minutes later.",
          "Artifacts, on Dawn, needs the same care as on the Gotha page. For a stretch, /artifacts on Dawn was the Recipes design board, not the historical almanac. Pull request #48, merged 17 November 2026 at 10:20 PM PT, linked that route to Gotha so the two would not be confused. Gotha remains the almanac at gotha.artometrics.com.",
          "Atlas is larger than a pin on a menu. The Dawn product notes describe it as a map of real places, with Cardinal — Stanford, from the Cardinal book and podcast — as its first region. It opens on the Founders' Walk, with the pixel character at the first stop. It has 27 story stops with sources and a quiz, 12 more catalog places with notes and flags, five walking tours with real foot-routing lines, five book threads, a ten-event timeline, ranks, era stamps, and a daily hunt. Progress stays in local storage on the device. There is no sign-in and no new server path for the map itself. The basemap is OpenStreetMap data baked into the app, with attribution. The 8-bit town that used to be home now lives at /town, and the village at /village. The Atlas can also be embedded. That is why a lock on the Cardinal reading room and an open Atlas walk can exist at the same time: the walk is a sourced map desk, not the documentary website.",
          "Aftercare remains a live desk. A header check early on 18 November 2026, at 12:29 AM PT, returned 200 for /aftercare, still noindex. The 13 November merger that put Aftercare into Dawn was supposed to bring over the features that had been missing from a first, too-thin port, including a three-dimensional table and birth-chart work. This page does not walk through that desk as if a new audit had just been done. It records that the route is live, that it is in the drawer, and that it is not the Literary Tarot on the Books desk.",
          "Letter, Newsletter, Studio, Projects, and Games are also in the live drawer on the 18 November capture. Newsletter was one of the first desks added on 13 November. Studio and Recipes are part of the later design-board work, including the Recipes Studio merge that landed at 12:03 AM PT on 18 November. Games is the remaining games hub after Fernbound was retired from it. This page does not turn every drawer label into a full product review. It names the labels the live shell actually shows."
        ]
      },
      {
        title: "How Dawn became the house for what was kept",
        gallery: [
          {
            src: "/images/projects/dawn/dawn-hero.webp",
            alt: "An earlier Dawn hero still.",
            caption: "Earlier hero still from the KSM record."
          }
        ],
        paragraphs: [
          "The 13 November work is the hinge. Dawn began that day as the studio and village. By that night it was also the home for almost every retired tool Kyle chose to keep, rendered as desks in Dawn's own shell rather than as a stack of leftover apps. A first fold of Games, Aftercare, Books, and a Fernbound landing was judged too basic. The later pull requests rebuilt the real feature sets and pushed them live after a visual check at 1280 and 390 pixels.",
          "The surviving source of truth is Artometrics/dawn. An older copy under a different GitHub account was bundled and removed that same night. This page does not need the cleanup narrative beyond that fact: there is one Dawn repository, and it is public. Embeddings were left off in that pass. A shared shell path that called a Dawn Agents gateway could 404 while the gateway was off; whether to turn that gateway on was recorded as open, not as done.",
          "Some products were deliberately not brought over. Nightlight was recorded as archive-only, not a Dawn desk. Other dropped games stayed dropped as products. Invoices and Contacts had been added as early desks; later work on an open pull request is not treated here as a live change. This essay describes what the live drawer and the merged pull requests already show."
        ]
      },
      {
        title: "Design",
        gallery: [
          {
            src: "/images/projects/dawn/home-live.jpg",
            alt: "The village at rest.",
            caption: "Live village capture, 18 November 2026."
          }
        ],
        paragraphs: [
          "The design is consistent across the village and the desks. The shell is dark. The wordmark is a serif “Dawn.” The drawer is a quiet index of places you can go, not a marketing menu. On the Books desk, the main column is a single work surface: a short explanation, a row of mode pills, and the cards or tools for that mode. The page tells you what will not happen as clearly as what will. Shop links stay off. The Literary Tarot is not the Aftercare deck. Those sentences are design decisions, written on the site itself.",
          "The village is the other half of the same idea. You can walk a pixel town, and you approve anything that leaves the room. The studio, the code editor, the kits, and the agents sit behind that rule. This page does not describe unreleased agent behavior, spend limits, or private model routing. Those are not public magazine facts. The public fact is the shell, the desks, and the pull requests that put them there.",
          "The village and the desks are supposed to stay quiet enough to work in. You approve anything that leaves the room. Recents in the sidebar, when they are fetched from an agent desk, are described in the product notes as loading only the first time the sidebar opens. This page does not describe private agent routing, allowed-account rules, or billing. Those are not part of the public magazine record. The public record is the village, the drawer, the desks that are actually linked, and the pull requests that added or removed them."
        ]
      }
    ],
    sources: [
      {
        label: "Artometrics/dawn README, DESIGN notes, and repository metadata (created 9 Oct 2026, 87 commits on main as of 17 Nov 2026)",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/dawn"
      },
      {
        label: "Live dawn.artometrics.com headers (200, noindex; last-modified 18 Nov 2026, 12:05 AM PT)",
        date: "18 Nov 2026",
        href: "https://dawn.artometrics.com"
      },
      {
        label: "Live captures of /, /books, and /recipes",
        date: "18 Nov 2026",
        href: "https://dawn.artometrics.com/books"
      },
      {
        label: "Dawn pull requests #44 (Books), #48 (Gotha link), #49–#52 (Recipes), #50 (retire Fernbound)",
        date: "13–18 Nov 2026",
        href: "https://github.com/Artometrics/dawn"
      },
      {
        label: "Artometrics — Master Project Inventory",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      }
    ]
  },
  books: {
    slug: "books",
    title: "Books",
    tagline: "A Dawn desk for reading tools, and a series of Artometrics volumes still in manuscript.",
    primaryCta: {
      label: "Open the Books desk",
      href: "https://dawn.artometrics.com/books"
    },
    links: [
      {
        label: "Dawn",
        href: "https://dawn.artometrics.com"
      },
      {
        label: "Cardinal, a related book project",
        href: "/projects/cardinal"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/dawn/books.jpg",
            alt: "The Dawn Books desk.",
            caption: "Live capture of dawn.artometrics.com/books, 18 November 2026."
          },
          {
            src: "/images/collectibles/books-still-life.jpg",
            alt: "A still life used as the Books project card.",
            caption: "Thematic still life for the Books card on this site."
          }
        ],
        paragraphs: [
          "Books, on this site, means two things that now share a door. One is a desk inside Dawn: an oracle, a quiz, a Gutenberg press, a library, and a shelf that lives on the phone you are holding. The other is a series of Artometrics volumes — seventeen numbered books, plus a few companions — that exist as manuscript drafts and research archives, not as published full text. This page names those volumes and gives each one a one-line hook. It does not reprint the manuscripts.",
          "The live desk says as much in its own words. A capture on 18 November 2026 opens, “An oracle, a three-question match, the Gutenberg press, and a shelf on this phone.” Directly under that: “PageMatch stays on this phone. Shop links stay off.” The modes are Oracle, Quiz, Press, Library, and Shelf. The Oracle is Literary Tarot, three cards — Querent, Crucible, and Grimoire — for who is reading, what kind of story, and the book that fits. The page is explicit that this oracle is not the Aftercare deck.",
          "Those reading tools did not start in Dawn. They came from a earlier books app, PageMatch and Literary Tarot among them, and were folded into Dawn on 13 November 2026. A first, thin desk landed earlier that evening. Pull request #44, the full Books merger, was merged at 10:28 PM PT. Buy links were left off, and the live page still says they stay off. The Master Project Inventory later recorded the desk as live at /books, and noted that the shelf should eventually list the seventeen-volume series, plus Vigilance, The Bargain, The Handover, and Cardinal. Cardinal has its own project page on this site, because it is a documentary with its own reading room, not only a title on a shelf.",
          "Several of the volumes have overview-episode scripts that begin the same way: “Hey, it's Kyle, and this is Artometrics, the podcast where I make books.” That line is the series frame. The scripts then name a volume and state the question the book is trying to answer. The hooks on this page are taken from those questions and from the inventory titles, not from the manuscript chapters that follow them."
        ]
      },
      {
        title: "The Artometrics book series",
        gallery: [
          {
            src: "/images/collectibles/books-still-life.jpg",
            alt: "Thematic art for the Artometrics book series.",
            caption: "The manuscripts themselves are not published here."
          }
        ],
        paragraphs: [
          "The Master Project Inventory, updated 17 November 2026, lists volumes 1 through 17 as manuscript drafts as of that date, and groups them under an umbrella row, “Artometrics 17-volume series.” Three further books — Vigilance, The Bargain, and The Handover — are listed with manuscript drafts, research archives, and limitations documents. A related article, “Presidents: Domestic Use of Force & Civilian Deaths,” is listed as a source-hardened sheet. The 01 Books folder in Artometrics HQ holds shortcuts to those same titles.",
          "The hooks below are one-line readings of what each volume is about, taken from the series titles, the Drive folder names, and the opening idea of each book's overview-episode script where one exists. They are not chapter summaries, and they are not a substitute for the drafts.",
          "The volume count is a dated fact, not a forever claim. On 17 November 2026 the inventory called volumes 1 through 17 manuscript drafts, listed three companions with research archives and limitations documents, and listed the Presidents sheet as a source-hardened article rather than as volume 18. If a volume is later published, or if the shelf count on the Dawn desk changes from the 0 shown on 18 November, this list should be updated from that record rather than from memory."
        ],
        books: [
          {
            title: "Company Towns",
            hook: "What happens when the company owns the paycheck, the house, and the town around them.",
            volume: "Vol. 1"
          },
          {
            title: "The Heirs",
            hook: "What a fortune does after the founder is gone.",
            volume: "Vol. 2"
          },
          {
            title: "Vanity Cities",
            hook: "Why some purpose-built capitals become real cities and others never leave the brochure.",
            volume: "Vol. 3"
          },
          {
            title: "Founder Schools",
            hook: "Schools started by the people who already run the companies.",
            volume: "Vol. 4"
          },
          {
            title: "The Crusaders",
            hook: "Philanthropy that comes with a mission, and the power that rides along with the gift.",
            volume: "Vol. 5"
          },
          {
            title: "The Splits",
            hook: "What a breakup does to a company, a fortune, and the public story around them.",
            volume: "Vol. 6"
          },
          {
            title: "The Feuds",
            hook: "Long fights between people who once shared a boardroom or a name.",
            volume: "Vol. 7"
          },
          {
            title: "The Executives",
            hook: "The professional managers who take over once the founder is no longer the point.",
            volume: "Vol. 8"
          },
          {
            title: "The Affairs",
            hook: "Private lives that became public because money and power were already in the room.",
            volume: "Vol. 9"
          },
          {
            title: "The Rivals",
            hook: "Famous rivalries, including the ones that do not hold up once you check them.",
            volume: "Vol. 10"
          },
          {
            title: "Expensive Murders",
            hook: "Killings followed by money, lawyers, and a public record thicker than the crime itself.",
            volume: "Vol. 11"
          },
          {
            title: "The Laws",
            hook: "The statutes and cases that quietly built the world the rest of the series walks through.",
            volume: "Vol. 12"
          },
          {
            title: "The Institutions",
            hook: "The organizations that outlast any one founder, president, or scandal.",
            volume: "Vol. 13"
          },
          {
            title: "The Collectors",
            hook: "People who gather art, objects, and influence, and what those collections do.",
            volume: "Vol. 14"
          },
          {
            title: "The Bunkers",
            hook: "Retreats, shelters, and the impulse to leave the ordinary world behind.",
            volume: "Vol. 15"
          },
          {
            title: "The Foundations",
            hook: "Endowments, and the long afterlife of a fortune.",
            volume: "Vol. 16"
          },
          {
            title: "The Comebacks",
            hook: "Returns after disgrace, defeat, or a fall that was supposed to be final.",
            volume: "Vol. 17"
          },
          {
            title: "Vigilance",
            hook: "How a word that once meant looking out for neighbors became a history of committees and violence."
          },
          {
            title: "The Bargain",
            hook: "Unions and collective bargaining, and the deals that set the terms of work."
          },
          {
            title: "The Handover",
            hook: "The presidential lifecycle: how power is transferred, delayed, or clung to."
          },
          {
            title: "Presidents: Domestic Use of Force & Civilian Deaths",
            hook: "A source-hardened record of when United States presidents used force at home."
          }
        ]
      },
      {
        title: "What the desk does, and what this page will not do",
        gallery: [
          {
            src: "/images/projects/dawn/books.jpg",
            alt: "Oracle, Quiz, Press, Library, and Shelf, with shop links off.",
            caption: "The live desk, 18 November 2026."
          }
        ],
        paragraphs: [
          "The desk is a reading tool, not a storefront. PageMatch stays on the phone. The Gutenberg press and the library search are there to find and hold texts, not to push a purchase. The inventory's next step for the shelf was to point each book card at its Drive folder and at store links once the books are published. Until that happens, and until shop links are explicitly turned on, this page follows the live rule: no buy links, and no unpublished full text.",
          "Overview-episode scripts exist for many of the volumes, written in Kyle's speaking voice as the start of an Artometrics podcast. Those scripts are useful as a source for a one-line hook. They are not published here as episodes, and the manuscripts behind them are not quoted. If a volume later ships, the place to read it should be the published book or the Dawn shelf, not a paste of a draft on this site.",
          "Cardinal is listed in the inventory as a book the shelf should mention, and it is. The documentary, the locked reading room, and the research library are described on the Cardinal page, because that project is already large enough to stand on its own.",
          "The four desk modes besides Shelf are already named on the live page. Oracle is the three-card Literary Tarot, with Querent, Crucible, and Grimoire described as who is reading, the path, and the book. Quiz is the three-question match named in the lede. Press is the Gutenberg press. Library is the library search. Shelf, on the 18 November capture, showed a count of 0, which matches a shelf that has not yet been loaded with the seventeen-volume list the inventory asked for. This KSM page is one place that list can now be read, as titles and hooks, without claiming that the Dawn shelf already holds the published books.",
          "Vigilance, The Bargain, and The Handover are listed in the inventory with research archives and limitations documents alongside the drafts. The Presidents sheet is listed as source-hardened rather than as a numbered volume. Those distinctions matter. A limitations document is a sign that the work is still being checked, not a promise that the book is finished.",
          "A few nearby titles are deliberately not in the list above. The inventory also has a Codex row, marked repo-only, and the local books tree includes tool folders that look like research kits rather than volumes. The McAuliffe Codex, named in the Gotha README, is research for the almanac, not a public book site. Those materials are real, and they are not presented here as numbered Artometrics volumes. The list on this page is the seventeen drafts, the three companion manuscripts, and the Presidents sheet, because that is how the inventory grouped them on 17 November 2026."
        ]
      }
    ],
    sources: [
      {
        label: "Live capture of dawn.artometrics.com/books",
        date: "18 Nov 2026",
        href: "https://dawn.artometrics.com/books"
      },
      {
        label: "Dawn pull request #44, Books merger",
        date: "13 Nov 2026",
        href: "https://github.com/Artometrics/dawn/pull/44"
      },
      {
        label: "Artometrics — Master Project Inventory, rows for Vols. 1–17, Vigilance, The Bargain, The Handover, and Presidents: Domestic Use of Force",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      },
      {
        label: "Artometrics HQ, 01 Books folder (Drive), title list",
        date: "18 Nov 2026",
        href: "https://drive.google.com/drive/folders/1TPt24JNiTqVhnawRdap11lxPDbkoByjf"
      },
      {
        label: "Local Artometrics book-series overview-episode scripts, used only for one-line hooks",
        date: "17 Nov 2026"
      }
    ]
  },
  dwts: {
    slug: "dwts",
    title: "Data with the Stars",
    tagline: "An unofficial archive of Dancing with the Stars, rebuilt from a cleaned SQLite file and kept honest about its gaps.",
    primaryCta: {
      label: "Open Data with the Stars",
      href: "https://dwts.artometrics.com"
    },
    links: [
      {
        label: "Data and sources",
        href: "https://dwts.artometrics.com/data"
      },
      {
        label: "Seasons",
        href: "https://dwts.artometrics.com/seasons"
      },
      {
        label: "Source repo",
        href: "https://github.com/Artometrics/data-with-the-stars"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/dwts/home.jpg",
            alt: "The Data with the Stars homepage.",
            caption: "Live capture of dwts.artometrics.com."
          },
          {
            src: "/images/projects/dwts/seasons.jpg",
            alt: "The seasons index.",
            caption: "Live capture of the seasons index, with seasons 1 through 35 in the nav."
          },
          {
            src: "/images/projects/dwts/banner.jpg",
            alt: "A Data with the Stars banner.",
            caption: "Banner still from the KSM project record."
          }
        ],
        paragraphs: [
          "Data with the Stars is an unofficial fan site for the United States edition of Dancing with the Stars. The README calls it an Artometrics project by Mia and Kyle, and it says plainly that the site is not affiliated with ABC, BBB, or the show. The live address is dwts.artometrics.com, also served from the Firebase site behind that domain. A header check on 17 November 2026 returned 200, with a noindex, nofollow robots tag, and a last-modified time of 14 November 2026 at 6:25 PM PT — one minute after a pull request that disallowed all crawlers.",
          "The repository, Artometrics/data-with-the-stars, is private. It was created on 3 November 2026 at 1:51 PM PT. As of 17 November 2026 it held 10 commits on main. That is a small commit history for a large site, because the site is generated. Pages are built from data/dwts.sqlite — performances, scores, cast, songs, judges — and from portraits listed in data/photos_ok.csv, which are Wikimedia Commons files with license and attribution. Missing fields render as “Data coming soon.” The README is explicit: nothing in a gap is filled in from outside the archive.",
          "Two pull requests tell the operational story. Pull request #1, “Add Firebase Hosting auto-deploy from main,” was merged on 13 November 2026 at 5:10 PM PT. Pull request #2, “Disallow all crawlers in robots.txt,” was merged on 14 November 2026 at 6:24 PM PT. The site is public in the sense that anyone with the URL can open it, and unlisted in the sense that it asks not to be indexed.",
          "The live About page, read on 18 November 2026, tightens the affiliation disclaimer and adds a media rule. The site is an unofficial fan site by Artometrics, Mia and Kyle. It is not affiliated with, endorsed by, or connected to ABC, BBC, the show’s producers, or the network that broadcasts Dancing with the Stars. It does not use the show’s logos, the mirrorball mark, or broadcast footage. Dance clips stay on YouTube. When a performance has a matched link, the page embeds it from youtube-nocookie.com and does not rehost the video.",
          "That same About page publishes a record count that is worth putting next to the sitemap. It lists 35 seasons, 424 celebrities, 59 pro dancers, 3,601 performances, 2,578 songs, and 37 judge names with scores. The sitemap counts, taken the same day, are one higher in several of those categories — 425 celebrity URLs, 60 pro URLs, 3,602 performance URLs, 2,579 song URLs, 38 judge URLs — which is what you would expect if each group has an index page plus one page per record. The About page also says 294 performances include a playable embed, and that 702 portraits are shown from Wikimedia Commons, each with its license and attribution."
        ]
      },
      {
        title: "What you can open",
        gallery: [
          {
            src: "/images/projects/dwts/people.jpg",
            alt: "The people hub.",
            caption: "Live capture of the people section."
          },
          {
            src: "/images/projects/dwts/dances.jpg",
            alt: "The dances section.",
            caption: "Live capture of dances."
          },
          {
            src: "/images/projects/dwts/explore.jpg",
            alt: "The explore hub.",
            caption: "Live capture of explore."
          },
          {
            src: "/images/projects/dwts/season.jpg",
            alt: "A single season page.",
            caption: "Live capture of a season page."
          }
        ],
        paragraphs: [
          "The live navigation is a map of the archive. A seasons menu lists S1 through S35, plus an “all seasons” link and a Season 35 live tracker. A people group points to a people hub, celebrities, pros, judges, and a compare tool. A dances group includes an encyclopedia, all styles, a glossary, rules history, and songs. An explore group includes a hub, leaderboards, stories, quizzes, and search. An archive group includes controversies, costumes, crew, a press timeline, and ratings, plus international coverage, labs, a data-and-sources page, and about.",
          "The published sitemap, read on 18 November 2026, lists 8,210 URLs. The largest piles are 3,602 performance pages, 2,579 song pages, and 1,247 archive pages. Then come 425 celebrity pages, 75 style pages, 64 international pages, 60 pro pages, 38 judge pages, 36 dance pages, and 36 season URLs — the 35 seasons plus a seasons index. There are also 21 stories, 10 quizzes, and 7 lab pages, plus the single pages for home, about, compare, data, explore, leaderboards, people, privacy, search, and terms.",
          "Those counts are a sitemap inventory, not a claim that every performance page was read for this essay. They do show what kind of site this is. It is not a landing page with a few charts. It is a generated archive, large enough that a person can enter by season, by person, by dance, by song, or by a single night's performance.",
          "Season 35 is treated as a living season, not only as a closed chapter. The nav offers a Season 35 live tracker under Labs, and the data page's gap list already warns that a celebrity-name scrape for that season is partially garbled. The tracker and the warning belong together: you can follow the season, and you can see where the archive is still rough.",
          "International coverage, stories, quizzes, leaderboards, and a compare tool are not decorations around the season list. They are how a generated archive lets you leave a single episode and still stay inside sourced rows: a song page, a dance-style page, a pro's career, a controversy in the archive, or a comparison between two people. The compare page captured for this essay is one of those tools, sitting on the same static build as the 3,602 performance pages."
        ]
      },
      {
        title: "How the archive was built, and where it is incomplete",
        gallery: [
          {
            src: "/images/projects/dwts/data.jpg",
            alt: "The Data & Sources page, including downloads and known gaps.",
            caption: "Live capture of dwts.artometrics.com/data, 18 November 2026."
          },
          {
            src: "/images/projects/dwts/compare.jpg",
            alt: "The compare tool.",
            caption: "Live capture of /compare, 18 November 2026."
          }
        ],
        paragraphs: [
          "The Data & Sources page is the honest center of the site. Everything, it says, is regenerated from a cleaned SQLite archive. The downloads offered there — the full dwts.sqlite file, a data-pack tarball, and CSV extracts for performances, scores, contestants, celebrities, professionals, seasons, songs, judges, dance styles, and photos_ok — are described as having no API keys or secrets. That matches the README's rule that the public site is a static build from local data, not a live scrape dressed up as a finished record.",
          "The same page says how the rows were tagged. Contestant rows are marked kaggle or wikipedia. Performance rows come from Howison Lab score tables and from Wikipedia season pages for seasons 32 through 35. Photos are Wikimedia Commons files. The page also keeps a known-gaps list in public view. Among the gaps called out there: a Season 35 celebrity name scrape is partially garbled, and is left as a data-quality note rather than silently corrected from memory; Season 31 Mirrorball winner handling should be verified; vote totals are not in the file; and at least one story uses a judges-only proxy for vote tension because the votes themselves are missing.",
          "That posture is the design. “Data coming soon” is a real state, not a decorative empty module. If a field is not in the archive, the site is supposed to say so, not invent a number from a recap or a fan wiki. This essay follows the same rule. It reports the sitemap counts, the season range, the download list, and the gaps the site already names. It does not fill those gaps.",
          "The README also ties portraits to a separate, careful file, photos_ok.csv, rather than to whatever image a search happens to return. If a portrait is not in that file, it is not supposed to appear with a guessed credit. Combined with “Data coming soon” for empty fields, that is the same honesty rule as Gotha's boxed weak claims, applied to a television archive instead of to lost objects.",
          "The About page's gap list is longer than the data page's short warnings, and it is more specific about language. Where a field is empty, the page says “Not on record.” The archive does not yet include hosts, premiere dates, or finale dates. A single season winner is missing or tagged twice in a few seasons, including season 1. Placement is filled mainly for recent seasons. Some performance results were stored as song titles and are not shown as results. Some score rows are labeled only Judge 1 through Judge 4, so those paddles are not tied to a person. One blank performance row was left out of the site. Portraits that did not match the person's name, or that pointed at an unrelated Commons file, are withheld; 12 of 259 candidate photos were held back. Photographs are hotlinked from Wikimedia Commons, not copied into the project, under licenses recorded in photos_ok.csv, including CC BY, CC BY-SA, CC0, and public domain.",
          "Quizzes, the About page says, are generated from the archive at build time. If a season does not name a single winner, it is not used as a “who won” question. Stories are Markdown files, and the sample stories and their charts are computed from the same SQLite file. Search and indexing stay off while the site is a preview: pages send noindex, nofollow, a sitemap is generated for the day that tag is removed, and Firebase Hosting is supposed to send the same robots header. That last fact already matches the live response headers."
        ]
      },
      {
        title: "How it is built, technically",
        gallery: [
          {
            src: "/images/projects/dwts/home.jpg",
            alt: "The generated site, as it appears at the front door.",
            caption: "Live homepage capture."
          }
        ],
        paragraphs: [
          "The technical loop is small and strict. Node.js 22.12 or newer is required. SQLite is read with Node's built-in module. npm run data regenerates JSON; npm run build runs that data step and then an Astro build into dist/. The dev and preview servers share port 4471. A Python script can rebuild sample report charts; other Markdown stories can be added beside them. None of that changes the rule about gaps.",
          "Because the site is generated from a single archive, the 8,210 URLs do not mean 8,210 handwritten pages, and the 10 commits do not mean the archive is thin. They mean the work is in the data, the portraits file, and the templates that turn a row into a page. When the archive improves — when a garbled Season 35 name is fixed at the source, or when vote totals arrive — the build can be run again. Until then, the public site is supposed to show the seam."
        ]
      }
    ],
    sources: [
      {
        label: "Data with the Stars README",
        date: "README",
        href: "https://github.com/Artometrics/data-with-the-stars"
      },
      {
        label: "Artometrics/data-with-the-stars repository (created 3 Nov 2026, 10 commits on main) and pull requests #1 and #2",
        date: "3–14 Nov 2026",
        href: "https://github.com/Artometrics/data-with-the-stars"
      },
      {
        label: "Live dwts.artometrics.com headers (200, noindex; last-modified 14 Nov 2026, 6:25 PM PT)",
        date: "17 Nov 2026",
        href: "https://dwts.artometrics.com"
      },
      {
        label: "Live sitemap-0.xml, 8,210 URLs, counted 18 Nov 2026",
        date: "18 Nov 2026",
        href: "https://dwts.artometrics.com/sitemap-index.xml"
      },
      {
        label: "Live /data page (downloads, kaggle/wikipedia tags, Howison Lab and Wikipedia sources, known gaps)",
        date: "18 Nov 2026",
        href: "https://dwts.artometrics.com/data"
      },
      {
        label: "Live captures of home, seasons, people, dances, explore, a season page, /data, and /compare",
        date: "17–18 Nov 2026",
        href: "https://dwts.artometrics.com"
      }
    ]
  },
  hoops: {
    slug: "hoops",
    title: "Hoops",
    tagline: "A 3D rapid-fire rebuild of Storm Toss, still a preview, with the older 2D game still up.",
    primaryCta: {
      label: "Play the live 2D Storm Toss",
      href: "https://storm-toss.vercel.app"
    },
    links: [
      {
        label: "Source repo (Storm Toss / Hoops)",
        href: "https://github.com/Artometrics/storm-toss"
      },
      {
        label: "Open pull request #1, the Hoops rebuild",
        href: "https://github.com/Artometrics/storm-toss/pull/1"
      }
    ],
    sections: [
      {
        title: "What it is",
        gallery: [
          {
            src: "/images/projects/hoops/title-390.jpg",
            alt: "The Hoops title screen at a phone width.",
            caption: "Hoops title capture from the local rebuild shots, 17–18 November 2026."
          },
          {
            src: "/images/projects/hoops/desktop.jpg",
            alt: "Hoops on a desktop court.",
            caption: "Desktop capture, 1280×800, from the Hoops shot folder."
          },
          {
            src: "/images/projects/hoops/banner.jpg",
            alt: "The older Storm Toss host, still live.",
            caption: "Live capture of storm-toss.vercel.app, 17 November 2026. That host is still the 2D game."
          }
        ],
        paragraphs: [
          "Hoops is a three-dimensional, rapid-fire basketball toss game, rebuilt from Storm Toss. The older game is still live. A 2D Storm Toss campaign remains at https://storm-toss.vercel.app, which returned 200 with a noindex, nofollow robots tag and a last-modified time of 17 November 2026 at 9:01 PM PT. The Master Project Inventory, written the same day, already called that host a live Vercel site with a full rebuild in progress.",
          "The rebuild has a repository now. Artometrics/storm-toss was created on 17 November 2026 at 9:25 PM PT as a private repo, described as “Storm Toss — nature-themed toss game.” As of later that night it had 1 commit on main and one open pull request, #1, titled “Hoops: 3D rapid-fire rebuild (renamed from Storm Toss).” That pull request is not merged. A draft article in the same tree, Making Hoops, is explicit about what that means: “Preview only, until we say go.”",
          "This page used to say that a standalone Artometrics/hoops repository was not found, and so it refused to invent a design history. That was honest at the time. The source that was missing then is in hand now: the Making Hoops draft, the shot folder beside it, and the open pull request. The essay can go further than it could last pass. It still will not invent a launch date, and it will not treat the preview as if it had already replaced the live 2D game.",
          "The older 2D pages were archived as screenshots before the hoops branch became Hoops-only. That archive folder still shows the campaign the draft is talking about: barrels, clams, flowerpots, shelves, and a hoop, one throw at a time, on a phone-width frame. Those pictures are the reason this essay can describe Storm Toss without pretending the 2D game has already disappeared. The live URL still serves that game. The 3D court lives on the unmerged branch, in the shot folder, and in the draft."
        ]
      },
      {
        title: "What the preview plays like",
        gallery: [
          {
            src: "/images/projects/hoops/gameplay.jpg",
            alt: "Hoops gameplay, with the court in view.",
            caption: "Gameplay capture from the Hoops shot folder."
          },
          {
            src: "/images/projects/hoops/gameplay-390.jpg",
            alt: "Gameplay at a phone width.",
            caption: "Mobile gameplay capture."
          },
          {
            src: "/images/projects/hoops/mobile-make.jpg",
            alt: "A made shot on a phone.",
            caption: "Mobile make capture from the Hoops shot folder."
          }
        ],
        paragraphs: [
          "The Making Hoops draft describes a three.js court, not a 2D shelf of barrels and flowerpots. Aiming had to be inverted once, and then fixed, because the first version felt wrong in the hand. The art is runtime PBR rather than a stack of pre-drawn interiors. That is why the shot folder is full of skies: the same court can be day, night, rain, snow, neon, sunset, storm, space, lava, carnival, or a midway, without each of those being a separately modeled level in the old Storm Toss sense.",
          "A later pass in that draft is called a fever-dream pass. Projectiles change. Skies cross-fade rather than cutting. Rewards land on a rhythm. Rare celebrations are triggered at specific moments: a 42, a 67, a 69, and a 10-streak. Those numbers are from the draft, not from a marketing sheet. Sound is synthesized and can be muted. There is a photo-booth ticket you can share, and a shot of that ticket is in the folder.",
          "The draft also names what was parked. Nature Toss, and a wind-based idea that belonged to the older game, were set aside for this rebuild. The 2D campaign can stay up while the 3D game is a preview. That split is the current state, not a metaphor.",
          "The draft is specific about what was thrown out, and what was kept. Storm Toss was a 2D flick game with twelve campaign scenes: a barrel or a clam or a hoop on a hill, one throw at a time. It was charming, and it was slow. Hoops keeps the sky-court feeling and throws the rest out. You swipe, the ball is gone, and the next one is already in your hand. Up to ten shots can be in the air. The hoop is a real rim, a glass backboard, and a net that swishes and bulges around whatever just went through it.",
          "On the hoops branch, the 2D pages were replaced with a three.js court, a fixed portrait camera looking toward plus Z, physics in one file, and rules in another. Arcade, 60s Rush, Sudden Death, and Zen all share that court. An early preview had the aim inverted — swipe left, the ball went right — because world plus X is screen-left when the camera looks down plus Z. The fix was one sign in the swipe-to-shot function, plus unit and end-to-end tests that project the ball to screen coordinates and assert that a left swipe travels left.",
          "The first art pass kept cartoon silhouettes, ink outlines and simple lobes, and dressed them in inexpensive runtime materials: pebbled leather, glass, metal, a woven net, instanced clouds, a jumbotron on a floating island, birds, a blimp, kites, and a cloud-creature crowd. Nothing is downloaded as a model or a texture pack. Quality drops on its own if the frame rate sags, so an iPhone can stay near 60 frames a second.",
          "Playing it on a phone made the holes obvious, and the draft lists them. The pole and the throwing cloud ate the bottom of the screen. Every few makes felt the same. The mute button could turn sound off and not back on. “Save to Downloads” on iOS was an ordinary browser download, not a souvenir. The fever-dream pass was the answer to that session. Projectiles rotate among basketballs, a pinecone, a cannonball, a gnome, a duck, a disco ball, a coconut, and a melon. Each make can cross-fade the world — underwater, space, lava, carnival, and the original skies — and restyle the hoop and net. The pole and the home cloud are gone; that space becomes fire, waves, a little crowd, or a glowing pad, depending on the sky. A rainbow glass cloud can shatter into a reward: triple shot, double balls, a twenty-second bonus with shadow hoops, or bonus points. A UFO drifts through and is worth hitting.",
          "Celebrations are supposed to stay rare. A short “Combo x3!” or “Hit the UFO!” can float by and get out of the way. The big show — fireworks, a shattering backboard, a fanfare — is reserved for 42, 67, 69, and a ten-make streak. The draft forbids blocking popups, every-third-make confetti, and heavy screen shake. Sound is synthesized and kept quiet, and the mute toggle has to resume the audio context so it can come back on. HUD targets are 44 pixels so Safari actually receives the tap. The game-over card prints a photo-booth ticket with Hoops branding, the score, the mode, the date, and a slice of the sky. On a phone, “Share with friends” uses the platform share sheet so you can save the image to Photos; on a desktop it downloads the PNG."
        ]
      },
      {
        title: "Skies, tickets, and the look of the build",
        gallery: [
          {
            src: "/images/projects/hoops/sky-sunset.jpg",
            alt: "The court under a sunset sky.",
            caption: "Sunset sky capture from the Hoops shot folder, 17–18 November 2026."
          },
          {
            src: "/images/projects/hoops/sky-neon.jpg",
            alt: "The court under a neon sky.",
            caption: "Neon sky capture."
          },
          {
            src: "/images/projects/hoops/sky-storm.jpg",
            alt: "The court in a storm.",
            caption: "Storm sky capture."
          },
          {
            src: "/images/projects/hoops/sky-space.jpg",
            alt: "The court against a space sky.",
            caption: "Space sky capture."
          },
          {
            src: "/images/projects/hoops/ticket.jpg",
            alt: "The photo-booth ticket.",
            caption: "Ticket capture from the Hoops shot folder."
          },
          {
            src: "/images/projects/hoops/scorecard-390.jpg",
            alt: "A scorecard at a phone width.",
            caption: "Mobile scorecard capture."
          }
        ],
        paragraphs: [
          "The shot folder in the storm-toss tree holds desktop, mobile, and sky captures taken on 17 and 18 November 2026, including title, gameplay, level-up, scorecard, and ticket frames, plus named skies such as neon, sunset, storm, space, dawn, day, night, rain, snow, jungle, lava, carnival, candy, pier, pirate, stadium, underwater, volcano, aurora, burst, and midway. This page uses a handful of those frames rather than dumping the whole folder, because the point is to show the court and the ticket, not to reprint a contact sheet.",
          "The 2D game's older archive shots — barrels, clams, flowerpots, shelves — are part of Storm Toss's history, and they are why the inventory still uses the Storm Toss name for the live Vercel host. Hoops is the rename that belongs to the 3D rebuild. Until pull request #1 is merged and someone says go, the public URL in the inventory remains the 2D game, and the 3D court is a preview with pictures and a draft article behind it."
        ]
      },
      {
        title: "What is still open",
        gallery: [
          {
            src: "/images/projects/hoops/title-390.jpg",
            alt: "The preview's title screen.",
            caption: "Title capture from the Hoops shot folder."
          }
        ],
        paragraphs: [
          "The open work is named in the sources we have. The pull request is unmerged. The draft says preview only. Nature Toss and wind are parked. This page will not invent a competitive mode, a season, or a ship week. When the rebuild is the live game, this essay should be updated from the merge, the live URL, and whatever the Making Hoops article becomes after it is no longer a draft.",
          "Three design rules in the draft are meant to stick even as the preview changes. Feel comes first, decoration second: the hoop, the ball, and the score have to stay readable inside a narrow 390-by-844 portrait view, and decorations live around them, not on them. Physics does not care what you threw: a melon and a gnome still use the basketball radius, so tests that aim at the rim stay valid. Celebrate less, move more: motion is in the scenery, the bouncy HUD, the net, the floor, and the next projectile popping in. Sound is pleasant, not loud. Android may buzz once; iOS Safari cannot, and the draft says not to fake that buzz with a camera shake.",
          "The live Storm Toss site is supposed to stay untouched until someone says go. Hoops, in the draft, ships as a Vercel preview on the hoops branch, which is pull request #1, still unmerged. Kyle has more Hoops ideas; the draft says it will grow with them. Nature Toss and a wind version are parked, not forgotten. This page will grow when those documents do."
        ]
      }
    ],
    sources: [
      {
        label: "Making Hoops draft, /workspace/storm-toss/article/making-hoops.md",
        date: "17 Nov 2026"
      },
      {
        label: "Artometrics/storm-toss repository (created 17 Nov 2026, 9:25 PM PT) and open pull request #1, “Hoops: 3D rapid-fire rebuild (renamed from Storm Toss)”",
        date: "17 Nov 2026",
        href: "https://github.com/Artometrics/storm-toss/pull/1"
      },
      {
        label: "Live storm-toss.vercel.app headers (200, noindex; last-modified 17 Nov 2026, 9:01 PM PT)",
        date: "17 Nov 2026",
        href: "https://storm-toss.vercel.app"
      },
      {
        label: "Hoops shot folder in the storm-toss tree (title, gameplay, skies, ticket, scorecard)",
        date: "17–18 Nov 2026"
      },
      {
        label: "Artometrics — Master Project Inventory, Storm Toss row (“full rebuild in progress”)",
        date: "17 Nov 2026",
        href: "https://docs.google.com/spreadsheets/d/1VHNUEPp0_ZbTq4FSWE5mQPBaaRmEuY98fW4UwHWyh7g/edit"
      }
    ]
  },
};

export function getProjectEssay(slug: string): ProjectEssay | undefined {
  return essays[slug];
}

export function allEssaySlugs(): string[] {
  return Object.keys(essays);
}
