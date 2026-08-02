import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { BlogCard } from "@/components/BlogCard";
import { PodcastCard } from "@/components/PodcastCard";
import { PageSeo } from "@/components/PageSeo";
import { getRecentEpisodes, getRecentPosts } from "@/lib/content";
import { getPosters } from "@/data/posters";

export default function HomeScreen() {
  const posts = getRecentPosts(8);
  const episodes = getRecentEpisodes(3);
  const cover = posts[0];
  const latest = posts.slice(1, 5);
  const reports = posts.slice(0, 3);
  const columns = posts.slice(3, 7);
  const editions = getPosters().slice(0, 4);

  return (
    <>
      <PageSeo
        title="KSM"
        description="Independent magazine and creative platform. Essays, posters, and cultural signal."
        path="/"
        image={editions[0]?.image}
      />

      {/* Newsstand masthead */}
      <View className="bg-black">
        <View className="items-center px-6 pb-2 pt-12">
          <View className="border-[6px] border-[#1a1a1a] bg-[#0a0a0a] px-10 py-3">
            <Text className="font-[DMMono] text-3xl font-medium uppercase tracking-[0.15em] text-white md:text-5xl">
              Newsstand
            </Text>
          </View>
          <Text className="mt-4 max-w-[40ch] text-center font-sans text-[15px] text-subtle">
            Pick a cover. Essays on culture, power, and the creative economy —
            plus legend posters.
          </Text>
        </View>

        {/* Edition covers grid */}
        <Wrapper className="py-8">
          <View className="border-[3px] border-[#2b2b2b] bg-[#0c0c0c] p-4">
            <View className="flex-row flex-wrap gap-0.5">
              {editions.map((poster, i) => (
                <Link
                  key={poster.id}
                  href={`/posters/${poster.id}` as `/posters/${string}`}
                  asChild
                >
                  <Pressable className="relative aspect-[3/4] w-1/2 border border-[#222] md:w-1/4">
                    <Image
                      source={{ uri: poster.image }}
                      className="absolute inset-0 h-full w-full"
                      contentFit="cover"
                      transition={250}
                    />
                    <View className="absolute left-0 right-0 top-0 bg-black/75 px-2.5 py-2">
                      <Text className="font-[DMMono] text-[10px] uppercase tracking-[0.08em] text-accent">
                        Edition 0{i + 1}
                      </Text>
                      <Text className="font-[DMMono] text-[13px] font-medium text-white">
                        {poster.subject}
                      </Text>
                    </View>
                  </Pressable>
                </Link>
              ))}
            </View>
          </View>
        </Wrapper>

        {/* Feature + Latest */}
        <Wrapper className="gap-10 pb-16 md:flex-row">
          <View className="flex-[1.6]">
            {cover ? <BlogCard post={cover} variant="cover" /> : null}
          </View>
          <View className="flex-1">
            <Text className="border-b border-[#333] pb-3 font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-subtle">
              Latest
            </Text>
            {latest.map((post) => (
              <BlogCard key={post.slug} post={post} variant="latest" />
            ))}
            <Link href="/blog" asChild>
              <Pressable className="mt-4">
                <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                  Read all →
                </Text>
              </Pressable>
            </Link>
          </View>
        </Wrapper>
      </View>

      {/* Reports */}
      <Wrapper className="gap-7 py-14">
        <Text className="border-b-2 border-border pb-4 font-[DMMono] text-2xl font-medium uppercase tracking-[0.02em] text-fg md:text-[28px]">
          Reports
        </Text>
        <View className="flex-row flex-wrap gap-7">
          {reports.map((post) => (
            <View key={post.slug} className="min-w-[240px] flex-1">
              <BlogCard post={post} variant="stack" />
            </View>
          ))}
        </View>
      </Wrapper>

      {/* Posters rail */}
      <View className="border-y border-border bg-black py-14">
        <Wrapper className="gap-6">
          <View className="flex-row items-end justify-between gap-4 border-b-2 border-[#333] pb-4">
            <View>
              <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                Graphic
              </Text>
              <Text className="font-[DMMono] text-2xl font-medium uppercase tracking-[0.02em] text-white md:text-[28px]">
                Legends · Posters
              </Text>
            </View>
            <Link href="/posters" asChild>
              <Pressable>
                <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                  Gallery →
                </Text>
              </Pressable>
            </Link>
          </View>
          <View className="flex-row flex-wrap gap-3">
            {getPosters().map((poster) => (
              <Link
                key={poster.id}
                href={`/posters/${poster.id}` as `/posters/${string}`}
                asChild
              >
                <Pressable className="min-w-[140px] flex-1 gap-2">
                  <Image
                    source={{ uri: poster.image }}
                    className="aspect-[3/4] w-full"
                    contentFit="cover"
                    transition={200}
                  />
                  <Text className="font-[DMMono] text-[12px] font-medium uppercase tracking-[0.04em] text-white">
                    {poster.subject}
                  </Text>
                </Pressable>
              </Link>
            ))}
          </View>
        </Wrapper>
      </View>

      {/* Columns */}
      <Wrapper className="gap-7 py-14">
        <View className="flex-row items-baseline justify-between border-b-2 border-border pb-4">
          <Text className="font-[DMMono] text-2xl font-medium uppercase tracking-[0.02em] text-fg md:text-[28px]">
            Columns
          </Text>
          <Link href="/blog" asChild>
            <Pressable>
              <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                Read all →
              </Text>
            </Pressable>
          </Link>
        </View>
        <View className="flex-row flex-wrap gap-5">
          {columns.map((post) => (
            <View key={post.slug} className="min-w-[160px] flex-1 gap-2.5">
              <BlogCard post={post} variant="stack" />
            </View>
          ))}
        </View>
      </Wrapper>

      {/* Podcast */}
      <View className="border-t border-border bg-black py-14">
        <Wrapper className="gap-4">
          <View className="flex-row items-end justify-between">
            <Text className="font-[DMMono] text-2xl font-medium uppercase tracking-[0.02em] text-white md:text-[28px]">
              Interviews
            </Text>
            <Link href="/podcast" asChild>
              <Pressable>
                <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                  All episodes →
                </Text>
              </Pressable>
            </Link>
          </View>
          <View className="border border-[#333]">
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
