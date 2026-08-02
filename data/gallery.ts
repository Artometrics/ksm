/**
 * KSM Soul work gallery — regenerated with soul_2 (KSM).
 * Subject: 26-year-old man. Browse at `/gallery`.
 */

export type GalleryAspect = "3/4" | "1/1" | "16/9" | "9/16";

export type GalleryItem = {
  id: string;
  title: string;
  mood: string;
  src: string;
  aspect: GalleryAspect;
  jobId: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "bw-profile",
    title: "B&W Cover Portrait",
    mood: "High-contrast monochrome hero — grain, collar, hard side light, no text",
    src: "/images/gallery/bw-profile.jpg",
    aspect: "3/4",
    jobId: "c70ec123-f000-460a-b421-2c2b7c772eb5",
  },
  {
    id: "bw-cover-cropped",
    title: "B&W Cover Crop",
    mood: "Same cover stare, masthead cropped out for clean brand use",
    src: "/images/gallery/bw-cover-cropped.jpg",
    aspect: "3/4",
    jobId: "b76e02b0-869b-4ba1-aa91-5666745053ea",
  },
  {
    id: "bw-concrete",
    title: "B&W Concrete Low Angle",
    mood: "Chin up against rough wall — chiaroscuro, film grain",
    src: "/images/gallery/bw-concrete.jpg",
    aspect: "3/4",
    jobId: "cc6bb95c-c1c3-4a6d-9c2b-06f2bc0ed87e",
  },
  {
    id: "turtleneck-studio",
    title: "Turtleneck Studio",
    mood: "Soft window light + hard shadow, black turtleneck mid-shot",
    src: "/images/gallery/turtleneck-studio.jpg",
    aspect: "3/4",
    jobId: "2369c5b8-3930-40d2-9d59-15b86c764eb7",
  },
  {
    id: "magazine-crimson",
    title: "Crimson Scarf Editorial",
    mood: "Black coat, crimson accent, high-contrast studio grade",
    src: "/images/gallery/magazine-crimson.jpg",
    aspect: "3/4",
    jobId: "1572ecb9-1827-46a2-a4e4-86c199835c10",
  },
  {
    id: "double-exposure-lilies",
    title: "Crimson Lilies",
    mood: "Double-exposure face wash in blood red with cream trumpet lilies",
    src: "/images/gallery/double-exposure-lilies.jpg",
    aspect: "3/4",
    jobId: "f12ed7f3-be97-413d-bb8e-f6aca92a9866",
  },
  {
    id: "glitch-attention",
    title: "Glitch Attention",
    mood: "Motion-blurred crimson smear — face emerging from black",
    src: "/images/gallery/glitch-attention.jpg",
    aspect: "3/4",
    jobId: "c8503be4-258b-4fb3-9c59-6fedd729ecba",
  },
  {
    id: "bw-square",
    title: "B&W Square Noir",
    mood: "Tight square face fill — soft falloff, sharp eyes",
    src: "/images/gallery/bw-square.jpg",
    aspect: "1/1",
    jobId: "7d20a7e5-e03b-4ec3-b3c3-80f5987d47ce",
  },
  {
    id: "bw-eyes",
    title: "B&W Eyes Crop",
    mood: "Extreme eye close-up — underground zine stare",
    src: "/images/gallery/bw-eyes.jpg",
    aspect: "1/1",
    jobId: "d6306ea6-c144-4db4-ba77-ee772fd09c4e",
  },
  {
    id: "foliage-crimson",
    title: "Foliage Crimson",
    mood: "Eyes through mossy branches on a flat crimson field",
    src: "/images/gallery/foliage-crimson.jpg",
    aspect: "1/1",
    jobId: "6bf473ba-247d-4c87-a24e-63b7598777e5",
  },
  {
    id: "eyes-strip-wide",
    title: "Eyes Strip Wide",
    mood: "16:9 cinematic eye band for signal strips and banners",
    src: "/images/gallery/eyes-strip-wide.jpg",
    aspect: "16/9",
    jobId: "dde9cf1d-759e-43ea-b801-ff50bf323190",
  },
  {
    id: "red-sun-city",
    title: "Red Sun City",
    mood: "Blue night street under a saturated red sun — environmental",
    src: "/images/gallery/red-sun-city.jpg",
    aspect: "16/9",
    jobId: "78c22fa4-3bd8-4694-8432-ba76b9168fd8",
  },
  {
    id: "story-vertical",
    title: "Story Vertical",
    mood: "9:16 vertical contact / story frame — dark coat, rim light",
    src: "/images/gallery/story-vertical.jpg",
    aspect: "9/16",
    jobId: "1885203e-31be-4658-a848-12385f2cc273",
  },
];

export function aspectRatioValue(aspect: GalleryAspect): number {
  switch (aspect) {
    case "1/1":
      return 1;
    case "16/9":
      return 16 / 9;
    case "9/16":
      return 9 / 16;
    case "3/4":
    default:
      return 3 / 4;
  }
}
