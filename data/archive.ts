/**
 * Archive / library index. Only list files and URLs that exist in this repo or
 * are already published on linked projects — do not invent downloads.
 */

import projects from "@/data/projects.json";

export type ArchiveKind =
  | "note"
  | "file"
  | "version"
  | "maintenance"
  | "asset";

export type ArchiveAsset = {
  id: string;
  title: string;
  /** Site-root path or absolute URL */
  href: string;
};

export type ArchiveItem = {
  id: string;
  title: string;
  line: string;
  kind: ArchiveKind;
  tags: string[];
  addedAt: string;
  projectId?: string;
  /** External note or page */
  href?: string;
  /** Downloadable assets on this host */
  assets?: ArchiveAsset[];
};

export type ProjectArchiveBundle = {
  projectId: string;
  title: string;
  slug: string;
  line: string;
  assets: ArchiveAsset[];
};

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "artometrics-source",
    title: "Artometrics README",
    line: "Public source note for the magazine repo.",
    kind: "note",
    tags: ["Research", "Writing"],
    addedAt: "2026-10-23",
    projectId: "artometrics",
    href: "https://github.com/Artometrics/artometrics/blob/main/README.md",
  },
  {
    id: "artometrics-mark",
    title: "Research mark (SVG)",
    line: "Thumbnail mark used on the project deck.",
    kind: "asset",
    tags: ["Research", "Asset"],
    addedAt: "2026-10-01",
    projectId: "artometrics",
    assets: [{ id: "research-svg", title: "research.svg", href: "/images/marks/research.svg" }],
  },
  {
    id: "cardinal-source",
    title: "Cardinal README",
    line: "Book and reading-room repository.",
    kind: "note",
    tags: ["Writing"],
    addedAt: "2026-10-30",
    projectId: "cardinal",
    href: "https://github.com/kylesmcauliffe/cardinal/blob/main/README.md",
  },
  {
    id: "cardinal-pixel-pack",
    title: "Cardinal pixel stills",
    line: "Poster and loop used in the pixel deck.",
    kind: "file",
    tags: ["Writing", "Asset"],
    addedAt: "2026-10-15",
    projectId: "cardinal",
    assets: [
      { id: "poster-bird", title: "poster-bird.png", href: "/images/pixel/poster-bird.png" },
      { id: "bird-loop", title: "bird.webp", href: "/images/pixel/bird.webp" },
    ],
  },
  {
    id: "dawn-source",
    title: "Dawn README",
    line: "Village and studio repository.",
    kind: "note",
    tags: ["Apps"],
    addedAt: "2026-10-30",
    projectId: "dawn",
    href: "https://github.com/Artometrics/dawn/blob/main/README.md",
  },
  {
    id: "dawn-apps-mark",
    title: "Apps mark (SVG)",
    line: "Deck icon for Dawn.",
    kind: "asset",
    tags: ["Apps", "Asset"],
    addedAt: "2026-10-01",
    projectId: "dawn",
    assets: [{ id: "apps-svg", title: "apps.svg", href: "/images/marks/apps.svg" }],
  },
  {
    id: "site-search-index",
    title: "Desk search index",
    line: "JSON index backing ⌘K search on this site.",
    kind: "maintenance",
    tags: ["Maintenance", "KSM"],
    addedAt: "2026-10-01",
    assets: [{ id: "search-json", title: "search-index.json", href: "/search-index.json" }],
  },
  {
    id: "lab-log-source",
    title: "Lab log route note",
    line: "Pointer to the Artometrics lab-log page source.",
    kind: "note",
    tags: ["Research"],
    addedAt: "2026-10-23",
    projectId: "lab-log",
    href: "https://github.com/Artometrics/artometrics/blob/ce457b2/app/(site)/lab-log.tsx",
  },
];

export function getProjectArchives(): ProjectArchiveBundle[] {
  return projects
    .filter((p) => p.kind === "project")
    .map((project) => {
      const assets = ARCHIVE_ITEMS.filter((item) => item.projectId === project.id)
        .flatMap((item) => item.assets ?? [])
        .filter(Boolean);
      return {
        projectId: project.id,
        title: project.title,
        slug: project.id,
        line: project.line,
        assets,
      };
    });
}

export function getRecentArchiveItems(limit = 4) {
  return [...ARCHIVE_ITEMS]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .slice(0, limit);
}

export const ARCHIVE_KIND_FILTERS = [
  { id: "all", label: "All" },
  { id: "note", label: "Notes" },
  { id: "file", label: "Files" },
  { id: "asset", label: "Assets" },
  { id: "maintenance", label: "Maintenance" },
] as const;
