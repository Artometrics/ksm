import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";

export default function AboutScreen() {
  return (
    <>
      <PageSeo
        title="About"
        description="KSM — essays and interviews with an edge. Cultural signal, no fluff."
        path="/about"
      />
      <View className="border-b-2 border-border bg-accent px-0 py-10">
        <Wrapper>
          <Text className="font-[GreatVibes] text-4xl text-black">About</Text>
          <Text className="mt-2 max-w-[14ch] font-[Anton] text-5xl uppercase leading-[0.95] tracking-[1px] text-black md:text-7xl">
            Insanity is comfort
          </Text>
        </Wrapper>
      </View>
      <Wrapper className="gap-6 py-10">
        <View className="flex-row flex-wrap gap-6">
          <Image
            source={{ uri: "/images/brand/poster-body.png" }}
            className="aspect-[3/4] w-full max-w-[360px] border-2 border-border"
            contentFit="cover"
          />
          <View className="min-w-[260px] flex-1 gap-4">
            <Text className="font-[Anton] text-3xl uppercase tracking-[1px] text-fg">
              Design conversations, written sharp.
            </Text>
            <Text className="font-sans text-base leading-7 text-muted">
              KSM publishes in-depth essays and interviews with the people
              shaping culture and product. The magazine and podcast share one
              voice: clear writing, practical insight, and zero comfort padding.
            </Text>
            <Text className="font-sans text-base leading-7 text-muted">
              High contrast on purpose. If it looks loud, that is the point.
            </Text>
          </View>
        </View>
      </Wrapper>
    </>
  );
}
