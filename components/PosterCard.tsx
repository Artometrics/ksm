import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import type { Poster } from "@/data/posters";

export function PosterCard({
  poster,
  variant = "grid",
}: {
  poster: Poster;
  variant?: "grid" | "hero";
}) {
  const href = `/posters/${poster.id}` as `/posters/${string}`;
  const src = poster.image;

  if (variant === "hero") {
    return (
      <Link href={href} asChild>
        <Pressable className="relative min-h-[70vh] w-full overflow-hidden bg-black">
          <Image
            source={{ uri: src }}
            className="absolute inset-0 h-full w-full"
            contentFit="cover"
            transition={300}
          />
          <View className="absolute inset-0 bg-black/35" />
          <View className="absolute bottom-0 left-0 right-0 gap-2 p-6 md:p-10">
            <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-accent">
              Legend · {poster.era}
            </Text>
            <View className="self-start bg-accent-print px-4 py-3">
              <Text className="font-[DMMono] text-3xl font-medium uppercase tracking-[-0.01em] text-white md:text-5xl">
                {poster.title}
              </Text>
            </View>
            <Text className="max-w-[40ch] font-sans text-[16px] leading-6 text-white/80">
              {poster.dek}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable className="min-w-[200px] flex-1 gap-0 overflow-hidden border border-[#222]">
        <View className="relative aspect-[3/4] w-full bg-[#111]">
          <Image
            source={{ uri: src }}
            className="absolute inset-0 h-full w-full"
            contentFit="cover"
            transition={200}
            accessibilityLabel={poster.title}
          />
          <View className="absolute bottom-0 left-0 right-0 bg-accent-print px-3 py-2.5">
            <Text className="font-[DMMono] text-[14px] font-medium uppercase tracking-[0.04em] text-white">
              {poster.subject}
            </Text>
          </View>
        </View>
        <View className="gap-1 bg-black px-3 py-3">
          <Text className="font-[DMMono] text-[10px] uppercase tracking-[0.08em] text-subtle">
            {poster.era}
          </Text>
          <Text
            className="font-sans text-[13px] leading-5 text-white/75"
            numberOfLines={2}
          >
            {poster.dek}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
