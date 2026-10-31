import { getProjectById, projects, type ProjectRecord } from "@/lib/projects";

export type NowPlaying = {
  id: string;
  title: string;
  line: string;
  cover: string;
  href: string;
};

const STORAGE_KEY = "ksm-now-playing";

export function launchLabelFor(tags: string[]) {
  if (tags.includes("Apps")) return "Open";
  if (tags.includes("Games")) return "Play";
  if (tags.includes("Writing")) return "Read";
  return "Open";
}

export function getFeaturedProject(): ProjectRecord {
  return getProjectById("cardinal") ?? getProjectById("artometrics") ?? projects[0];
}

export function projectToNowPlaying(project: ProjectRecord): NowPlaying {
  return {
    id: project.id,
    title: project.title,
    line: project.line,
    cover: project.cover ?? project.thumbnail,
    href: project.href,
  };
}

export function readNowPlaying(): NowPlaying | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as NowPlaying;
  } catch {
    return null;
  }
}

export function writeNowPlaying(entry: NowPlaying) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    window.dispatchEvent(new Event("ksm-now-playing"));
  } catch {
    /* ignore quota */
  }
}

export function rememberProjectLaunch(project: ProjectRecord) {
  writeNowPlaying(projectToNowPlaying(project));
}

export function getDefaultNowPlaying(): NowPlaying {
  return projectToNowPlaying(getFeaturedProject());
}
