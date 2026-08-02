/**
 * KSM portfolio work — selected pieces for the home structure.
 * Full archive lives at `/gallery`.
 */

export type WorkCategory =
  | "Brand"
  | "Editorial"
  | "Identity"
  | "Campaign"
  | "Systems";

export type WorkItem = {
  id: string;
  title: string;
  category: WorkCategory;
  summary: string;
  image: string;
  href: string;
  year?: string;
  meta?: string;
};

export const workCategories: WorkCategory[] = [
  "Brand",
  "Editorial",
  "Identity",
  "Campaign",
  "Systems",
];

/** Featured cover + grid + list for the home portfolio layout. */
export const featuredWork: WorkItem = {
  id: "bw-eyes",
  title: "Signal in the grain",
  category: "Editorial",
  summary: "Close-crop identity stills for the KSM cover language.",
  image: "/images/gallery/bw-eyes.jpg",
  href: "/gallery",
  year: "2026",
  meta: "Cover study",
};

export const gridWork: WorkItem[] = [
  {
    id: "bw-profile",
    title: "Killing boys of comfort",
    category: "Brand",
    summary: "Hero portrait system — hard light, high collar, zero fluff.",
    image: "/images/gallery/bw-profile.jpg",
    href: "/gallery",
    year: "2026",
  },
  {
    id: "magazine-cyan-orange",
    title: "Cyan / orange cover",
    category: "Campaign",
    summary: "Cold light, scarlet gloves, fruit-as-threat editorial.",
    image: "/images/gallery/magazine-cyan-orange.jpg",
    href: "/gallery",
    year: "2026",
  },
  {
    id: "eyes-through-florals",
    title: "Eyes through florals",
    category: "Identity",
    summary: "Punk collage mark — eyes peering through black botanicals.",
    image: "/images/gallery/eyes-through-florals.jpg",
    href: "/gallery",
    year: "2026",
  },
];

export const listWork: WorkItem[] = [
  {
    id: "double-exposure-lilies",
    title: "Crimson lilies",
    category: "Editorial",
    summary: "Double-exposure face wash in blood red with cream trumpet lilies.",
    image: "/images/gallery/double-exposure-lilies.jpg",
    href: "/gallery",
    year: "2026",
    meta: "Print study",
  },
  {
    id: "red-sun-city",
    title: "Red sun city",
    category: "Systems",
    summary: "Blue night canyon under a saturated red sun — world kit frame.",
    image: "/images/gallery/red-sun-city.jpg",
    href: "/gallery",
    year: "2026",
    meta: "World kit",
  },
  {
    id: "glitch-attention",
    title: "Glitch attention",
    category: "Campaign",
    summary: "Motion-blurred crimson typography smear — face emerging.",
    image: "/images/gallery/glitch-attention.jpg",
    href: "/gallery",
    year: "2026",
    meta: "Motion still",
  },
  {
    id: "foliage-crimson",
    title: "Foliage crimson",
    category: "Brand",
    summary: "Eyes through mossy branches on a flat crimson field.",
    image: "/images/gallery/foliage-crimson.jpg",
    href: "/gallery",
    year: "2026",
    meta: "Mark study",
  },
];

export function getHomeWork() {
  return {
    featured: featuredWork,
    grid: gridWork,
    list: listWork,
  };
}
