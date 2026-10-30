import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { DeskSearch } from "@/components/DeskSearch";
import { StylePicker } from "@/components/StylePicker";
import { useChrome } from "@/lib/chrome";

const NAV = [
  { href: "/", label: "Projects" },
  { href: "/#papers", label: "Papers" },
  { href: "/blog", label: "Journal" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
] as const;

export function SiteHeader() {
  const { menuOpen, setMenuOpen } = useChrome();

  return (
    <View className="ksm-header">
      <Wrapper className="gap-3 py-3">
        <View className="flex-row flex-wrap items-center justify-between gap-3">
          <Link href="/">
            <Text className="ksm-wordmark">Kyle McAuliffe</Text>
          </Link>
          <View className="hidden flex-row flex-wrap items-center gap-4 lg:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <Pressable>
                  <Text className="ksm-nav">{item.label}</Text>
                </Pressable>
              </Link>
            ))}
          </View>
          <Pressable
            onPress={() => setMenuOpen(!menuOpen)}
            accessibilityRole="button"
            accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
            className="p-1 lg:hidden"
          >
            <Text className="ksm-nav">{menuOpen ? "Close" : "Menu"}</Text>
          </Pressable>
        </View>
        <View className="flex-row flex-wrap items-center gap-3">
          <DeskSearch />
          <StylePicker />
        </View>
      </Wrapper>
    </View>
  );
}
