import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { BlogCard } from "@/components/BlogCard";
import { PodcastCard } from "@/components/PodcastCard";
import { PageSeo } from "@/components/PageSeo";
import { SunCrossMark } from "@/components/SunCrossMark";
import { getRecentEpisodes, getRecentPosts } from "@/lib/content";

const HERO = "/images/brand/hero-cover.png";
const STRIP = "/images/brand/eyes-strip.png";

export default function HomeScreen() {
  const posts = getRecentPosts(4);
  const episodes = getRecentEpisodes(3);
  const cover = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageSeo
        title="KSM"
        description="Essays, interviews, and cultural signal — high contrast magazine."
        path="/"
        image={HERO}
      />

      {/* Full-bleed hero — brand + one headline + one line + CTA + image */}
      <View className="relative min-h-[88vh] w-full overflow-hidden bg-black">
        <Image
          source={{ uri: HERO }}
          className="absolute inset-0 h-full w-full"
          contentFit="cover"
          transition={250}
        />
        <View className="absolute inset-0 bg-black/45" />
        <Wrapper className="relative z-10 min-h-[88vh] justify-end gap-4 pb-12 pt-24">
          <View className="flex-row items-center gap-3">
            <SunCrossMark size={52} />
            <Text className="font-[UnifrakturCook] text-5xl text-accent md:text-6xl">
              ksm
            </Text>
          </View>
          <Text className="max-w-[18ch] font-[Anton] text-5xl uppercase leading-[0.92] tracking-[1px] text-white md:text-7xl">
            Killing boys of comfort
          </Text>
          <Text className="max-w-[36ch] font-sans text-[15px] leading-6 text-white/80">
            Essays and interviews that cut — design, culture, and the people who
            ship when it hurts.
          </Text>
          <View className="mt-2 flex-row flex-wrap gap-3">
            <Link href="/blog" asChild>
              <Pressable className="bg-accent px-5 py-3">
                <Text className="font-[Anton] text-[13px] uppercase tracking-[2px] text-white">
                  Read the magazine
                </Text>
              </Pressable>
            </Link>
            <Link href="/podcast" asChild>
              <Pressable className="border-2 border-white px-5 py-3">
                <Text className="font-[Anton] text-[13px] uppercase tracking-[2px] text-white">
                  Listen
                </Text>
              </Pressable>
            </Link>
          </View>
        </Wrapper>
      </View>

      {/* Eyes strip band */}
      <View className="relative h-[180px] w-full overflow-hidden border-y-2 border-border bg-accent md:h-[240px]">
        <Image
          source={{ uri: STRIP }}
          className="absolute inset-0 h-full w-full opacity-80"
          contentFit="cover"
        />
        <View className="absolute inset-0 items-center justify-center">
          <Text className="font-[Anton] text-4xl uppercase tracking-[6px] text-white md:text-6xl">
            Soirée signal
          </Text>
        </View>
      </View>

      {/* Cover story + stack */}
      <Wrapper className="gap-6 py-10">
        <View className="flex-row items-end justify-between gap-4">
          <View>
            <Text className="font-[GreatVibes] text-3xl text-accent">
              Issue
            </Text>
            <Text className="font-[Anton] text-4xl uppercase tracking-[2px] text-fg">
              From the magazine
            </Text>
          </View>
          <Link href="/blog" asChild>
            <Pressable>
              <Text className="font-[Anton] text-[12px] uppercase tracking-[2px] text-accent">
                Archive →
              </Text>
            </Pressable>
          </Link>
        </View>

        {cover ? <BlogCard post={cover} variant="cover" /> : null}

        <View className="flex-row flex-wrap gap-4">
          {rest.map((post) => (
            <View key={post.slug} className="min-w-[260px] flex-1">
              <BlogCard post={post} variant="stack" />
            </View>
          ))}
        </View>
      </Wrapper>

      {/* Podcast rail */}
      <View className="border-t-2 border-border bg-black py-10">
        <Wrapper className="gap-4">
          <View className="flex-row items-end justify-between">
            <Text className="font-[Anton] text-4xl uppercase tracking-[2px] text-white">
              Interviews
            </Text>
            <Link href="/podcast" asChild>
              <Pressable>
                <Text className="font-[Anton] text-[12px] uppercase tracking-[2px] text-accent">
                  All episodes →
                </Text>
              </Pressable>
            </Link>
          </View>
          <View className="border-2 border-white">
            {episodes.map((ep) => (
              <View key={ep.id} className="bg-black">
                <PodcastCard episode={ep} />
              </View>
            ))}
          </View>
        </Wrapper>
      </View>
    </>
  );
}
