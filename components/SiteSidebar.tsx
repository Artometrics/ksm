import { Pressable, Text, View } from "react-native";
import { Link, usePathname } from "expo-router";
import { DeskSearch } from "@/components/DeskSearch";
import { StylePicker } from "@/components/StylePicker";
import { CrtToggle } from "@/components/CrtToggle";
import { NavPixelIcon } from "@/components/NavPixelIcon";
import { SITE_TABS, isTabActive } from "@/lib/nav";

function SideLinks() {
  const pathname = usePathname();

  return (
    <>
      {SITE_TABS.map((item) => {
        const active = isTabActive(pathname, item.href);
        return (
          <Link key={item.href} href={item.href} asChild>
            <Pressable
              className={["ksm-side-link", active ? "is-active" : ""].filter(Boolean).join(" ")}
              accessibilityRole="link"
              accessibilityState={{ selected: active }}
            >
              <NavPixelIcon name={item.icon} />
              <Text>{item.label}</Text>
            </Pressable>
          </Link>
        );
      })}
    </>
  );
}

/** Desktop sidebar panel (hidden on mobile web via SiteSidebar.web.tsx). */
export function SiteSidebarPanel() {
  return (
    <View className="ksm-side" accessibilityRole="none">
      <Text className="ksm-wordmark">KSM</Text>
      <View className="ksm-side-links">
        <SideLinks />
      </View>
      <View className="ksm-side-foot">
        <DeskSearch />
        <StylePicker />
        <CrtToggle />
      </View>
    </View>
  );
}

export function SiteSidebar() {
  return <SiteSidebarPanel />;
}
