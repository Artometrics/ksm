import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { NOW_UPDATES } from "@/data/now";

export default function NowScreen() {
  return (
    <>
      <Head>
        <title>Now · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <Text className="ksm-kicker">Now</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          What the public repos show lately.
        </Text>
        <Text className="ksm-lede">
          Dates below are commit dates, not a diary. This route stays available; the
          Home tab also surfaces a short status blurb and latest updates.
        </Text>
        <View className="gap-4">
          {NOW_UPDATES.map((item) => (
            <View key={item.href} className="gap-1">
              <Text className="ksm-card-year">{item.date}</Text>
              <Text className="ksm-lede">{item.text}</Text>
              <a className="ksm-nav" href={item.href}>
                Source commit
              </a>
            </View>
          ))}
        </View>
      </Wrapper>
    </>
  );
}
