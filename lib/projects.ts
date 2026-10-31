import projectsJson from "@/data/projects.json";

export type ProjectRecord = (typeof projectsJson)[number] & {
  cover?: string;
};

/** Box-art paths that already exist under public/ — keyed by project id. */
const COVER_BY_ID: Record<string, string> = {
  artometrics: "/images/projects/artometrics/artometrics-hero.webp",
  cardinal: "/images/projects/cardinal/cardinal-hero.webp",
  dawn: "/images/projects/dawn-hero.webp",
  "lab-log": "/images/projects/artometrics/artometrics-inline-covers.webp",
  pantheon: "/images/projects/pantheon/pantheon-hero.webp",
  games: "/images/marks/games.svg",
};

export const projects: ProjectRecord[] = projectsJson.map((item) => ({
  ...item,
  cover: COVER_BY_ID[item.id] ?? item.thumbnail,
}));

export function getLaunchProjects() {
  return projects.filter((item) => item.kind === "project");
}

export function getProjectById(id: string) {
  return projects.find((item) => item.id === id);
}

export function projectDetailPath(id: string) {
  return `/projects/${id}`;
}
