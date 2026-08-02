import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";

const COLUMNS = [
  {
    title: "Sections",
    links: [
      ["/blog", "Blog"],
      ["/posters", "Posters"],
      ["/podcast", "Podcast"],
      ["/authors", "Authors"],
      ["/about", "About"],
    ],
  },
  {
    title: "Join",
    links: [
      ["/pricing", "Membership"],
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
    <View className="mt-0 border-t border-border bg-black">
      <Wrapper className="py-12">
        <View className="flex-row flex-wrap gap-10">
          <View className="bg-accent-print px-2.5 py-1.5 self-start">
            <Text className="font-[DMMono] text-[13px] font-medium tracking-[0.12em] text-white">
              K S M
            </Text>
          </View>
          {COLUMNS.map((col) => (
            <View key={col.title} className="min-w-[140px] flex-grow gap-2">
              <Text className="mb-1.5 font-[DMMono] text-[11px] uppercase tracking-[0.08em] text-subtle">
                {col.title}
              </Text>
              {col.links.map(([href, label]) => (
                <Link key={href} href={href as `/blog`} asChild>
                  <Pressable>
                    <Text className="py-0.5 font-sans text-[13px] text-white/75">
                      {label}
                    </Text>
                  </Pressable>
                </Link>
              ))}
            </View>
          ))}
        </View>
        <View className="mt-10 flex-row flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-6">
          <Text className="font-[Chomsky] text-3xl text-white">KSM</Text>
          <Text className="font-[DMMono] text-[11px] uppercase tracking-[0.08em] text-subtle">
            © {new Date().getFullYear()} KSM · Blog · Posters · Signal
          </Text>
        </View>
      </Wrapper>
    </View>
  );
}
