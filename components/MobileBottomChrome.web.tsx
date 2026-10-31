import { View } from "react-native";
import { NowPlayingBar } from "@/components/NowPlayingBar";
import { MobileTabBar } from "@/components/MobileTabBar";

/** Fixed mini-player + tab bar outside the main flex column (mobile web). */
export function MobileBottomChrome() {
  return (
    <View className="ksm-mobile-chrome" pointerEvents="box-none">
      <NowPlayingBar />
      <MobileTabBar />
    </View>
  );
}
