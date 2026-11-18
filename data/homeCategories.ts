/** Home dashboard browse categories. */

export type HomeCategory = {
  id: string;
  label: string;
  href: string;
  /** Live-site screenshot, when we have one. */
  cover?: string;
  icon: "games" | "books" | "magazine" | "apps" | "art" | "archive";
  tone: "games" | "books" | "magazine" | "apps" | "art" | "archive";
};

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    id: "games",
    label: "Games",
    href: "/projects",
    cover: "/images/projects/hoops/banner.jpg",
    icon: "games",
    tone: "games",
  },
  {
    id: "books",
    label: "Writing / Books",
    href: "/projects/cardinal",
    cover: "/images/collectibles/books-still-life.jpg",
    icon: "books",
    tone: "books",
  },
  {
    id: "magazine",
    label: "Research",
    href: "/projects/artometrics",
    cover: "/images/projects/artometrics/banner.jpg",
    icon: "magazine",
    tone: "magazine",
  },
  {
    id: "apps",
    label: "Tools",
    href: "/projects/dawn",
    cover: "/images/projects/dawn/banner.jpg",
    icon: "apps",
    tone: "apps",
  },
  {
    id: "art",
    label: "Art",
    href: "/gallery",
    icon: "art",
    tone: "art",
  },
  {
    id: "archive",
    label: "Archive",
    href: "/archive",
    icon: "archive",
    tone: "archive",
  },
];
