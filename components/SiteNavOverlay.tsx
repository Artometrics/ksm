import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { useChrome } from "@/lib/chrome";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/", label: "Home" },
  { href: "/blog", label: "Journal" },
  { href: "/archive", label: "Archive" },
  { href: "/cv", label: "CV" },
] as const;

export function SiteNavOverlay() {
  const { menuOpen, setMenuOpen } = useChrome();
  if (!menuOpen) return null;

  return (
    <View className="ksm-menu">
      <Wrapper className="gap-0 pt-6">
        {LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            asChild
            onPress={() => setMenuOpen(false)}
          >
            <Pressable className="ksm-menu-link">
              <Text className="ksm-menu-label">{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </Wrapper>
    </View>
  );
}
