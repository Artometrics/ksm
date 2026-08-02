import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import "@/global.css";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DMSans: require("../assets/fonts/DMSans-Regular.ttf"),
    "DMSans Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMSans Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    DMMono: require("../assets/fonts/DMMono-Regular.ttf"),
    "DMMono Medium": require("../assets/fonts/DMMono-Medium.ttf"),
    Chomsky: require("../assets/fonts/Chomsky.otf"),
    Anton: require("../assets/fonts/Anton-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) void SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#000000" },
          animation: "none",
        }}
      >
        <Stack.Screen name="(site)" />
        <Stack.Screen name="bio" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GestureHandlerRootView>
  );
}
