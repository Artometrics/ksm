import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { BlogCard } from "@/components/BlogCard";
import { PodcastCard } from "@/components/PodcastCard";
import { PageSeo } from "@/components/PageSeo";
import { getRecentEpisodes, getRecentPosts } from "@/lib/content";

export default function HomeScreen() {
  const posts = getRecentPosts(4);
  const episodes = getRecentEpisodes(3);

  return (
    <>
      <PageSeo
        title="Hemingway"
        description="Innovative design conversations — magazine essays and podcast interviews with design engineers."
        path="/"
      />

      <Wrapper className="justify-center py-16 md:py-24">
        <Text className="max-w-4xl font-serif text-3xl font-light leading-snug text-muted md:text-5xl md:leading-tight">
          Welcome to{" "}
          <Text className="text-fg">Innovative Design Conversations</Text>,
          where creativity meets engineering. Join us for insightful interviews
          and podcasts that explore the minds of design engineers —
        </Text>
      </Wrapper>

      <Wrapper className="gap-3 pb-12">
        <View className="mb-2 flex-row items-end justify-between">
          <Text className="font-serif text-2xl font-light text-fg">
            From the magazine
          </Text>
          <Link href="/blog" asChild>
            <Pressable>
              <Text className="text-xs font-medium uppercase tracking-wide text-accent">
                View all →
              </Text>
            </Pressable>
          </Link>
        </View>
        <View className="flex-row flex-wrap gap-6">
          {posts.map((post) => (
            <View key={post.slug} className="min-w-[280px] flex-1">
              <BlogCard post={post} variant="stack" />
            </View>
          ))}
        </View>
      </Wrapper>

      <Wrapper className="gap-3 pb-16">
        <View className="mb-2 flex-row items-end justify-between">
          <Text className="font-serif text-2xl font-light text-fg">
            Latest interviews
          </Text>
          <Link href="/podcast" asChild>
            <Pressable>
              <Text className="text-xs font-medium uppercase tracking-wide text-accent">
                View all →
              </Text>
            </Pressable>
          </Link>
        </View>
        <View>
          {episodes.map((ep) => (
            <PodcastCard key={ep.id} episode={ep} />
          ))}
        </View>
      </Wrapper>
    </>
  );
}
