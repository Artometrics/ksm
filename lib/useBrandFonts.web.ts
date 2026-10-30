import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

/**
 * The home hero is already in the static HTML. Waiting on font files
 * blanks that paint and makes the headline miss the LCP window.
 */
export function useBrandFonts(): readonly [boolean, Error | null] {
  useEffect(() => {
    void SplashScreen.hideAsync();
  }, []);
  return [true, null];
}
