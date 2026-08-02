import { useMemo, useState } from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Instagram,
  Linkedin,
  Music2,
  Youtube,
} from "lucide-react-native";
import { PageSeo } from "@/components/PageSeo";
import { bio, type BioSocial } from "@/data/bio";
import { assetUrl } from "@/lib/assets";
import { getRecentEpisodes, getRecentPosts } from "@/lib/content";

type FeedTab = "magazine" | "podcast";

function openHref(href: string, external?: boolean) {
  if (external || /^https?:\/\//i.test(href)) {
    void Linking.openURL(href);
    return;
  }
  router.push(href as `/`);
}

function SocialIcon({ id, color }: { id: BioSocial["id"]; color: string }) {
  const size = 22;
  switch (id) {
    case "instagram":
      return <Instagram size={size} color={color} strokeWidth={1.5} />;
    case "x":
      return (
        <Text style={{ color, fontSize: 16, fontWeight: "700" }}>𝕏</Text>
      );
    case "tiktok":
      return <Music2 size={size} color={color} strokeWidth={1.5} />;
    case "youtube":
      return <Youtube size={size} color={color} strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin size={size} color={color} strokeWidth={1.5} />;
    default:
      return null;
  }
}

function BioLinkButton({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <Pressable
      onPress={() => openHref(href, external)}
      accessibilityRole="link"
      accessibilityLabel={label}
      className="w-full border border-white px-4 py-4 active:bg-white/10"
    >
      <Text className="text-center text-[13px] font-medium uppercase tracking-[1.4px] text-white">
        {label}
      </Text>
    </Pressable>
  );
}

export default function BioScreen() {
  const { width } = useWindowDimensions();
  const [tab, setTab] = useState<FeedTab>("magazine");
  const posts = useMemo(() => getRecentPosts(9), []);
  const episodes = useMemo(() => getRecentEpisodes(9), []);

  const gap = 2;
  const maxW = Math.min(width, 480);
  const cell = (maxW - gap * 2) / 3;

  const feed =
    tab === "magazine"
      ? posts.map((p) => ({
          key: p.slug,
          title: p.title,
          image: assetUrl(p.heroImage),
          href: `/blog/posts/${p.slug}`,
        }))
      : episodes.map((e) => ({
          key: e.id,
          title: e.title,
          image: assetUrl(
            typeof e.image === "object" && e.image?.url
              ? e.image.url
              : typeof e.image === "string"
                ? e.image
                : undefined,
          ),
          href: `/podcast/interviews/${e.id}`,
        }));

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black" edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <PageSeo
          title="Hemingway · Links"
          description="Magazine, podcast, membership, and socials — Hemingway link in bio."
          path="/bio"
        />

        <ScrollView
          className="flex-1 bg-black"
          contentContainerClassName="items-center grow"
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full px-5 pb-10 pt-8" style={{ maxWidth: 480 }}>
            {/* Brand */}
            <View className="items-center gap-3">
              <Text className="text-[11px] font-semibold uppercase tracking-[4px] text-white">
                {bio.brand}
              </Text>
              <Text className="font-sans text-[34px] font-bold uppercase tracking-[2px] text-white">
                {bio.brand}
              </Text>
              <Text className="text-[12px] uppercase tracking-[1.6px] text-white/55">
                {bio.tagline}
              </Text>
            </View>

            {/* Handles */}
            <View className="mt-6 flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {bio.handles.map((handle) => (
                <Pressable
                  key={handle.label}
                  onPress={() => openHref(handle.href, true)}
                  accessibilityRole="link"
                >
                  <Text className="text-[12px] text-white/80">
                    {handle.label}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Social icons */}
            <View className="mt-6 flex-row items-center justify-center gap-5">
              {bio.socials.map((social) => (
                <Pressable
                  key={social.id}
                  onPress={() => openHref(social.href, true)}
                  accessibilityLabel={social.label}
                  className="h-10 w-10 items-center justify-center"
                >
                  <SocialIcon id={social.id} color="#FFFFFF" />
                </Pressable>
              ))}
            </View>

            {/* CTAs */}
            <View className="mt-8 gap-3">
              {bio.ctas.map((cta) => (
                <BioLinkButton
                  key={cta.label}
                  label={cta.label}
                  href={cta.href}
                  external={cta.external}
                />
              ))}
            </View>

            {/* Feed tabs */}
            <View className="mt-10 flex-row border-b border-white/25">
              {(
                [
                  ["magazine", "Magazine"],
                  ["podcast", "Podcast"],
                ] as const
              ).map(([id, label]) => {
                const active = tab === id;
                return (
                  <Pressable
                    key={id}
                    onPress={() => setTab(id)}
                    className="flex-1 items-center pb-3"
                    style={{
                      borderBottomWidth: active ? 2 : 0,
                      borderBottomColor: "#FFFFFF",
                    }}
                  >
                    <Text
                      className={`text-[12px] font-semibold uppercase tracking-[1.6px] ${
                        active ? "text-white" : "text-white/45"
                      }`}
                    >
                      {label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Media grid */}
            <View className="mt-0.5 flex-row flex-wrap" style={{ gap }}>
              {feed.map((item) => (
                <Link key={item.key} href={item.href as `/`} asChild>
                  <Pressable
                    style={{ width: cell, height: cell * 1.15 }}
                    accessibilityLabel={item.title}
                  >
                    {item.image ? (
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                        transition={150}
                      />
                    ) : (
                      <View className="h-full w-full items-center justify-center bg-white/10 px-2">
                        <Text
                          className="text-center text-[10px] uppercase tracking-wide text-white/70"
                          numberOfLines={3}
                        >
                          {item.title}
                        </Text>
                      </View>
                    )}
                    <View className="absolute right-1.5 top-1.5">
                      <Text className="text-[8px] font-bold uppercase tracking-widest text-white">
                        {bio.brand.slice(0, 1)}
                      </Text>
                    </View>
                    <View className="absolute bottom-0 left-0 right-0 bg-black/55 px-1.5 py-1">
                      <Text
                        className="text-[9px] uppercase tracking-wide text-white"
                        numberOfLines={2}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </Pressable>
                </Link>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
