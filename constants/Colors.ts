/**
 * KSM brand tokens — Swiss/magazine hybrid (Brand Guidelines v1.0).
 */

export const Colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray100: "#F5F5F5",
  gray200: "#E5E5E5",
  gray600: "#525252",
  /** Print/editorial accent — cover blocks, dividers, pull quotes */
  accent: "#C0392B",
  /** UI accent — buttons/links on screen */
  accentUi: "#D9251B",
  red: "#C0392B",
  redDeep: "#9B2E22",
  redSoft: "#D9251B",
  paper: "#F5F5F5",
  ash: "#1A1A1A",
  mute: "#525252",
} as const;

export type BrandFonts = {
  display: string;
  wordmark: string;
  sans: string;
  mono: string;
  /** Swiss alternate for oversize poster type */
  poster: string;
};

export const Fonts: BrandFonts = {
  display: "DMMono",
  wordmark: "Chomsky",
  sans: "DMSans",
  mono: "DMMono",
  poster: "Anton",
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

/** Default site theme — Kruger black/white/red editorial. */
export const Themes: Record<ThemeMode, ThemeColors> = {
  light: {
    mode: "light",
    bg: Colors.white,
    bgElevated: Colors.gray100,
    text: Colors.black,
    textMuted: "#333333",
    textSubtle: Colors.gray600,
    border: Colors.black,
    accent: Colors.accentUi,
    accentSoft: "#F8E8E6",
    inverse: Colors.white,
    headerBg: Colors.white,
    overlayBg: Colors.white,
    rule: Colors.black,
  },
  dark: {
    mode: "dark",
    bg: Colors.black,
    bgElevated: Colors.ash,
    text: Colors.white,
    textMuted: "#C8C8C8",
    textSubtle: Colors.gray600,
    border: "#333333",
    accent: Colors.accentUi,
    accentSoft: "#3A0000",
    inverse: Colors.black,
    headerBg: Colors.black,
    overlayBg: Colors.ash,
    rule: "#333333",
  },
};

export function resolveThemeColors(mode: ThemeMode): ThemeColors {
  return Themes[mode];
}
