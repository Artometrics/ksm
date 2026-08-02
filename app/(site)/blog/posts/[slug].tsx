import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { ArticleBody } from "@/components/ArticleBody";
import { PageSeo } from "@/components/PageSeo";
import { assetUrl } from "@/lib/assets";
import {
  formatAuthorName,
  formatDate,
  getAdjacentPosts,
  getBlogPost,
  getBlogPosts,
} from "@/lib/content";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default function BlogPostScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <Wrapper className="gap-3 py-10">
        <Text className="font-[DMMono] text-3xl font-medium uppercase text-fg">
          Post not found
        </Text>
        <Link href="/blog">
          <Text className="font-[DMMono] uppercase tracking-[0.08em] text-accent">
            Back to blog
          </Text>
        </Link>
      </Wrapper>
    );
  }

  const hero = assetUrl(post.heroImage);
  const adjacent = getAdjacentPosts(post.slug);
  const author = post.author
    ? formatAuthorName(String(post.author))
    : "Staff";
  const tag = post.tags?.[0];

  return (
    <>
      <PageSeo
        title={post.title}
        description={post.description}
        path={`/blog/posts/${post.slug}`}
        image={post.heroImage || undefined}
        type="article"
      />
      {hero ? (
        <View className="relative h-[48vh] w-full overflow-hidden border-b border-border bg-black">
          <Image
            source={{ uri: hero }}
            className="absolute inset-0 h-full w-full"
            contentFit="cover"
          />
          <View className="absolute inset-0 bg-black/40" />
        </View>
      ) : null}
      <Wrapper variant="prose" className="gap-4 py-10">
        {tag ? (
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
            {tag}
          </Text>
        ) : null}
        <Text className="font-[DMMono] text-4xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-fg md:text-5xl">
          {post.title}
        </Text>
        <Text className="font-sans text-[19px] leading-7 text-subtle">
          {post.description}
        </Text>
        <Text className="font-[DMMono] text-[11px] uppercase tracking-[0.08em] text-subtle">
          {author} · {formatDate(post.pubDate)}
          {post.isLocked ? " · Members" : ""}
        </Text>
        <View className="mt-4 h-0.5 w-[120px] bg-accent-print" />
        <View className="mt-2">
          <ArticleBody html={post.body} />
        </View>
        <View className="mt-10 flex-row flex-wrap justify-between gap-4 border-t border-border pt-6">
          {adjacent.previous ? (
            <Link href={adjacent.previous.href as `/blog/posts/${string}`}>
              <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.06em] text-muted">
                ← {adjacent.previous.title}
              </Text>
            </Link>
          ) : (
            <View />
          )}
          {adjacent.next ? (
            <Link href={adjacent.next.href as `/blog/posts/${string}`}>
              <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.06em] text-muted">
                {adjacent.next.title} →
              </Text>
            </Link>
          ) : null}
        </View>
      </Wrapper>
    </>
  );
}
