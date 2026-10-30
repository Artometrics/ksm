import { Text } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";

export default function AuthorsIndex() {
  return (
    <>
      <Head>
        <title>People · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-3 py-8">
        <Text className="ksm-kicker">People</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          No author directory is published.
        </Text>
        <Text className="ksm-lede">
          Placeholder author files remain in the repo and are not listed.
        </Text>
      </Wrapper>
    </>
  );
}
