import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { BlogCard } from "@/components/BlogCard";
import { PageSeo } from "@/components/PageSeo";
import { assetUrl } from "@/lib/assets";
import {
  formatAuthorName,
  formatDate,
  getBlogPosts,
} from "@/lib/content";

export default function BlogIndex() {
  const posts = getBlogPosts();
  const featured = posts[0];
  const rest = posts.slice(1);
  const hero = featured ? assetUrl(featured.heroImage) : null;

  return (
    <>
      <PageSeo
        title="Blog"
        description="Pick a cover. Essays on culture, power, design systems, and craft."
        path="/blog"
      />

      {/* Newsstand header — artometrics-style */}
      <View className="border-b border-border bg-black py-12">
        <Wrapper className="gap-3">
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-accent">
            Archive
          </Text>
          <Text className="font-[Chomsky] text-5xl text-white md:text-7xl">
            Newsstand
          </Text>
          <View className="h-0.5 w-[120px] bg-accent-print" />
          <Text className="mt-2 max-w-[42ch] font-sans text-[17px] leading-7 text-subtle">
            Pick a cover. Reports on culture, power, and the creative economy.
          </Text>
        </Wrapper>
      </View>

      {/* Featured cover story */}
      {featured ? (
        <View className="border-b border-border bg-black">
          <Wrapper className="py-10">
            <Link href={`/blog/posts/${featured.slug}`} asChild>
              <Pressable className="gap-6 md:flex-row">
                <View className="relative aspect-[4/3] flex-[1.4] overflow-hidden bg-[#111] md:aspect-[16/10]">
                  {hero ? (
                    <Image
                      source={{ uri: hero }}
                      className="absolute inset-0 h-full w-full"
                      contentFit="cover"
                      transition={250}
                    />
                  ) : null}
                </View>
                <View className="flex-1 justify-center gap-3">
                  {featured.tags?.[0] ? (
                    <View className="self-start bg-accent-print px-2 py-0.5">
                      <Text className="font-[DMMono] text-[10px] uppercase tracking-[0.06em] text-white">
                        {featured.tags[0]}
                      </Text>
                    </View>
                  ) : null}
                  <Text className="font-[DMMono] text-3xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-white md:text-4xl">
                    {featured.title}
                  </Text>
                  <Text className="font-sans text-[17px] leading-7 text-subtle">
                    {featured.description}
                  </Text>
                  <Text className="font-[DMMono] text-[11px] uppercase tracking-[0.08em] text-subtle">
                    {featured.author
                      ? formatAuthorName(String(featured.author))
                      : "Staff"}{" "}
                    · {formatDate(featured.pubDate)}
                  </Text>
                </View>
              </Pressable>
            </Link>
          </Wrapper>
        </View>
      ) : null}

      {/* Cover grid */}
      <Wrapper className="gap-6 py-12">
        <Text className="border-b-2 border-border pb-4 font-[DMMono] text-xl font-medium uppercase tracking-[0.02em] text-fg">
          All covers
        </Text>
        <View className="flex-row flex-wrap gap-4">
          {rest.map((post) => (
            <View key={post.slug} className="min-w-[200px] w-[47%] flex-grow md:w-[22%]">
              <BlogCard post={post} variant="newsstand" />
            </View>
          ))}
        </View>
      </Wrapper>

      {/* Long-form list */}
      <Wrapper className="gap-0 pb-16">
        <Text className="mb-2 border-b-2 border-border pb-4 font-[DMMono] text-xl font-medium uppercase tracking-[0.02em] text-fg">
          Index
        </Text>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} variant="row" />
        ))}
      </Wrapper>
    </>
  );
}
