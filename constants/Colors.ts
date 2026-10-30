/**
 * KSM brand tokens — crimson / black / white zine.
 */

export const Colors = {
  red: "#C41224",
  redDeep: "#9E0E1E",
  redSoft: "#FF5C54",
  black: "#100E0C",
  white: "#F4EFE6",
  paper: "#E6DDD0",
  ash: "#1C1916",
  mute: "#8A8178",
} as const;

export type BrandFonts = {
  display: string;
  gothic: string;
  script: string;
  sans: string;
  mono: string;
};

export const Fonts: BrandFonts = {
  display: "Anton",
  gothic: "UnifrakturCook",
  script: "GreatVibes",
  sans: "Inter",
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

/** Default site theme locks to the zine light paper + red/black system. */
export const Themes: Record<ThemeMode, ThemeColors> = {
  light: {
    mode: "light",
    bg: "#F4EFE6",
    bgElevated: Colors.paper,
    text: "#161311",
    textMuted: "#3A342E",
    textSubtle: Colors.mute,
    border: "#161311",
    accent: "#B10F24",
    accentSoft: "#F3D7D4",
    inverse: "#F4EFE6",
    headerBg: Colors.white,
    overlayBg: Colors.white,
    rule: Colors.black,
  },
  dark: {
    mode: "dark",
    bg: Colors.black,
    bgElevated: Colors.ash,
    text: "#F4EFE6",
    textMuted: "#C9BFB2",
    textSubtle: Colors.mute,
    border: "#F4EFE6",
    accent: "#C41224",
    accentSoft: "#3A1214",
    inverse: Colors.black,
    headerBg: Colors.black,
    overlayBg: Colors.ash,
    rule: Colors.white,
  },
};

export function resolveThemeColors(mode: ThemeMode): ThemeColors {
  return Themes[mode];
}
