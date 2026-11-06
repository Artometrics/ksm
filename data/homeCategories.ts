/** Home dashboard browse categories. */

export type HomeCategory = {
  id: string;
  label: string;
  href: string;
  /** Omitted when the shelf has no picture of its own. */
  cover?: string;
  /** Maps to `.ksm-home-cat--{tone}` theme-safe tints */
  tone: "games" | "books" | "magazine" | "apps" | "art" | "archive";
};

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    id: "games",
    label: "Games",
    href: "/projects",
    cover: "/images/projects/pantheon/pantheon-hero.webp",
    tone: "games",
  },
  {
    id: "books",
    label: "Books",
    href: "/projects/cardinal",
    cover: "/images/projects/cardinal/cardinal-hero.webp",
    tone: "books",
  },
  {
    id: "magazine",
    label: "Magazine",
    href: "/projects/artometrics",
    cover: "/images/projects/artometrics/artometrics-hero.webp",
    tone: "magazine",
  },
  {
    id: "apps",
    label: "Apps",
    href: "/projects/dawn",
    cover: "/images/projects/dawn/dawn-hero.webp",
    tone: "apps",
  },
  {
    id: "art",
    label: "Music / Art",
    href: "/gallery",
    tone: "art",
  },
  {
    id: "archive",
    label: "Archive",
    href: "/archive",
    tone: "archive",
  },
];
