import { Text, View } from "react-native";
import { Wrapper } from "@/components/Wrapper";
import { PodcastCard } from "@/components/PodcastCard";
import { PageSeo } from "@/components/PageSeo";
import { getPodcastEpisodes } from "@/lib/content";

export default function PodcastIndex() {
  const episodes = getPodcastEpisodes();

  return (
    <Wrapper className="gap-3 py-10">
      <PageSeo
        title="Podcast"
        description="Interviews with design engineers and creative technologists."
        path="/podcast"
      />
      <Text className="text-xs font-medium uppercase tracking-[1.8px] text-accent">
        Listen
      </Text>
      <Text className="font-serif text-[40px] font-light tracking-tight text-fg">
        Podcast
      </Text>
      <Text className="mb-2 max-w-[560px] font-sans text-[17px] leading-[26px] text-muted">
        Long-form conversations with the people shaping digital products.
      </Text>
      <View className="mb-1 mt-2 h-px bg-border" />
      <View>
        {episodes.map((ep) => (
          <PodcastCard key={ep.id} episode={ep} />
        ))}
      </View>
    </Wrapper>
  );
}
