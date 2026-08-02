/**
 * Instagram / link-in-bio config.
 * Edit handles, socials, and CTAs here — the page is live at `/bio`
 * but intentionally omitted from site navigation.
 */

export type BioHandle = {
  label: string;
  href: string;
};

export type BioSocial = {
  id: "instagram" | "x" | "tiktok" | "youtube" | "linkedin";
  label: string;
  href: string;
};

export type BioCta = {
  label: string;
  href: string;
  external?: boolean;
};

export const bio = {
  brand: "Hemingway",
  tagline: "Design conversations",
  handles: [
    { label: "@hemingway", href: "https://instagram.com" },
    { label: "@hemingway.mag", href: "https://instagram.com" },
    { label: "@hemingway.pod", href: "https://instagram.com" },
    { label: "@hemingway.studio", href: "https://instagram.com" },
  ] satisfies BioHandle[],
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      id: "x",
      label: "X",
      href: "https://x.com",
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "https://tiktok.com",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://youtube.com",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
  ] satisfies BioSocial[],
  ctas: [
    { label: "Read the magazine", href: "/blog" },
    { label: "Listen to the podcast", href: "/podcast" },
    { label: "Become a member", href: "/pricing" },
    { label: "Visit the full site", href: "/" },
  ] satisfies BioCta[],
} as const;
