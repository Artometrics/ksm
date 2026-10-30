import { useEffect } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "@/global.css";
import { useBrandFonts } from "@/lib/useBrandFonts";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useBrandFonts();

  useEffect(() => {
    if (loaded || error) void SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#F6F1E7" },
          animation: "none",
        }}
      >
        <Stack.Screen name="(site)" />
        <Stack.Screen name="bio" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}
