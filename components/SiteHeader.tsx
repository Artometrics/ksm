import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Menu, Moon, Sun, X } from "lucide-react-native";
import { Logo } from "@/components/Logo";
import { Wrapper } from "@/components/Wrapper";
import { useChrome } from "@/lib/chrome";
import { useTheme } from "@/lib/theme";

const NAV = [
  { href: "/blog", label: "Magazine" },
  { href: "/podcast", label: "Podcast" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Membership" },
] as const;

export function SiteHeader() {
  const { menuOpen, setMenuOpen } = useChrome();
  const { mode, toggle, colors } = useTheme();

  return (
    <View className="border-b border-border bg-header">
      <Wrapper className="py-3">
        <View className="flex-row items-center justify-between gap-4">
          <Logo />
          <View className="hidden flex-row items-center gap-5 lg:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <Pressable>
                  <Text className="text-xs font-medium uppercase tracking-wide text-fg hover:text-muted">
                    {item.label}
                  </Text>
                </Pressable>
              </Link>
            ))}
            <Link href="/login" asChild>
              <Pressable className="border border-border px-3 py-1.5">
                <Text className="text-xs font-medium uppercase tracking-wide text-fg">
                  Log in
                </Text>
              </Pressable>
            </Link>
            <Pressable
              onPress={toggle}
              accessibilityLabel="Toggle color theme"
              className="p-1.5"
            >
              {mode === "dark" ? (
                <Sun size={18} color={colors.text} />
              ) : (
                <Moon size={18} color={colors.text} />
              )}
            </Pressable>
          </View>
          <View className="flex-row items-center gap-2 lg:hidden">
            <Pressable onPress={toggle} accessibilityLabel="Toggle color theme">
              {mode === "dark" ? (
                <Sun size={20} color={colors.text} />
              ) : (
                <Moon size={20} color={colors.text} />
              )}
            </Pressable>
            <Pressable
              onPress={() => setMenuOpen(!menuOpen)}
              accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
              className="p-1"
            >
              {menuOpen ? (
                <X size={22} color={colors.text} />
              ) : (
                <Menu size={22} color={colors.text} />
              )}
            </Pressable>
          </View>
        </View>
      </Wrapper>
    </View>
  );
}
