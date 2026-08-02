import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Menu, X } from "lucide-react-native";
import { Wrapper } from "@/components/Wrapper";
import { useChrome } from "@/lib/chrome";

const NAV = [
  { href: "/gallery", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Locked black magazine chrome — portfolio nav categories.
 */
export function SiteHeader() {
  const { menuOpen, setMenuOpen } = useChrome();

  return (
    <View className="border-b-2 border-white bg-black">
      <Wrapper className="py-3">
        <View className="flex-row items-center justify-between gap-4">
          <Link href="/" asChild>
            <Pressable accessibilityRole="header" accessibilityLabel="KSM home">
              <Text className="font-[Anton] text-2xl uppercase tracking-[2px] text-white">
                KSM
              </Text>
            </Pressable>
          </Link>
          <View className="hidden flex-row items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <Pressable>
                  <Text className="font-[Anton] text-[13px] uppercase tracking-[2px] text-white">
                    {item.label}
                  </Text>
                </Pressable>
              </Link>
            ))}
            <Link href="/contact" asChild>
              <Pressable className="bg-accent px-3 py-2">
                <Text className="font-[Anton] text-[12px] uppercase tracking-[1.5px] text-white">
                  Hire me
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
              <X size={22} color="#FFFFFF" />
            ) : (
              <Menu size={22} color="#FFFFFF" />
            )}
          </Pressable>
        </View>
      </Wrapper>
      <View className="border-t border-white/25 bg-black">
        <Wrapper className="flex-row flex-wrap items-center justify-between gap-2 py-1.5">
          <Text className="text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">
            Portfolio · Online
          </Text>
          <Text className="text-[10px] font-bold uppercase tracking-[1.4px] text-accent">
            Strong graphic content · No fluff
          </Text>
          <Text className="text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">
            Brand · Editorial · Systems
          </Text>
        </Wrapper>
      </View>
    </View>
  );
}
