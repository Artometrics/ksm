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
  heroImage?: string;
  inlineImage?: { src: string; alt: string; caption?: string };
  gallery?: string[];
  excerpts: SourcedExcerpt[];
};

export const CONCEPT_PAGE_SLUGS = ["cardinal", "artometrics", "pantheon"] as const;

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
    heroImage: "/images/projects/pantheon/pantheon-hero.webp",
    inlineImage: {
      src: "/images/projects/pantheon/pantheon-inline-select.webp",
      alt: "Watercolor of a character-select screen with legend tiles on notebook paper.",
    },
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
