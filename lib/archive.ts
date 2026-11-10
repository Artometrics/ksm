import catalogJson from "@/data/archive-catalog.json";

export type ArchiveChild = {
  title: string;
  category: string;
  date: string;
};

export type ArchiveItem = {
  id: string;
  title: string;
  category: string;
  status: string;
  date: string;
  projectId: string;
  projectTitle: string;
  articleId?: string;
  summary: string;
  publicUrl?: string;
  children: ArchiveChild[];
  thumb: string;
  download: string;
  downloadName: string;
};

export type ArchiveProject = {
  id: string;
  title: string;
  summary: string;
  siteProjectId?: string;
  itemIds: string[];
  thumb: string;
  download: string;
  downloadName: string;
  itemCount: number;
};

export type ArchiveMeta = {
  generatedFrom: string;
  sourceItemCount: number;
  excludedFlagged: number;
  excludedExtra: number;
  included: number;
  itemPages: number;
  projectPages: number;
  rolledFiles: number;
  skippedCategoryFolders: number;
  categoryOrder: string[];
  rule: string;
};

type Catalog = {
  meta: ArchiveMeta;
  projects: ArchiveProject[];
  items: ArchiveItem[];
};

const catalog = catalogJson as Catalog;
const projectById = new Map(catalog.projects.map((project) => [project.id, project]));
const itemById = new Map(catalog.items.map((item) => [item.id, item]));

export function getArchiveMeta() {
  return catalog.meta;
}

export function getArchiveProjects() {
  return catalog.projects;
}

export function getArchiveProject(id: string) {
  return projectById.get(id);
}

export function getArchiveItems() {
  return catalog.items;
}

export function getArchiveItem(id: string) {
  return itemById.get(id);
}

export function getItemsForProject(projectId: string) {
  return catalog.items.filter((item) => item.projectId === projectId);
}

export function archivePathForSiteProject(siteId: string) {
  const match = catalog.projects.find((project) => project.siteProjectId === siteId);
  return match ? `/archive/projects/${match.id}` : null;
}

export function categoryLabel(category: string) {
  if (!category) return "Other";
  if (category === category.toLowerCase()) {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
  return category;
}

export function formatArchiveDate(iso: string) {
  if (!iso) return "Date not recorded";
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
