/** Personal life photos for the About page (trial).
 * Review log: Google Sheet "KSM site photo log" + ksm-photos/log.csv
 * EXIF/GPS stripped; webp ≤1600px. OneDrive originals untouched.
 */
export type LifePhoto = {
  slug: string;
  src: string;
  alt: string;
  aspect: `${number}/${number}` | string;
  section: "about-portrait" | "about-strip" | "life-gallery";
  caption?: string;
  taken?: string;
};

export const LIFE_PHOTOS: LifePhoto[] = [
  {
    slug: "kyle-portrait-smile",
    src: "/images/life/kyle-portrait-smile.webp",
    alt: "Portrait of Kyle McAuliffe in a navy blazer and patterned tie",
    aspect: "3/4",
    section: "about-portrait",
    caption: "Studio · June 2026",
    taken: "2026-06-16T23:44:29Z",
  },
  {
    slug: "kyle-portrait-center",
    src: "/images/life/kyle-portrait-center.webp",
    alt: "Portrait of Kyle McAuliffe, centered studio headshot",
    aspect: "3/4",
    section: "about-strip",
    caption: "Studio · June 2026",
    taken: "2026-06-16T23:42:49Z",
  },
  {
    slug: "kyle-portrait-crossed",
    src: "/images/life/kyle-portrait-crossed.webp",
    alt: "Portrait of Kyle McAuliffe with arms crossed",
    aspect: "3/4",
    section: "about-strip",
    caption: "Studio · June 2026",
    taken: "2026-06-16T23:45:38Z",
  },
  {
    slug: "kyle-portrait-front",
    src: "/images/life/kyle-portrait-front.webp",
    alt: "Portrait of Kyle McAuliffe, front-facing studio shot",
    aspect: "3/4",
    section: "about-strip",
    caption: "Studio · June 2026",
    taken: "2026-06-16T23:47:37Z",
  },
  {
    slug: "family-fridge-collage",
    src: "/images/life/family-fridge-collage.webp",
    alt: "Family photo collage on a refrigerator door",
    aspect: "3/4",
    section: "life-gallery",
    caption: "Family wall · Aug 2025",
    taken: "2025-08-02T12:54:30Z",
  },
  {
    slug: "life-hills-golden",
    src: "/images/life/life-hills-golden.webp",
    alt: "Golden hillside overlooking a forested valley",
    aspect: "16/9",
    section: "life-gallery",
    caption: "Hills · Sep 2025",
    taken: "2025-09-02T16:05:00Z",
  },
  {
    slug: "life-palm-sky",
    src: "/images/life/life-palm-sky.webp",
    alt: "Palm fronds against a blue sky",
    aspect: "3/4",
    section: "life-gallery",
    caption: "Palm · Aug 2025",
    taken: "2025-08-01T09:03:13Z",
  },
];

export const ABOUT_PORTRAIT = LIFE_PHOTOS.find((p) => p.section === "about-portrait")!;
export const ABOUT_STRIP = LIFE_PHOTOS.filter((p) => p.section === "about-strip");
export const LIFE_GALLERY = LIFE_PHOTOS.filter((p) => p.section === "life-gallery");

function parseAspect(aspect: string): number {
  if (!aspect.includes("/")) return 1;
  const [w, h] = aspect.split("/").map(Number);
  return h ? w / h : 1;
}

export { parseAspect as lifePhotoAspectRatio };
