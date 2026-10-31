import projectsJson from "@/data/projects.json";

export type ProjectRecord = (typeof projectsJson)[number] & {
  cover?: string;
};

/** Box-art paths that already exist under public/ — keyed by project id. */
const COVER_BY_ID: Record<string, string> = {
  artometrics: "/images/gallery/magazine-crimson.jpg",
  cardinal: "/images/pixel/poster-bird.png",
  dawn: "/images/pixel/poster-sunset.png",
  "lab-log": "/images/gallery/bw-hero-clean.jpg",
  pantheon: "/images/gallery/red-sun-city.jpg",
  games: "/images/gallery/glitch-attention.jpg",
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
