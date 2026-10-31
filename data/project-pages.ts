export type SourcedExcerpt = {
  date: string;
  source: string;
  sourceHref?: string;
  text: string;
};

export type ProjectPage = {
  slug: string;
  title: string;
  tagline: string;
  overview: string[];
  builtSoFar: string[];
  status: string;
  primaryCta: { label: string; href: string };
  secondaryLinks: { label: string; href: string }[];
  heroImage: string;
  inlineImage: { src: string; alt: string; caption?: string };
  gallery?: string[];
  excerpts: SourcedExcerpt[];
};

export const CONCEPT_PAGE_SLUGS = [
  "cardinal",
  "artometrics",
  "pantheon",
  "dawn",
  "nightlight",
  "cardinal-quest",
  "knightmare",
  "questroad",
  "style-lab",
  "ksm",
] as const;

export type ConceptPageSlug = (typeof CONCEPT_PAGE_SLUGS)[number];

const pages: Record<ConceptPageSlug, ProjectPage> = {
  cardinal: {
    slug: "cardinal",
    title: "Cardinal",
    tagline:
      "The Stanford corridor, as a documentary book and a public reading room.",
    overview: [
      "Cardinal is a walk through the Stanford corridor told as a documentary. It asks how one stretch of the Peninsula became a controlling position in the modern economy — not as a conspiracy, but as a stack of chokepoints, public subsidies, and people in rooms — with the thesis held until the final episode.",
      "The project lives as both a Quarto book (paired with its companion volume Dawn: An American Odyssey) and a public Astro reading room. The working spine is eight episodes from The Ledger through The Open Era, ending in a dusk walk of street names that were never a secret, only subliminal.",
      "What you can open today is the reading room. Audio is still queued as coming soon. Behind the scenes, source packs, an atlas of people and places, and campus pins keep the evidence honest.",
    ],
    builtSoFar: [
      "Public reading-room site at cardinal-510519.web.app (Astro, ~180 pages, noindex header as of Oct 25 inventory).",
      "Quarto book projects for Cardinal and Dawn; PDFs noted in README as committed at repo root.",
      "Rewrite scene files under site/corpus/rewrite/chapters/.",
      "Drive manuscript Draft v1.1 (~99,500 words, Oct 14) cited as cleanest assembled manuscript in Chapter Breakdown.",
      "Ongoing source evidence work (Ep 3 sheet with dozens of rows; Atlas people/places).",
      "Related: Cardinal Quest walkable campus landmarks game (14 landmarks) and Dawn Atlas embeds Cardinal Quest stops.",
    ],
    status:
      "Active finish priority (Kyle priorities Oct 31). Reading room live; audio still coming soon. Preface/personal frame still a gap in drafts. Multiple episode source packs in progress. Site remains noindex until launch.",
    primaryCta: {
      label: "Open the reading room",
      href: "https://cardinal-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/kylesmcauliffe/cardinal",
      },
      {
        label: "Cardinal Quest (campus map game)",
        href: "https://cardinal-quest-510519.web.app",
      },
    ],
    heroImage: "/images/projects/cardinal/cardinal-hero.webp",
    inlineImage: {
      src: "/images/projects/cardinal/cardinal-inline-sign.webp",
      alt: "Watercolor of a blank street-sign post at morning light on notebook paper.",
    },
    excerpts: [
      {
        date: "Oct 30, 2026",
        source: "Chapter Breakdown for Kyle (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1piLSlPM2ZEmuiqi6_hNx3XW0pVutoHTUMoReGZbR_Zk/edit",
        text: "Eight-episode documentary spine + coda, rebuilt from an older 52-chapter Quarto draft: The Ledger through The Open Era, plus coda The Street Names (dusk walk of campus street names). Tone model: O.J.: Made in America — strict chronology, thesis held back until Episode 8.",
      },
      {
        date: "Oct 25, 2026",
        source: "Websites inventory (Drive doc)",
        sourceHref:
          "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit",
        text: "Reading room ~180 pages with noindex header; Artometrics.com is the indexing exception among portfolio sites.",
      },
      {
        date: "~Oct 21, 2026",
        source: "cardinal repo deploy (PR #12)",
        sourceHref: "https://github.com/kylesmcauliffe/cardinal",
        text: "Reading room deployed from kylesmcauliffe/cardinal; audio players show coming soon (audio not uploaded yet).",
      },
      {
        date: "Oct 14, 2026",
        source: "Drive manuscript Draft v1.1",
        text: "~99,500 words cited as cleanest assembled manuscript in Chapter Breakdown.",
      },
    ],
  },
  artometrics: {
    slug: "artometrics",
    title: "Artometrics",
    tagline:
      "Independent data journalism on culture, place, history, persona, and power.",
    overview: [
      "Artometrics is the public magazine: independent data journalism for the creative industries, across culture, place, history, persona, and power. Reports sync from the Artometrics org and render as an Expo site you can read on the phone or the desk.",
      "The work looks like charts that earn their keep, skins that fit each issue, and citations that keep getting wired in — Oscars, Caesar, imperial, YouTube, Billboard — so a curious reader can follow the evidence.",
      "What you can open today is the live magazine. Behind it sits a shared RN codebase, a content OS, and a factory plan for assets and datasets that feed the next issues.",
    ],
    builtSoFar: [
      "Live public magazine at artometrics.com.",
      "Editorial desks: Culture, Atlas, History, Persona, Power.",
      "Markdown → JSON content pipeline; interactive charts on web.",
      "Multiple themed issue skins and source-cited articles.",
      "Lab log and related report pages on the same host.",
      "Ethics statement at /legal/ethics-statement.",
    ],
    status:
      "Public and indexable (as of Oct 30, 2026 nightly note). Continuous editorial + engineering via Artometrics org. KSM lists it as the public magazine flagship.",
    primaryCta: {
      label: "Open the magazine",
      href: "https://artometrics.com",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/artometrics",
      },
      {
        label: "Ethics statement",
        href: "https://artometrics.com/legal/ethics-statement",
      },
    ],
    heroImage: "/images/projects/artometrics/artometrics-hero.webp",
    inlineImage: {
      src: "/images/projects/artometrics/artometrics-inline-covers.webp",
      alt: "Blank magazine stack with soft chart arcs on watercolor paper.",
    },
    excerpts: [
      {
        date: "Oct 30, 2026",
        source: "Artometrics nightly deploy note",
        text: "Site public and index/follow as of evening PT deploy.",
      },
      {
        date: "2026",
        source: "artometrics README",
        sourceHref: "https://github.com/Artometrics/artometrics/blob/main/README.md",
        text: "Independent data journalism on culture, place, history, persona, and power — built for the creative industries. Long-form data-driven reports and a podcast. Expo app (iOS, Android, web) with shared React Native codebase.",
      },
      {
        date: "Oct 25, 2026",
        source: "Websites inventory (Drive doc)",
        sourceHref:
          "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit",
        text: "Magazine listed among portfolio hosts; indexing posture documented alongside other sites.",
      },
    ],
  },
  pantheon: {
    slug: "pantheon",
    title: "Pantheon",
    tagline: "A historical 3D fighter you can play in the browser.",
    overview: [
      "Pantheon is a historical fighter you can open in the browser: legends of history stepping into an arena with specials, supers, and painted reality marble worlds that rewrite the stage for a moment.",
      "It grew in public prototype form from a three-fighter night into a seventeen-legend roster with Arcade, Versus, and Training — Newton from Meshy, a shared CC0 mannequin for the rest, Kenney props for specials, and stages from a marble hall to a Galápagos shore.",
      "What you can play today is the noindex web build. The Hall of Legends is still getting prettier; the next legends on the locked tiles are waiting for art.",
    ],
    builtSoFar: [
      "Playable web demo at pantheon-game-ksm.web.app (private pre-launch, noindex).",
      "Modes: Arcade (ladder + Archivist boss), Versus, Training, Tutorial/Trials/Moves/Options.",
      "Roster: 17 selectable legends including Darwin, Einstein, Joan, Napoleon, Cleopatra, JFK, Tesla, Curie, Genghis, Sun Tzu, Columbus, Lincoln, Shakespeare, Lovelace, Newton, Tubman, Musashi; Archivist boss; locked tiles for da Vinci, Kahlo, Alexander, Hypatia.",
      "Combat: specials, forward specials, supers with cinematic cut-ins, throws, counters, high/low/overhead hitboxes (v0.7), frame data in Training.",
      "Stages include Hall of Legends, Galápagos Shore, Steppe at Night, Candlelit Study.",
      "v0.9: Quaternius CC0 shared rig (Newton keeps Meshy), Kenney CC0 special props, Hall readability pass.",
      "Mobile: portrait playable, touch pads, phone versus dual-pad.",
    ],
    status:
      "Presentable prototype priority (finish games starting with Pantheon fully). Live noindex. Art and mocap quality still on the roadmap; online play not started.",
    primaryCta: {
      label: "Play Pantheon",
      href: "https://pantheon-game-ksm.web.app",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/pantheon",
      },
    ],
    excerpts: [
      {
        date: "Oct 31, 2026",
        source: "pantheon README + ROADMAP.md",
        sourceHref: "https://github.com/Artometrics/pantheon",
        text: "v0.9: Quaternius CC0 shared rig (Newton keeps Meshy), Kenney CC0 special props, Hall readability pass.",
      },
      {
        date: "Oct 29, 2026",
        source: "Roster & move-set sheet v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/114PQUyJ7KbdTVoS5hnpDarcmWlWdWn0K_prnPrdP5-k/edit",
        text: "Roster and move-set documentation for the seventeen-legend lineup and Archivist boss.",
      },
      {
        date: "Oct 30, 2026",
        source: "Hackathon Reference Pack v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1xCKSSZsy1Q7CDCiuojsSimrW1ayR4TU8EWMmfq1CB3M/edit",
        text: "Reference pack for prototype scope; MIT Pantheon HPI data (Yu et al. 2016 CC BY-SA) used for ranking candidate legends — distinct from the magazine article at artometrics.com/pantheon.",
      },
      {
        date: "Oct 25, 2026",
        source: "Pantheon concept doc (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1-N9K3tYtxAqlX5GcyjFUXbZdMWP0lQ-iOKtnpTAmLg4/edit",
        text: "3D Tekken/Mortal Kombat-style fighter with historical figures, Fate/Zero-style signature supers / reality marbles, Smash-sized roster planned.",
      },
    ],
  },
  dawn: {
    slug: "dawn",
    title: "Dawn",
    tagline:
      "A pixel-art village of agents, plus a studio for the Artometrics tools.",
    overview: [
      "Dawn is a village of agents you can visit on your phone: Trinity, Kali, and Nimbus walk a pixel HQ, talk, remember, and wait for your Approve before anything goes out into the world. Beside the village sit Quests, a Library of tools, and Atlas — you on a real campus map with a little 16-bit walker.",
      "It borrows the heartbeat of AI Town and the memory stream of generative agents, then keeps the human in the loop. The studio gateway is there when you want models for Artometrics work; the village is there when you want company that still asks permission.",
      "What you can open today is the live Dawn host and Atlas. The next chapters are richer ranking, a single server heartbeat, and the mobile habit/quest shell Kyle sketched from layout refs — Lucide icons, no Envato.",
    ],
    builtSoFar: [
      "Live at dawn-510519.web.app (hosting live since ~Oct 21).",
      "HQ tile map (Kenney Tiny Dungeon CC0) in Phaser; agents walk and converse.",
      "Memory stream (importance + reflection without embeddings yet).",
      "Approval gate; group chat; Team card; Quests (short goals with checks).",
      "Atlas: Stanford campus day walk on OpenStreetMap; Cardinal Quest stops (El Palo Alto, Red Barn, Arizona Garden, Lake Lagunita, Hanna House); embed mode ?embed=1.",
      "Night-phone home shell (drawer: Quests, Village, Atlas, Library).",
      "Studio multi-model gateway (Gemini / Grok / others via routing).",
    ],
    status:
      "Active build-out toward a real mobile experience (Kyle priority Oct 31). Private/pre-launch constraints in redesign notes; site historically noindex with other -510519 hosts.",
    primaryCta: {
      label: "Open Dawn",
      href: "https://dawn-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "Open Atlas",
        href: "https://dawn-510519.web.app/atlas",
      },
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/dawn",
      },
    ],
    heroImage: "/images/projects/dawn/dawn-hero.webp",
    inlineImage: {
      src: "/images/projects/dawn/dawn-inline-agents.webp",
      alt: "Three colorful cottage silhouettes for the agent cast at dusk.",
    },
    excerpts: [
      {
        date: "Oct 31, 2026",
        source: "Dawn refs — Mobbin + icons (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1iLCVhGGAkNd0M6x05GXf2EOXPQesdDQeGy9Xm7INGO0/edit",
        text: "Night-phone home shell and Lucide icon direction; Mobbin used as private layout refs only.",
      },
      {
        date: "Oct 30, 2026",
        source: "Dawn References transcript takeaways (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1UvE5xAnwrg8DtX8SLkTwlNu3Tw87yGa6cL6WAWxTwas/edit",
        text: "Three pillars: AI Village simulacra levels, Atlas map with real-world places, Grok Bot–style 8/16-bit agents and group chats.",
      },
      {
        date: "Oct 21, 2026",
        source: "dawn README + ROADMAP.md",
        sourceHref: "https://github.com/Artometrics/dawn",
        text: "Firebase project Dawn on Blaze; public host live at dawn-510519.web.app.",
      },
      {
        date: "2026",
        source: "Factory Plan (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1NQh3aMRhNOJkDRNQguo-OW7tRmld9zb4EzcH2gvzcqI/edit",
        text: "Dawn listed as the real mobile app goal in the Artometrics factory plan.",
      },
    ],
  },
  nightlight: {
    slug: "nightlight",
    title: "Nightlight",
    tagline:
      "Alan Wake–inspired flashlight horror: walk to the radio cabin with only your beam.",
    overview: [
      "Nightlight is a walk to the radio cabin with only your beam for company. Turn the phone sideways, hold focus to tighten the light, and open the door when you find it — nothing finishes just because you stood nearby.",
      "The path remembers gravel and wood underfoot; the stairs can flicker once; pines hide the warm window until you crest the last ridge. It is quiet on purpose.",
      "What you can play today is the live noindex build. Design tables for flashlight, movement, and cabin beats sit in Drive for the next polish pass.",
    ],
    builtSoFar: [
      "Live noindex prototype at nightlight-510519.web.app.",
      "Flashlight range/focus hold; rim glow on lit objects; hold-to-open cabin door; hand-lettered prompts.",
      "Footsteps (gravel/wood) via Web Audio; rain; stair flicker once per run; window reveal with pines.",
      "Character swap / custom .glb; run button.",
      "Spec docs for movement, flashlight tuning, cabin sequence.",
      "Recent polish: handrail, top-step flicker (PRs #2 and #4, Oct 31).",
    ],
    status:
      "Private pre-launch (noindex). Playable. Continues small interactable polish in work sessions.",
    primaryCta: {
      label: "Play Nightlight",
      href: "https://nightlight-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/nightlight",
      },
    ],
    heroImage: "/images/projects/nightlight/nightlight-hero.webp",
    inlineImage: {
      src: "/images/projects/nightlight/nightlight-inline-beam.webp",
      alt: "Soft flashlight beam on a twilight pine path toward a warm-window cabin.",
    },
    excerpts: [
      {
        date: "Oct 31, 2026",
        source: "nightlight repo (PRs #2, #4)",
        sourceHref: "https://github.com/Artometrics/nightlight",
        text: "Handrail polish merged; top-step flicker merged.",
      },
      {
        date: "2026",
        source: "Flashlight & Interact Tuning Table v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1FsuqVbE7mD52ejCdzJOcJpcdRv94jhBdcBSCYkkL3Xg/edit",
        text: "Tuning table for beam range, focus hold, and interact feedback.",
      },
      {
        date: "2026",
        source: "Movement & Controls Spec v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1UogdZTXW2q7kgcd629mFp38hMkaqE9P9ovi7clEqlQI/edit",
        text: "Sideways phone layout and walk controls for the cabin approach.",
      },
      {
        date: "2026",
        source: "Cabin Sequence Level & Screen Notes v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1bV9UWmg4qcpLJf1Z94JMQQ6IUYTUsIV-iIPqXrqOUZw/edit",
        text: "Hold-to-open door beat and window reveal sequence notes.",
      },
    ],
  },
  "cardinal-quest": {
    slug: "cardinal-quest",
    title: "Cardinal Quest",
    tagline:
      "Stanford on a walkable map — unlock landmarks, history, XP, and badges.",
    overview: [
      "Cardinal Quest puts Stanford in your pocket as a walkable map. Allow location, find a landmark, and unlock a history card — fourteen stops from the Quad to the Dish, with XP and badges that stay on your phone.",
      "It is the friendly twin of the Cardinal book: the same corridor, learned with your feet. Dawn's Atlas even borrows the walker's path for a campus day.",
      "What you can play today is the v0 noindex build, including spoken bridge lines built only from cited land facts. Founders' Walk and Ohlone narration options are drafted for the next audio pass.",
    ],
    builtSoFar: [
      "Live at cardinal-quest-510519.web.app.",
      "OpenStreetMap / OpenFreeMap map.",
      "14 landmarks: Main Quad, MemChu, Hoover Tower, Oval, Mausoleum, Angel of Grief, Cantor, Rodin Garden, Green Library, Encina, White Plaza, Frost, Stadium, the Dish.",
      "Tap marker or GPS unlock within 60 m; XP bar; badge grid; progress on device.",
      "Daily three-landmark hunt (README).",
      "Spoken bridge lines on One Piece of Land walk from cited land-thread facts only.",
      "Narration outlines for Founders' Walk and Ohlone history options (Drive).",
    ],
    status:
      "v0 playable, noindex, top games priority. Next: audio tour clips from Cardinal, walking routes, quizzes.",
    primaryCta: {
      label: "Play Cardinal Quest",
      href: "https://cardinal-quest-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/cardinal-quest",
      },
      {
        label: "Cardinal reading room",
        href: "https://cardinal-510519.web.app",
      },
    ],
    heroImage: "/images/projects/cardinal-quest/cardinal-quest-hero.webp",
    inlineImage: {
      src: "/images/projects/cardinal-quest/cardinal-quest-hero.webp",
      alt: "Campus map with soft blank pins and colonnades.",
    },
    excerpts: [
      {
        date: "Oct 31, 2026",
        source: "cardinal-quest PR #2 (bridge lines)",
        sourceHref: "https://github.com/Artometrics/cardinal-quest",
        text: "One Piece of Land walk bridge lines merged; cited land facts only.",
      },
      {
        date: "2026",
        source: "Cardinal Quest concept doc (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1DV2HS5Ly1LBBDa2ls-kYXa58bsyeNQyEiyBpMcKl7MI/edit",
        text: "Disneyland-app idea for Stanford as a game — real map, walk to unlock history.",
      },
      {
        date: "Oct 25, 2026",
        source: "Games Index (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/13tp6mE7K7dbUl4dR1BXaWY178hy1_03pphBxolcvdIc/edit",
        text: "Listed v0 playable and top games priority.",
      },
      {
        date: "2026",
        source: "Founders' Walk Narration Outline (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1vh7IPykcxwu8tGv7hJgvs8_th0WIQsKFqu2eCNqiQcc/edit",
        text: "Narration outline drafted for a founders' campus walk.",
      },
    ],
  },
  knightmare: {
    slug: "knightmare",
    title: "Knightmare",
    tagline:
      "A game about listening with your eyes — Tuning In from silence to clear speech.",
    overview: [
      "Knightmare is a game about listening with your eyes. A boy walks castle to castle in near-silence, holding focus on a speaker's face until their words climb a ladder from nothing to clear speech. The world may be lying; only sight shows the glitch.",
      "The living prototype is a three.js greybox of the prologue's first rooms: a long servants' dormitory, drifting steam as a waypoint, and a cook who turns face-on so you can learn Tuning In. There is no score and no voice track yet — sight is the whole mechanic.",
      "What you can open today is the Origin codebase and the design sketch. Rooms beyond the kitchen are sketched; Origin PRs wait for Kyle. Placeholder dialogue is not canon.",
    ],
    builtSoFar: [
      "Origin prototype greybox of prologue rooms 1–2 (servants' dormitory → kitchen cook tutorial).",
      "three.js r170 vendored; flat colors on #1B1D22; no textures/voice/score.",
      "Tune In ring HUD stages 01–04; nod gesture after cook's second line; walk slowly taught by gesture.",
      "Placeholder lines K-1..K-3; end-of-prototype card after kitchen door.",
      "Design docs: pillars, controls, prologue beat sheet (6 rooms planned), lip-reading line list.",
      "Work sessions: rooms 3–4 courtyard/steward briefs written; Origin PRs #1 and #2 await Kyle merge.",
    ],
    status:
      "Active prototype. Not on a public play host yet. Greybox only; lines not canon.",
    primaryCta: {
      label: "Open the prototype on Origin",
      href: "https://cursor.com/codebase/artometrics/knightmare",
    },
    secondaryLinks: [
      {
        label: "Game Design Sketch v0.1 (Google Doc)",
        href: "https://docs.google.com/document/d/1uR1MuowaDaiNvRKk-q4uB1H5gdX45fAi--F5x6Tv0kk/edit",
      },
    ],
    heroImage: "/images/projects/knightmare/knightmare-hero.webp",
    inlineImage: {
      src: "/images/projects/knightmare/knightmare-hero.webp",
      alt: "Quiet kitchen doorway with steam and an abstract focus ring; soft morning light.",
    },
    excerpts: [
      {
        date: "Oct 29, 2026",
        source: "Game Design Sketch v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1uR1MuowaDaiNvRKk-q4uB1H5gdX45fAi--F5x6Tv0kk/edit",
        text: "Core mechanic Tuning In: hold focus on a face; audio ladder from silence → faint orchestra → muffled → clear speech/subtitles. Tone: grounded techno-feudal; silence is default.",
      },
      {
        date: "2026",
        source: "Prologue Level Beat Sheet v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1Xbb0CUMXH5FRdCguOH1otbiaQA8RSCDalesYD1wT-r0/edit",
        text: "Six-room prologue planned; greybox covers rooms 1–2 through kitchen tutorial.",
      },
      {
        date: "2026",
        source: "knightmare README (Origin)",
        sourceHref: "https://cursor.com/codebase/artometrics/knightmare",
        text: "Tuning In prototype with rooms 1–2; no public Firebase play URL.",
      },
      {
        date: "2026",
        source: "Prologue Lip-Reading Line List v0.1 (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/1ZV5Sieu9SzbkmlD6hXFiEfdi24BTQz68lvCA4FTOMxo/edit",
        text: "Placeholder lip-reading lines K-1..K-3 for greybox only — not canon.",
      },
    ],
  },
  questroad: {
    slug: "questroad",
    title: "Questroad",
    tagline: "A Waze-style MMORPG map game on the real road.",
    overview: [
      "Questroad turns the road itself into an RPG layer: a Waze-shaped map where walking and driving are the adventure.",
      "What you can open today is the v0 noindex play host. The page stays humble about systems still waiting on auth and deploy polish.",
    ],
    builtSoFar: [
      "Live noindex at questroad-510519.web.app.",
      "Private Artometrics/questroad repo.",
      "Listed v0 playable / top priority in Games Index (Oct 25).",
      "Oct 25 inventory: needs deploy workflow; Firestore/auth go-ahead flagged.",
    ],
    status:
      "v0 playable prototype. Keep claims limited to what the live host confirms.",
    primaryCta: {
      label: "Play Questroad",
      href: "https://questroad-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/questroad",
      },
    ],
    heroImage: "/images/projects/questroad/questroad-hero.webp",
    inlineImage: {
      src: "/images/projects/questroad/questroad-hero.webp",
      alt: "Winding road across soft hills with glowing quest dots and a blank compass rose.",
    },
    excerpts: [
      {
        date: "Oct 25, 2026",
        source: "Games Index (Google Doc)",
        sourceHref:
          "https://docs.google.com/document/d/13tp6mE7K7dbUl4dR1BXaWY178hy1_03pphBxolcvdIc/edit",
        text: "Waze-style MMORPG map game; v0 playable; top priority.",
      },
      {
        date: "Oct 25, 2026",
        source: "Websites inventory (Drive doc)",
        sourceHref:
          "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit",
        text: "questroad-510519.web.app listed; deploy workflow and Firestore/auth go-ahead noted.",
      },
    ],
  },
  "style-lab": {
    slug: "style-lab",
    title: "Style Lab",
    tagline:
      "A hosted playground for visual recipes beside magazine skins and KSM themes.",
    overview: [
      "Style Lab is where looks get tried on: a hosted playground for visual recipes that sit beside the magazine skins and the KSM style picker.",
      "What you can open today is the live Style Lab host at stylelab-510519.web.app. Treat the page as an invitation to look and remix, not a claim of a finished product catalog.",
    ],
    builtSoFar: [
      "Hosting live at stylelab-510519.web.app (among nine -510519 sites live ~Oct 21).",
      "Adjacent work: KSM multi-style picker; Artometrics issue skins; design-recipes board interest (Oct 27 profile).",
    ],
    status:
      "Live host; page stays honest — emphasize what visitors can open, not invented features.",
    primaryCta: {
      label: "Open Style Lab",
      href: "https://stylelab-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "KSM style picker (live site)",
        href: "https://ksm-510519.web.app",
      },
    ],
    heroImage: "/images/projects/style-lab/style-lab-hero.webp",
    inlineImage: {
      src: "/images/projects/style-lab/style-lab-hero.webp",
      alt: "Blank colorful swatch cards and soft fabric samples on notebook paper.",
    },
    excerpts: [
      {
        date: "Oct 21, 2026",
        source: "Portfolio hosting check-in",
        text: "Dawn and Style Lab hosting live overnight among early -510519 Firebase sites.",
      },
      {
        date: "Oct 25, 2026",
        source: "Websites inventory (Drive doc)",
        sourceHref:
          "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit",
        text: "Style Lab listed among portfolio Firebase hosts.",
      },
    ],
  },
  ksm: {
    slug: "ksm",
    title: "KSM",
    tagline:
      "Kyle McAuliffe's studio notebook — projects, styles, and a desk of live links.",
    overview: [
      "This site is the studio notebook: warm default styling with switchable themes, a projects board, desk, gallery, about/CV, and a now page tying the live work together.",
      "What you can open today is the noindex Expo web build at ksm-510519.web.app while launch polish continues.",
    ],
    builtSoFar: [
      "Live at ksm-510519.web.app (noindex until launch).",
      "Projects deck, concept-book detail pages, archive downloads.",
      "Style picker themes including Newsprint and Neon night (PR #20).",
      "Content pipeline from src/content to generated JSON and RSS.",
    ],
    status:
      "Active portfolio shell; noindex until launch. Style themes expanding.",
    primaryCta: {
      label: "Open this site",
      href: "https://ksm-510519.web.app",
    },
    secondaryLinks: [
      {
        label: "Source repo (GitHub)",
        href: "https://github.com/Artometrics/ksm",
      },
    ],
    heroImage: "/images/gallery/bw-hero-clean.jpg",
    inlineImage: {
      src: "/images/gallery/bw-hero-clean.jpg",
      alt: "Studio notebook hero treatment on the KSM site.",
    },
    excerpts: [
      {
        date: "2026",
        source: "ksm repo (PR #20)",
        sourceHref: "https://github.com/Artometrics/ksm",
        text: "Newsprint and Neon night styles added to the style picker.",
      },
      {
        date: "Oct 25, 2026",
        source: "Websites inventory (Drive doc)",
        sourceHref:
          "https://docs.google.com/document/d/11hHiPU9JDnVelLzql1X1-DXb6H-STG9kyMYoAyJEz38/edit",
        text: "ksm-510519.web.app listed among portfolio hosts; noindex posture documented.",
      },
    ],
  },
};

export function getConceptPage(slug: string): ProjectPage | undefined {
  if (!CONCEPT_PAGE_SLUGS.includes(slug as ConceptPageSlug)) return undefined;
  return pages[slug as ConceptPageSlug];
}

export function getAllConceptPages(): ProjectPage[] {
  return CONCEPT_PAGE_SLUGS.map((slug) => pages[slug]);
}

export function hasConceptPage(id: string): id is ConceptPageSlug {
  return CONCEPT_PAGE_SLUGS.includes(id as ConceptPageSlug);
}
