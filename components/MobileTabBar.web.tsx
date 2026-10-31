import { Pressable, Text, View } from "react-native";
import { Link, usePathname } from "expo-router";
import { SITE_TABS, isTabActive } from "@/lib/nav";
import { NavPixelIcon } from "@/components/NavPixelIcon";

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <View className="ksm-tabs" accessibilityRole="tablist">
      {SITE_TABS.map((item) => {
        const active = isTabActive(pathname, item.href);
        const className = [
          "ksm-tab",
          item.center ? "ksm-tab--home" : "",
          active ? "is-active" : "",
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <Link key={item.href} href={item.href} asChild>
            <Pressable
              className={className}
              accessibilityRole="link"
              accessibilityState={{ selected: active }}
            >
              <NavPixelIcon name={item.icon} />
              <Text>{item.label}</Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}
