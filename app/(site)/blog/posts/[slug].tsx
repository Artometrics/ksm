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
        <Text className="font-serif text-[36px] font-light text-fg">
          Post not found
        </Text>
        <Link href="/blog">
          <Text className="text-accent">Back to magazine</Text>
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
      <Wrapper variant="prose" className="gap-4 py-10">
        {tag ? (
          <Text className="text-xs font-medium uppercase tracking-[1.8px] text-accent">
            {tag}
          </Text>
        ) : null}
        <Text className="font-serif text-4xl font-light leading-tight text-fg">
          {post.title}
        </Text>
        <Text className="font-sans text-base leading-6 text-muted">
          {post.description}
        </Text>
        <Text className="text-xs text-subtle">
          {author} · {formatDate(post.pubDate)}
          {post.isLocked ? " · Members" : ""}
        </Text>
        {hero ? (
          <Image
            source={{ uri: hero }}
            className="mt-2 aspect-[16/10] w-full"
            contentFit="cover"
            transition={200}
            accessibilityLabel={post.title}
          />
        ) : null}
        <View className="mt-4">
          <ArticleBody html={post.body} />
        </View>
        <View className="mt-10 flex-row flex-wrap justify-between gap-4 border-t border-border pt-6">
          {adjacent.previous ? (
            <Link href={adjacent.previous.href as `/blog/posts/${string}`}>
              <Text className="text-sm text-muted">← {adjacent.previous.title}</Text>
            </Link>
          ) : (
            <View />
          )}
          {adjacent.next ? (
            <Link href={adjacent.next.href as `/blog/posts/${string}`}>
              <Text className="text-sm text-muted">{adjacent.next.title} →</Text>
            </Link>
          ) : null}
        </View>
      </Wrapper>
    </>
  );
}
