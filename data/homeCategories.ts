/** Home dashboard browse categories (Spotify-style grid). */

export type HomeCategory = {
  id: string;
  label: string;
  href: string;
  cover: string;
  /** Maps to `.ksm-home-cat--{tone}` theme-safe tints */
  tone: "games" | "books" | "magazine" | "apps" | "art" | "archive";
};

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    id: "games",
    label: "Games",
    href: "/projects",
    cover: "/images/marks/games.svg",
    tone: "games",
  },
  {
    id: "books",
    label: "Books",
    href: "/projects/cardinal",
    cover: "/images/pixel/poster-bird.png",
    tone: "books",
  },
  {
    id: "magazine",
    label: "Magazine",
    href: "/projects/artometrics",
    cover: "/images/gallery/magazine-crimson.jpg",
    tone: "magazine",
  },
  {
    id: "apps",
    label: "Apps",
    href: "/projects/dawn",
    cover: "/images/pixel/poster-sunset.png",
    tone: "apps",
  },
  {
    id: "art",
    label: "Music / Art",
    href: "/gallery",
    cover: "/images/gallery/double-exposure-lilies.jpg",
    tone: "art",
  },
  {
    id: "archive",
    label: "Archive",
    href: "/archive",
    cover: "/images/marks/writing.svg",
    tone: "archive",
  },
];
