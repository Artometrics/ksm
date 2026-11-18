import projectsJson from "@/data/projects.json";

export type ProjectRecord = (typeof projectsJson)[number] & {
  cover?: string;
};

/**
 * Raster files that exist under public/images.
 * Covers are live-site screenshots (or typographic banners when a host is gone).
 * The mark SVGs are icons, not screenshots, so they are never used as covers.
 */
const COVER_BY_ID: Record<string, string> = {
  artometrics: "/images/projects/artometrics/banner.jpg",
  cardinal: "/images/projects/cardinal/banner.jpg",
  "cardinal-quest": "/images/projects/cardinal-quest/banner.jpg",
  dawn: "/images/projects/dawn/banner.jpg",
  knightmare: "/images/projects/knightmare/banner.jpg",
  "lab-log": "/images/projects/lab-log/banner.jpg",
  nightlight: "/images/projects/nightlight/banner.jpg",
  pantheon: "/images/projects/pantheon/banner.jpg",
  questroad: "/images/projects/questroad/banner.jpg",
  "style-lab": "/images/projects/style-lab/banner.jpg",
  ksm: "/images/projects/ksm/banner.jpg",
  games: "/images/projects/games/banner.jpg",
  gotha: "/images/projects/gotha/banner.jpg",
  academy: "/images/projects/academy/banner.jpg",
  glossary: "/images/projects/glossary/banner.jpg",
  dwts: "/images/projects/dwts/banner.jpg",
  books: "/images/collectibles/books-still-life.jpg",
  ballpark: "/images/projects/ballpark/banner.jpg",
  osv: "/images/projects/osv/banner.jpg",
  fernbound: "/images/projects/fernbound/banner.jpg",
  hoops: "/images/projects/hoops/banner.jpg",
  "hum-to-suno": "/images/projects/hum-to-suno/banner.jpg",
  twilda: "/images/projects/twilda/banner.jpg",
  "intern-to-impact": "/images/projects/intern-to-impact/banner.jpg",
};

/**
 * Direct hosts that answered HTTP 200 (re-checked Nov 17, 2026 PT).
 * Retired / 404 hosts are listed in RETIRED_PUBLIC_HOSTS and never get a launch button.
 * Cardinal (401, password-locked reading room) stays listed by design.
 * Knightmare's deleted Origin URL and private archive are omitted (no public host).
 */
const PUBLIC_LAUNCH_URLS = new Set([
  "https://artometrics.com",
  "https://artometrics.com/games",
  "https://artometrics.com/lab-log",
  "https://cardinal-510519.web.app",
  "https://pantheon-game-ksm.web.app",
  "https://dawn-510519.web.app",
  "https://gotha.artometrics.com",
  "https://academy.artometrics.com",
  "https://glossary.artometrics.com",
  "https://dwts-510519.web.app",
  "https://dawn.artometrics.com/books",
  "https://ballpark-510519.web.app",
  "https://osv-510519.web.app",
  "https://storm-toss.vercel.app",
  "https://hum-to-suno.vercel.app",
  "https://twilda.com",
  "https://interntoimpact-510519.web.app",
  "https://ksm-510519.web.app",
]);

/** Hosts that no longer exist (404/403) or were deleted. Used to hide catalog links. */
const RETIRED_PUBLIC_HOSTS = new Set([
  "nightlight-510519.web.app",
  "cardinal-quest-510519.web.app",
  "questroad-510519.web.app",
  "questroad-510519-fcdbd.web.app",
  "stylelab-510519.web.app",
  "knightmare-ksm.web.app",
]);

export function isRetiredPublicUrl(href: string | null | undefined): boolean {
  if (!href) return false;
  try {
    const host = new URL(href).host.replace(/^www\./, "");
    if (RETIRED_PUBLIC_HOSTS.has(host)) return true;
    // Deleted Origin project paths only
    if (host === "cursor.com" && href.includes("/codebase/artometrics/knightmare")) return true;
  } catch {
    return false;
  }
  return false;
}

export function liveCatalogUrl(href: string | null | undefined): string | null {
  if (!href || isRetiredPublicUrl(href)) return null;
  return href;
}

export function isPublicLaunchUrl(href: string | null | undefined): href is string {
  if (!href) return false;
  return PUBLIC_LAUNCH_URLS.has(href.replace(/\/$/, ""));
}

export function publicLaunchHref(project: { href?: string | null }): string | null {
  if (!isPublicLaunchUrl(project.href)) return null;
  return project.href.replace(/\/$/, "");
}

/** True when a path is a real picture, not a mark icon or the shared placeholder. */
export function isDisplayArt(src: string | null | undefined): src is string {
  if (!src) return false;
  if (src.includes("/images/marks/")) return false;
  if (src.endsWith("/placeholder.png")) return false;
  return true;
}

export const projects: ProjectRecord[] = projectsJson.map((item) => {
  const cover = COVER_BY_ID[item.id];
  return cover ? { ...item, cover } : { ...item };
});

export function getLaunchProjects() {
  return projects.filter((item) => item.kind === "project");
}

/** Games and apps that have a checked public URL. */
export function isOnPlayShelf(project: ProjectRecord) {
  const shelf = project.tags.includes("Games") || project.tags.includes("Apps");
  return project.kind === "project" && shelf && publicLaunchHref(project) != null;
}

export function getProjectById(id: string) {
  return projects.find((item) => item.id === id);
}

export function projectDetailPath(id: string) {
  return `/projects/${id}`;
}
