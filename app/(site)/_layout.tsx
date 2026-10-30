import { useEffect, useRef } from "react";
import { Slot, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SiteSidebar } from "@/components/SiteSidebar";
import { SiteFooter } from "@/components/SiteFooter";
import { ViewTransitions } from "@/components/ViewTransitions";
import { DeskSearch } from "@/components/DeskSearch";
import { StylePicker } from "@/components/StylePicker";
import { ChromeProvider, useChrome } from "@/lib/chrome";
import { ThemeProvider, useTheme } from "@/lib/theme";

function SiteChrome() {
  const pathname = usePathname();
  const { setScrollY, setMenuOpen } = useChrome();
  const { mode } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    setMenuOpen(false);
    setScrollY(0);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    if (Platform.OS === "web" && typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname, setMenuOpen, setScrollY]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };

  return (
    <SafeAreaView
      className="ksm-page flex-1"
      style={{ flex: 1, backgroundColor: "transparent" }}
      edges={["top"]}
    >
      <StatusBar style={mode === "dark" ? "light" : "dark"} />
      <View className="ksm-frame" style={{ flex: 1, flexDirection: "row", backgroundColor: "transparent" }}>
        <SiteSidebar />
        <View className="ksm-main" style={{ flex: 1 }}>
        <View className="ksm-mobile-tools" style={{ padding: 12, gap: 8 }}>
          <DeskSearch />
          <StylePicker />
        </View>
        <ScrollView
          ref={scrollRef}
          className="flex-1"
          style={{ backgroundColor: "transparent" }}
          contentContainerClassName="grow pb-6"
          onScroll={onScroll}
          scrollEventThrottle={32}
          keyboardShouldPersistTaps="handled"
        >
          <Slot />
          <SiteFooter />
        </ScrollView>
        </View>
      </View>
      <ViewTransitions />
    </SafeAreaView>
  );
}

export default function SiteLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ChromeProvider>
          <SiteChrome />
        </ChromeProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
