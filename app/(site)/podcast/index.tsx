import { Text } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";

export default function PodcastIndex() {
  return (
    <>
      <Head>
        <title>Audio · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-3 py-8">
        <Text className="ksm-kicker">Audio</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          No episodes are published here.
        </Text>
        <Text className="ksm-lede">
          Placeholder episode files remain in the repo and are not listed.
        </Text>
      </Wrapper>
    </>
  );
}
