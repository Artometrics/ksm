import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { useChrome } from "@/lib/chrome";

const LINKS = [
  { href: "/blog", label: "Magazine" },
  { href: "/podcast", label: "Podcast" },
  { href: "/authors", label: "Authors" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Membership" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Log in" },
  { href: "/signup", label: "Sign up" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
] as const;

export function SiteNavOverlay() {
  const { menuOpen, setMenuOpen } = useChrome();
  if (!menuOpen) return null;

  return (
    <View className="absolute inset-0 z-50 bg-overlay lg:hidden">
      <Wrapper className="gap-1 pt-20">
        {LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            asChild
            onPress={() => setMenuOpen(false)}
          >
            <Pressable className="border-b border-border py-4">
              <Text className="font-serif text-2xl font-light text-fg">
                {item.label}
              </Text>
            </Pressable>
          </Link>
        ))}
      </Wrapper>
    </View>
  );
}
