import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Menu, X } from "lucide-react-native";
import { Logo } from "@/components/Logo";
import { Wrapper } from "@/components/Wrapper";
import { useChrome } from "@/lib/chrome";
import { useTheme } from "@/lib/theme";

const NAV = [
  { href: "/blog", label: "Blog" },
  { href: "/posters", label: "Posters" },
  { href: "/podcast", label: "Podcast" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const { menuOpen, setMenuOpen } = useChrome();
  const { colors } = useTheme();

  return (
    <View className="border-b border-border bg-header">
      <Wrapper className="py-4">
        <View className="flex-row items-center justify-between gap-4">
          <Logo />
          <View className="hidden flex-row items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <Pressable>
                  <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-fg">
                    {item.label}
                  </Text>
                </Pressable>
              </Link>
            ))}
            <Link href="/login" asChild>
              <Pressable className="bg-accent px-4 py-2.5">
                <Text className="font-[DMMono] text-[12px] font-medium uppercase tracking-[0.06em] text-white">
                  Log in →
                </Text>
              </Pressable>
            </Link>
          </View>
          <Pressable
            onPress={() => setMenuOpen(!menuOpen)}
            accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
            className="p-1 lg:hidden"
          >
            {menuOpen ? (
              <X size={22} color={colors.text} />
            ) : (
              <Menu size={22} color={colors.text} />
            )}
          </Pressable>
        </View>
      </Wrapper>
    </View>
  );
}
