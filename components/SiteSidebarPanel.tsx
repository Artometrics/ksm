import { Pressable, Text, View } from "react-native";
import { Link, usePathname } from "expo-router";
import { DeskSearch } from "@/components/DeskSearch";
import { NavIcon } from "@/components/NavIcon";
import { SITE_TABS, isTabActive } from "@/lib/nav";
import { CollectionRail } from "@/components/CollectionRail";
import { ThemeToggle } from "@/components/ThemeToggle";

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
              <NavIcon name={item.icon} />
              <Text>{item.label}</Text>
            </Pressable>
          </Link>
        );
      })}
    </>
  );
}

/** Desktop sidebar. Lives in its own module so the web entry can import it without resolving back to SiteSidebar.web.tsx. */
export function SiteSidebarPanel() {
  return (
    <View className="ksm-side" accessibilityRole="none">
      <Text className="ksm-wordmark ksm-wordmark--masthead">KSM</Text>
      <View className="ksm-side-links">
        <SideLinks />
      </View>
      <CollectionRail variant="sidebar" />
      <View className="ksm-side-foot">
        <ThemeToggle />
        <DeskSearch placeholder="Search" />
      </View>
    </View>
  );
}
