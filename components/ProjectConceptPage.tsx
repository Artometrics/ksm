import { Text, View } from "react-native";
import { Link } from "expo-router";
import type { ProjectPage } from "@/data/project-pages";

export function ProjectConceptPage({ page }: { page: ProjectPage }) {
  return (
    <View className="gap-3 p-5">
      <Text className="ksm-headline">{page.title}</Text>
      <Text className="ksm-lede">{page.tagline}</Text>
      <Link href="/">
        <Text className="ksm-nav">Back</Text>
      </Link>
    </View>
  );
}
