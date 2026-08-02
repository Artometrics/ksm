import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      ["/blog", "Magazine"],
      ["/podcast", "Podcast"],
      ["/authors", "Authors"],
      ["/about", "About"],
    ],
  },
  {
    title: "Membership",
    links: [
      ["/pricing", "Pricing"],
      ["/login", "Log in"],
      ["/signup", "Sign up"],
      ["/contact", "Contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/legal/privacy", "Privacy"],
      ["/legal/terms", "Terms"],
      ["/legal/cookies", "Cookies"],
      ["/legal/ethics-statement", "Ethics"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <View className="mt-10">
      <Wrapper className="mb-0">
        <View className="flex-row flex-wrap items-center justify-between gap-5 border-y border-border bg-accent px-4 py-10">
          <Text className="min-w-[220px] flex-1 font-serif text-3xl font-light leading-10 text-white">
            {"Stay close to\nthe craft of design."}
          </Text>
          <Link href="/signup" asChild>
            <Pressable
              className="h-14 min-w-14 items-center justify-center border border-white bg-white px-5"
              accessibilityLabel="Join Hemingway"
            >
              <Text className="text-sm font-medium uppercase tracking-wide text-base-950">
                Join →
              </Text>
            </Pressable>
          </Link>
        </View>
      </Wrapper>
      <View className="bg-base-950 py-10">
        <Wrapper>
          <View className="flex-row flex-wrap gap-8">
            {COLUMNS.map((col) => (
              <View key={col.title} className="min-w-[140px] flex-grow gap-2">
                <Text className="mb-1.5 text-[11px] font-semibold uppercase tracking-[1.6px] text-accent">
                  {col.title}
                </Text>
                {col.links.map(([href, label]) => (
                  <Link key={href} href={href as `/blog`} asChild>
                    <Pressable>
                      <Text className="py-0.5 text-[13px] text-white/75">
                        {label}
                      </Text>
                    </Pressable>
                  </Link>
                ))}
              </View>
            ))}
          </View>
          <Text className="mt-10 text-xs text-white/40">
            © {new Date().getFullYear()} Hemingway. Design conversations for
            engineers and makers.
          </Text>
        </Wrapper>
      </View>
    </View>
  );
}
