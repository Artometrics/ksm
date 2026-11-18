import { Pressable, Text, View } from "react-native";
import { Link, usePathname } from "expo-router";
import { MOBILE_TABS, isTabActive } from "@/lib/nav";
import { NavIcon } from "@/components/NavIcon";

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <View className="ksm-tabs" accessibilityRole="tablist">
      {MOBILE_TABS.map((item) => {
        const active = isTabActive(pathname, item.href);
        const className = [
          "ksm-tab",
          item.center ? "ksm-tab--center" : "",
          active ? "is-active" : "",
        ]
          .filter(Boolean)
          .join(" ");
        const light = Boolean(active || item.center);
        const ink = light ? "#ffffff" : "#111111";
        return (
          <Link key={item.href} href={item.href} asChild>
            <Pressable
              className={className}
              accessibilityRole="link"
              accessibilityState={{ selected: active }}
            >
              <NavIcon name={item.icon} size={18} color={ink} />
              <Text style={{ color: ink }}>{item.short ?? item.label}</Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}
