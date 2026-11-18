/** Featured collectible tiles for the sidebar and mobile rail. */

export type Collectible = {
  id: string;
  title: string;
  line: string;
  href: string;
  art: string;
  shot?: string;
  credit: string;
  kind: "ticket" | "plate" | "card";
};

export const COLLECTION: Collectible[] = [
  {
    id: "cardinal",
    title: "Cardinal",
    line: "The Stanford corridor, as a book and a reading room.",
    href: "/projects/cardinal",
    art: "/images/collectibles/cardinal-oil.jpg",
    credit: "Original oil-style painting for this site.",
    kind: "plate",
  },
  {
    id: "artometrics",
    title: "Artometrics",
    line: "Independent data journalism on culture, place, and power.",
    href: "/projects/artometrics",
    art: "/images/projects/artometrics/banner.jpg",
    shot: "/images/projects/artometrics/banner.jpg",
    credit: "Live capture of artometrics.com, 17 Nov 2026.",
    kind: "plate",
  },
  {
    id: "pantheon",
    title: "Pantheon",
    line: "A historical 3D fighter you can play in the browser.",
    href: "/projects/pantheon",
    art: "/images/collectibles/pantheon-statues.jpg",
    shot: "/images/projects/pantheon/banner.jpg",
    credit: "Original image of classical statues, generated for this site.",
    kind: "card",
  },
  {
    id: "gotha",
    title: "Gotha",
    line: "Biographies of artifacts, and the real-world actions they connect to.",
    href: "/projects/gotha",
    art: "/images/collectibles/gotha-hall.jpg",
    shot: "/images/projects/gotha/banner.jpg",
    credit: "Original oil-style painting for this site.",
    kind: "ticket",
  },
  {
    id: "books",
    title: "Books",
    line: "Carrie and the Books desk, now on Dawn.",
    href: "https://dawn.artometrics.com/books",
    art: "/images/collectibles/books-still-life.jpg",
    shot: "/images/lab/carrie/banner.jpg",
    credit: "Original oil-style still life for this site.",
    kind: "plate",
  },
  {
    id: "dawn",
    title: "Dawn",
    line: "A studio and a village of tools.",
    href: "/projects/dawn",
    art: "/images/collectibles/dawn-landscape.jpg",
    shot: "/images/projects/dawn/banner.jpg",
    credit: "Original oil-style landscape for this site.",
    kind: "ticket",
  },
];
