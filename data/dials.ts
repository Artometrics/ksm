/** Fast-dial and menu-overlay destinations. */

export type Dial = {
  id: string;
  title: string;
  href: string;
  art?: string;
  line?: string;
  group: "site" | "project";
};

export const SITE_DIALS: Dial[] = [
  { id: "projects", title: "Projects", href: "/projects", group: "site", line: "The work", art: "/images/menu/projects.jpg" },
  { id: "journal", title: "Journal", href: "/blog", group: "site", line: "Notes", art: "/images/menu/journal.jpg" },
  { id: "lab", title: "Lab", href: "/lab", group: "site", line: "Lab reports", art: "/images/menu/lab.jpg" },
  { id: "archive", title: "Archive", href: "/archive", group: "site", line: "The files", art: "/images/menu/archive.jpg" },
  { id: "about", title: "About", href: "/about", group: "site", line: "Kyle", art: "/images/menu/about.jpg" },
  { id: "gallery", title: "Art", href: "/gallery", group: "site", line: "Pictures", art: "/images/menu/art.jpg" },
];

export const PROJECT_DIALS: Dial[] = [
  {
    id: "cardinal",
    title: "Cardinal",
    href: "/projects/cardinal",
    art: "/images/collectibles/cardinal-oil.jpg",
    group: "project",
  },
  {
    id: "artometrics",
    title: "Artometrics",
    href: "/projects/artometrics",
    art: "/images/collectibles/artometrics-tile.jpg",
    group: "project",
  },
  {
    id: "pantheon",
    title: "Pantheon",
    href: "/projects/pantheon",
    art: "/images/projects/pantheon/home.jpg",
    group: "project",
  },
  {
    id: "gotha",
    title: "Gotha",
    href: "/projects/gotha",
    art: "/images/collectibles/gotha-hall.jpg",
    group: "project",
  },
  {
    id: "books",
    title: "Books",
    href: "/projects/books",
    art: "/images/collectibles/books-still-life.jpg",
    group: "project",
  },
  {
    id: "dawn",
    title: "Dawn",
    href: "/projects/dawn",
    art: "/images/collectibles/dawn-landscape.jpg",
    group: "project",
  },
  {
    id: "hoops",
    title: "Hoops",
    href: "/projects/hoops",
    art: "/images/projects/hoops/banner.jpg",
    group: "project",
  },
  {
    id: "dwts",
    title: "DWTS",
    href: "/projects/dwts",
    art: "/images/projects/dwts/home.jpg",
    group: "project",
    line: "Data with the Stars",
  },
];

export const ALL_DIALS: Dial[] = [...SITE_DIALS, ...PROJECT_DIALS];
