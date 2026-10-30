import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";

export default function CvScreen() {
  return (
    <>
      <Head>
        <title>CV · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <Text className="ksm-kicker">CV</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          Curriculum vitae
        </Text>
        <Text className="ksm-lede">
          A PDF can live at public/cv.pdf. No file is in the site yet, so this
          slot stays empty instead of linking a missing document.
        </Text>
        <View className="ksm-slot">
          <Text className="ksm-card-title">CV PDF</Text>
          <Text className="ksm-card-line">Empty until a file is added.</Text>
        </View>
        <a className="ksm-nav" href="https://github.com/kylesmcauliffe">
          GitHub profile
        </a>
      </Wrapper>
    </>
  );
}
