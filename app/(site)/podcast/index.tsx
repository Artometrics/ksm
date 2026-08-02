import { Text, View } from "react-native";
import { Wrapper } from "@/components/Wrapper";
import { PodcastCard } from "@/components/PodcastCard";
import { PageSeo } from "@/components/PageSeo";
import { getPodcastEpisodes } from "@/lib/content";

export default function PodcastIndex() {
  const episodes = getPodcastEpisodes();

  return (
    <>
      <PageSeo
        title="Podcast"
        description="Interviews with design engineers and creative technologists."
        path="/podcast"
      />
      <View className="border-b border-border bg-black py-12">
        <Wrapper className="gap-3">
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-accent">
            Listen
          </Text>
          <Text className="font-[Chomsky] text-5xl text-white md:text-7xl">
            Podcast
          </Text>
          <View className="h-0.5 w-[120px] bg-accent-print" />
          <Text className="mt-2 max-w-[40ch] font-sans text-[16px] leading-7 text-subtle">
            Long-form conversations with the people shaping digital products.
          </Text>
        </Wrapper>
      </View>
      <Wrapper className="gap-0 py-2">
        {episodes.map((ep) => (
          <PodcastCard key={ep.id} episode={ep} />
        ))}
      </Wrapper>
    </>
  );
}
