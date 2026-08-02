/**
 * Hemingway brand tokens — warm gold accent + Inter / STIX Two Text.
 */

export const Colors = {
  accent50: "#FFFBEB",
  accent100: "#FEF3C7",
  accent200: "#FDE68A",
  accent300: "#FCD34D",
  accent400: "#FBBF24",
  accent500: "#D4A017",
  accent600: "#B8860B",
  accent700: "#92700A",
  accent800: "#6B5208",
  accent900: "#453505",
  accent950: "#2A2003",

  base50: "#FAFAFA",
  base100: "#F5F5F5",
  base200: "#E5E5E5",
  base300: "#D4D4D4",
  base400: "#A3A3A3",
  base500: "#737373",
  base600: "#525252",
  base700: "#404040",
  base800: "#262626",
  base900: "#171717",
  base950: "#0A0A0A",

  white: "#FFFFFF",
  black: "#000000",
} as const;

export type BrandFonts = {
  display: string;
  sans: string;
  serif: string;
  mono: string;
};

export const Fonts: BrandFonts = {
  display: "STIX Two Text",
  sans: "Inter",
  serif: "STIX Two Text",
  mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
};

export type ThemeMode = "light" | "dark";

export type ThemeColors = {
  mode: ThemeMode;
  bg: string;
  bgElevated: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  border: string;
  accent: string;
  accentSoft: string;
  inverse: string;
  headerBg: string;
  overlayBg: string;
  rule: string;
};

export const Themes: Record<ThemeMode, ThemeColors> = {
  light: {
    mode: "light",
    bg: Colors.base50,
    bgElevated: Colors.white,
    text: Colors.base900,
    textMuted: Colors.base600,
    textSubtle: Colors.base500,
    border: Colors.base200,
    accent: Colors.accent500,
    accentSoft: Colors.accent50,
    inverse: Colors.white,
    headerBg: Colors.base50,
    overlayBg: Colors.white,
    rule: Colors.base200,
  },
  dark: {
    mode: "dark",
    bg: Colors.base950,
    bgElevated: Colors.base900,
    text: Colors.base50,
    textMuted: Colors.base400,
    textSubtle: Colors.base500,
    border: Colors.base700,
    accent: Colors.accent400,
    accentSoft: Colors.accent950,
    inverse: Colors.base950,
    headerBg: Colors.base950,
    overlayBg: Colors.base900,
    rule: Colors.base700,
  },
};

export function resolveThemeColors(mode: ThemeMode): ThemeColors {
  return Themes[mode];
}
