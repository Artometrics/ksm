import type { Slide } from "@/components/ImageCarousel";

export function labCoverSrc(slug: string): string {
  return `/images/lab-covers/${slug}.jpg`;
}

const SHOTS: Record<string, Slide[]> = {
  aftercare: [
    {
      src: "/images/lab/aftercare/banner.jpg",
      alt: "Aftercare app still",
    },
  ],
  carrie: [
    {
      src: "/images/lab/carrie/banner.jpg",
      alt: "Carrie still",
    },
  ],
  fernbound: [
    {
      src: "/images/lab/fernbound/title-screen-1280.jpg",
      alt: "Fernbound title screen",
    },
    {
      src: "/images/lab/fernbound/dawn-landing-1280.jpg",
      alt: "Dawn landing on Fernbound",
    },
    {
      src: "/images/lab/fernbound/dawn-play-1280.jpg",
      alt: "Dawn play screen",
    },
    {
      src: "/images/lab/fernbound/games-tab-1280.jpg",
      alt: "Fernbound games tab",
    },
  ],
};

export function labShots(slug: string): Slide[] {
  return SHOTS[slug] ?? [];
}
