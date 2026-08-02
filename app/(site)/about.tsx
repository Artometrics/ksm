import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";

export default function AboutScreen() {
  return (
    <>
      <PageSeo
        title="About"
        description="KSM — independent magazine and creative platform. Essays, posters, signal."
        path="/about"
      />
      <View className="border-b border-border bg-black py-12">
        <Wrapper className="gap-3">
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-accent">
            About
          </Text>
          <Text className="font-[Chomsky] text-5xl text-white md:text-7xl">
            KSM
          </Text>
          <View className="h-0.5 w-[120px] bg-accent-print" />
          <Text className="mt-2 max-w-[18ch] font-[DMMono] text-3xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-white md:text-5xl">
            Data has a shape.
          </Text>
        </Wrapper>
      </View>
      <Wrapper className="gap-6 py-12">
        <View className="flex-row flex-wrap gap-8">
          <Image
            source={{ uri: "/images/posters/cleopatra.jpg" }}
            className="aspect-[3/4] w-full max-w-[360px] border border-border"
            contentFit="cover"
          />
          <View className="min-w-[260px] flex-1 gap-4">
            <Text className="font-[DMMono] text-2xl font-medium uppercase tracking-[-0.01em] text-fg">
              Independent magazine. Creative platform.
            </Text>
            <Text className="max-w-[600px] font-sans text-[17px] leading-7 text-muted">
              KSM publishes essays, interviews, and graphic series with a
              Swiss/magazine hybrid voice — Kruger-blunt, no ornament. Black,
              white, and a spare editorial red.
            </Text>
            <Text className="max-w-[40ch] border-l-2 border-accent-print pl-5 font-[DMMono] text-lg font-medium leading-snug text-fg">
              The correlation was real. The causal story we told about it was
              not.
            </Text>
            <Text className="max-w-[600px] font-sans text-[17px] leading-7 text-muted">
              Blog for long-form. Posters for legends. One system across print,
              screen, and social.
            </Text>
          </View>
        </View>
      </Wrapper>
    </>
  );
}
