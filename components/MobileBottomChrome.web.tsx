import { Platform, View, type ViewStyle } from "react-native";
import { NowPlayingBar } from "@/components/NowPlayingBar";
import { MobileTabBar } from "@/components/MobileTabBar";

const fixedChrome: ViewStyle =
  Platform.OS === "web"
    ? {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        zIndex: 40,
      }
    : {};

/** Fixed mini-player + tab bar outside the main flex column (mobile web). */
export function MobileBottomChrome() {
  return (
    <View
      className="ksm-mobile-chrome"
      pointerEvents="box-none"
      style={fixedChrome}
    >
      <NowPlayingBar />
      <MobileTabBar />
    </View>
  );
}
