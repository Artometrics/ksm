import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { assetUrl } from "@/lib/assets";
import { formatDate, type PodcastEpisode } from "@/lib/content";

export function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  const cover =
    assetUrl(
      typeof episode.image === "object" && episode.image?.url
        ? episode.image.url
        : typeof episode.image === "string"
          ? episode.image
          : undefined,
    ) ?? undefined;
  const href = `/podcast/interviews/${episode.id}` as const;

  return (
    <Link href={href} asChild>
      <Pressable className="flex-row items-start gap-4 border-b border-border py-[18px]">
        {cover ? (
          <Image
            source={{ uri: cover }}
            className="h-20 w-20"
            contentFit="cover"
            transition={200}
            accessibilityLabel={episode.title}
          />
        ) : null}
        <View className="flex-1 gap-1">
          {episode.episodeNumber != null ? (
            <Text className="text-[11px] font-medium uppercase tracking-[1.4px] text-accent">
              Episode {episode.episodeNumber}
              {episode.duration ? ` · ${episode.duration}` : ""}
            </Text>
          ) : null}
          <Text className="font-serif text-xl font-light leading-[26px] text-fg">
            {episode.title}
          </Text>
          <Text
            className="font-sans text-[15px] leading-[22px] text-muted"
            numberOfLines={2}
          >
            {episode.description}
          </Text>
          <Text className="mt-0.5 text-xs text-subtle">
            {formatDate(episode.pubDate)}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
