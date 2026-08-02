export type Poster = {
  id: string;
  title: string;
  subject: string;
  dek: string;
  era: string;
  image: string;
};

export const posters: Poster[] = [
  {
    id: "cleopatra",
    title: "CLEOPATRA VII",
    subject: "Cleopatra",
    dek: "The last pharaoh — politics as performance, beauty as statecraft.",
    era: "69–30 BCE",
    image: "/images/posters/cleopatra.jpg",
  },
  {
    id: "caesar",
    title: "JULIUS CAESAR",
    subject: "Julius Caesar",
    dek: "Crossing the Rubicon made the republic a stage for one man.",
    era: "100–44 BCE",
    image: "/images/posters/caesar.jpg",
  },
  {
    id: "napoleon",
    title: "NAPOLEON",
    subject: "Napoleon Bonaparte",
    dek: "Empire as algorithm — speed, myth, and the bicorne silhouette.",
    era: "1769–1821",
    image: "/images/posters/napoleon.jpg",
  },
  {
    id: "joan-of-arc",
    title: "JOAN OF ARC",
    subject: "Joan of Arc",
    dek: "Faith as command. Armor as manifesto.",
    era: "1412–1431",
    image: "/images/posters/joan-of-arc.jpg",
  },
  {
    id: "alexander",
    title: "ALEXANDER",
    subject: "Alexander the Great",
    dek: "A map redrawn before twenty-five. Ambition without a border.",
    era: "356–323 BCE",
    image: "/images/posters/alexander.jpg",
  },
  {
    id: "nefertiti",
    title: "NEFERTITI",
    subject: "Nefertiti",
    dek: "The face that became a logo for an entire civilization.",
    era: "c. 1370–1330 BCE",
    image: "/images/posters/nefertiti.jpg",
  },
];

export function getPosters(): Poster[] {
  return posters;
}

export function getPoster(id: string | undefined): Poster | undefined {
  if (!id) return undefined;
  return posters.find((p) => p.id === id);
}
