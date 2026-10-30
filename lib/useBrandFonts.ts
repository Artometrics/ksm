import { useFonts } from "expo-font";

/** Native faces. Web uses CSS in app/+html.tsx and does not bundle these files. */
export function useBrandFonts() {
  return useFonts({
    Anton: require("../assets/fonts/Anton-Regular.ttf"),
    UnifrakturCook: require("../assets/fonts/UnifrakturCook-Bold.ttf"),
    GreatVibes: require("../assets/fonts/GreatVibes-Regular.ttf"),
    Inter: require("../assets/fonts/Inter-Regular.otf"),
    "Inter Bold": require("../assets/fonts/Inter-Bold.otf"),
  });
}
