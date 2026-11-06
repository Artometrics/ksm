import projectsJson from "@/data/projects.json";

export type ProjectRecord = (typeof projectsJson)[number] & {
  cover?: string;
};

/**
 * Raster files that exist under public/images.
 * The mark SVGs are icons, not screenshots, so they are never used as covers.
 * The games report has no project art on file.
 * KSM uses this site's pixel sunset poster. The gallery portraits are people
 * and stay off the launcher.
 */
const COVER_BY_ID: Record<string, string> = {
  artometrics: "/images/projects/artometrics/artometrics-hero.webp",
  cardinal: "/images/projects/cardinal/cardinal-hero.webp",
  "cardinal-quest": "/images/projects/cardinal-quest/cardinal-quest-hero.webp",
  dawn: "/images/projects/dawn/dawn-hero.webp",
  knightmare: "/images/projects/knightmare/knightmare-hero.webp",
  "lab-log": "/images/projects/artometrics/artometrics-inline-covers.webp",
  nightlight: "/images/projects/nightlight/nightlight-hero.webp",
  pantheon: "/images/projects/pantheon/pantheon-hero.webp",
  questroad: "/images/projects/questroad/questroad-hero.webp",
  "style-lab": "/images/projects/style-lab/style-lab-hero.webp",
  ksm: "/images/pixel/poster-sunset.png",
};

/**
 * Direct hosts that answered HTTP 200.
 * Knightmare's Origin URL (cursor.com/codebase/...) returns 403 and is omitted.
 */
const PUBLIC_LAUNCH_URLS = new Set([
  "https://artometrics.com",
  "https://artometrics.com/games",
  "https://artometrics.com/lab-log",
  "https://cardinal-510519.web.app",
  "https://pantheon-game-ksm.web.app",
  "https://dawn-510519.web.app",
  "https://nightlight-510519.web.app",
  "https://cardinal-quest-510519.web.app",
  "https://questroad-510519.web.app",
  "https://stylelab-510519.web.app",
  "https://ksm-510519.web.app",
]);

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
