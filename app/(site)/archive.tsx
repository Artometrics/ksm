import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { ArchiveLibrary } from "@/components/ArchiveLibrary";

export default function ArchiveScreen() {
  return (
    <>
      <Head>
        <title>Archive · Kyle McAuliffe</title>
        <meta
          name="description"
          content="Searchable library of notes, assets, and project files."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-6 py-8">
        <View className="ksm-copy gap-3">
          <Text className="ksm-kicker">Archive</Text>
          <Text accessibilityRole="header" className="ksm-headline">
            Library
          </Text>
          <Text className="ksm-lede">
            Notes, on-site files, and pointers to older versions. Filter by kind or
            search the index.
          </Text>
        </View>
        <ArchiveLibrary />
      </Wrapper>
    </>
  );
}
