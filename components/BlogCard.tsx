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
  variant?: "stack" | "row" | "cover" | "newsstand" | "latest";
}) {
  const hero = assetUrl(post.heroImage);
  const author = post.author
    ? formatAuthorName(String(post.author))
    : "Staff";
  const tag = post.tags?.[0];
  const href = `/blog/posts/${post.slug}` as const;

  if (variant === "cover") {
    return (
      <Link href={href} asChild>
        <Pressable className="relative aspect-[16/9] w-full overflow-hidden bg-black">
          {hero ? (
            <Image
              source={{ uri: hero }}
              className="absolute inset-0 h-full w-full"
              contentFit="cover"
              transition={200}
            />
          ) : null}
          <View className="absolute inset-0 bg-black/40" />
          <View className="absolute inset-0 justify-end gap-2 p-6">
            {tag ? (
              <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                {tag}
              </Text>
            ) : null}
            <Text className="font-[DMMono] text-3xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-white md:text-4xl">
              {post.title}
            </Text>
            <Text className="font-[DMMono] text-[11px] uppercase tracking-[0.08em] text-white/60">
              {author} · {formatDate(post.pubDate)}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  if (variant === "newsstand") {
    return (
      <Link href={href} asChild>
        <Pressable className="relative aspect-[3/4] w-full overflow-hidden border border-[#222] bg-[#111]">
          {hero ? (
            <Image
              source={{ uri: hero }}
              className="absolute inset-0 h-full w-full"
              contentFit="cover"
              transition={200}
            />
          ) : (
            <View className="absolute inset-0 bg-accent-print" />
          )}
          <View className="absolute left-0 right-0 top-0 bg-black/75 px-2.5 py-2">
            {tag ? (
              <Text className="font-[DMMono] text-[10px] uppercase tracking-[0.08em] text-accent">
                {tag}
              </Text>
            ) : null}
            <Text
              className="font-[DMMono] text-[13px] font-medium text-white"
              numberOfLines={2}
            >
              {post.title}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  if (variant === "latest") {
    return (
      <Link href={href} asChild>
        <Pressable className="border-b border-[#262626] py-4">
          <Text className="font-sans text-[15px] font-medium leading-snug text-white">
            {post.title}
          </Text>
          <Text className="mt-1 font-[DMMono] text-[11px] text-subtle">
            {formatDate(post.pubDate)}
          </Text>
        </Pressable>
      </Link>
    );
  }

  if (variant === "stack") {
    return (
      <Link href={href} asChild>
        <Pressable className="min-w-[240px] flex-1 gap-3">
          {hero ? (
            <Image
              source={{ uri: hero }}
              className="aspect-[4/3] w-full"
              contentFit="cover"
              transition={200}
              accessibilityLabel={post.title}
            />
          ) : (
            <View className="aspect-[4/3] w-full bg-accent-print" />
          )}
          <View className="gap-2">
            {tag ? (
              <View className="self-start bg-accent-print px-2 py-0.5">
                <Text className="font-[DMMono] text-[10px] uppercase tracking-[0.06em] text-white">
                  {tag}
                </Text>
              </View>
            ) : null}
            <Text className="font-sans text-[17px] font-bold leading-snug text-fg">
              {post.title}
            </Text>
            <Text
              className="font-sans text-[14px] leading-5 text-subtle"
              numberOfLines={3}
            >
              {post.description}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable className="flex-row items-stretch gap-0 border-b border-border">
        <View className="flex-1 justify-center gap-1.5 py-6 pr-4">
          {tag ? (
            <Text className="font-[DMMono] text-[11px] uppercase tracking-[0.08em] text-accent">
              {tag}
            </Text>
          ) : null}
          <Text className="font-[DMMono] text-2xl font-medium uppercase leading-7 tracking-[-0.01em] text-fg">
            {post.title}
          </Text>
          <Text
            className="font-sans text-[15px] leading-6 text-subtle"
            numberOfLines={2}
          >
            {post.description}
          </Text>
          <Text className="mt-1 font-[DMMono] text-[11px] uppercase tracking-[0.06em] text-subtle">
            {formatDate(post.pubDate)} · {author}
          </Text>
        </View>
        {hero ? (
          <Image
            source={{ uri: hero }}
            className="h-[140px] w-[120px]"
            contentFit="cover"
            transition={200}
            accessibilityLabel={post.title}
          />
        ) : (
          <View className="h-[140px] w-[120px] bg-accent-print" />
        )}
      </Pressable>
    </Link>
  );
}
