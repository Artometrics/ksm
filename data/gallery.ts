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
    id: "bw-profile",
    title: "B&W Cover Portrait",
    mood: "High-contrast monochrome hero look — grain, collar, hard side light, no text",
    src: "/images/gallery/bw-profile.jpg",
    aspect: "3/4",
    jobId: "eced077d-099f-4566-abb8-9cb0cc710643",
  },
  {
    id: "bw-hero-clean",
    title: "B&W Studio Stare",
    mood: "Same cover energy, cropped clean of masthead",
    src: "/images/gallery/bw-hero-clean.jpg",
    aspect: "3/4",
    jobId: "30062074-880f-49cb-b4c3-4adfb30aa3e1",
  },
  {
    id: "bw-concrete",
    title: "B&W Concrete Wall",
    mood: "Editorial close-up against rough wall, chiaroscuro",
    src: "/images/gallery/bw-concrete.jpg",
    aspect: "3/4",
    jobId: "43a840de-72ce-41c2-ad6e-61cddac8b098",
  },
  {
    id: "bw-lowangle",
    title: "B&W Low Angle",
    mood: "Chin up, hard right light, film grain",
    src: "/images/gallery/bw-lowangle.jpg",
    aspect: "3/4",
    jobId: "9383801a-15ec-4e12-8f82-42db3a50779b",
  },
  {
    id: "bw-eyes",
    title: "B&W Eyes Crop",
    mood: "Tight face fill, underground zine stare",
    src: "/images/gallery/bw-eyes.jpg",
    aspect: "1/1",
    jobId: "d4ba038d-c8d0-41bc-a7db-db1d27192ea7",
  },
  {
    id: "bw-square",
    title: "B&W Square Noir",
    mood: "Square crop, soft edge falloff, sharp eyes",
    src: "/images/gallery/bw-square.jpg",
    aspect: "1/1",
    jobId: "8a4834c5-8235-4b21-81f2-c40a871ec973",
  },
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
