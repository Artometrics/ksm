import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { assetUrl } from "@/lib/assets";
import {
  formatAuthorName,
  formatDate,
  type BlogPost,
} from "@/lib/content";

export function BlogCard({
  post,
  variant = "row",
}: {
  post: BlogPost;
  variant?: "stack" | "row";
}) {
  const hero = assetUrl(post.heroImage);
  const author = post.author
    ? formatAuthorName(String(post.author))
    : "Staff";
  const tag = post.tags?.[0];
  const href = `/blog/posts/${post.slug}` as const;

  if (variant === "stack") {
    return (
      <Link href={href} asChild>
        <Pressable className="min-w-[260px] flex-1 gap-3 overflow-hidden border-b border-border pb-4">
          {hero ? (
            <Image
              source={{ uri: hero }}
              className="aspect-[16/10] w-full"
              contentFit="cover"
              transition={200}
              accessibilityLabel={post.title}
            />
          ) : null}
          <View className="gap-2">
            {tag ? (
              <Text className="text-[11px] font-medium uppercase tracking-[1.4px] text-accent">
                {tag}
              </Text>
            ) : null}
            <Text className="font-serif text-[22px] font-light leading-7 text-fg">
              {post.title}
            </Text>
            <Text
              className="font-sans text-[15px] leading-[22px] text-muted"
              numberOfLines={3}
            >
              {post.description}
            </Text>
            <Text className="mt-0.5 text-xs text-subtle">
              {author} · {formatDate(post.pubDate)}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable className="flex-row items-start justify-between gap-4 border-b border-border py-[18px]">
        <View className="flex-1 gap-1.5 pr-1">
          {tag ? (
            <Text className="text-[11px] font-medium uppercase tracking-[1.4px] text-accent">
              {tag}
            </Text>
          ) : null}
          <Text className="font-serif text-xl font-light leading-[26px] text-fg">
            {post.title}
          </Text>
          <Text
            className="font-sans text-[15px] leading-[22px] text-muted"
            numberOfLines={2}
          >
            {post.description}
          </Text>
          <Text className="mt-0.5 text-xs text-subtle">
            {formatDate(post.pubDate)}
          </Text>
        </View>
        {hero ? (
          <Image
            source={{ uri: hero }}
            className="h-24 w-24"
            contentFit="cover"
            transition={200}
            accessibilityLabel={post.title}
          />
        ) : null}
      </Pressable>
    </Link>
  );
}
