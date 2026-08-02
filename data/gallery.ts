/**
 * KSM Soul work gallery — generations from moodboard refs.
 * Browse at `/gallery`.
 */

export type GalleryItem = {
  id: string;
  title: string;
  mood: string;
  src: string;
  aspect: "3/4" | "1/1";
  jobId: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "magazine-cyan-orange",
    title: "Cyan / Orange Cover",
    mood: "Cold cyan studio light, scarlet gloves, knife + orange — Dazed-cover energy",
    src: "/images/gallery/magazine-cyan-orange.jpg",
    aspect: "3/4",
    jobId: "d08bdee3-6922-4626-b96e-d3d36673cda6",
  },
  {
    id: "double-exposure-lilies",
    title: "Crimson Lilies",
    mood: "Double-exposure face wash in blood red with cream trumpet lilies",
    src: "/images/gallery/double-exposure-lilies.jpg",
    aspect: "3/4",
    jobId: "684cbacc-3b94-485e-b8a4-3c7bcb086fb6",
  },
  {
    id: "eyes-through-florals",
    title: "Eyes Through Florals",
    mood: "Punk collage — eyes peering through black botanical silhouette",
    src: "/images/gallery/eyes-through-florals.jpg",
    aspect: "1/1",
    jobId: "2bdc4c4f-e0dd-46d3-b8d9-e3ae0e6fca4b",
  },
  {
    id: "ophelia-roses",
    title: "Ophelia Roses",
    mood: "Floating in dark water with crimson roses, soft spotlight",
    src: "/images/gallery/ophelia-roses.jpg",
    aspect: "3/4",
    jobId: "d624a034-4d76-4499-bede-d57c6342a7a8",
  },
  {
    id: "blue-etching-eye-card",
    title: "Blue Etching / Eye Card",
    mood: "Duotone navy stipple portrait holding an orange card with a blue eye",
    src: "/images/gallery/blue-etching-eye-card.jpg",
    aspect: "3/4",
    jobId: "6828db56-f115-4828-8716-4097cf86fe52",
  },
  {
    id: "red-sun-city",
    title: "Red Sun City",
    mood: "Blue night street canyon under a saturated red sun",
    src: "/images/gallery/red-sun-city.jpg",
    aspect: "3/4",
    jobId: "7c635bb3-9f94-45eb-b7d5-ddc5ae7a2161",
  },
  {
    id: "glitch-attention",
    title: "Glitch Attention",
    mood: "Motion-blurred crimson typography smear over black, face emerging",
    src: "/images/gallery/glitch-attention.jpg",
    aspect: "3/4",
    jobId: "863002dc-c1db-4a40-a1c4-b1756803df63",
  },
  {
    id: "foliage-crimson",
    title: "Foliage Crimson",
    mood: "Eyes through mossy green branches on flat crimson field",
    src: "/images/gallery/foliage-crimson.jpg",
    aspect: "1/1",
    jobId: "30b7cba8-86cf-4d45-801b-8f2a99b7203e",
  },
];
