import { Text, View } from "react-native";
import { Link } from "expo-router";
import type { ProjectPage } from "@/data/project-pages";

export function ProjectConceptPage(_props: { page?: ProjectPage; slug?: string }) {
  const title = _props.page?.title ?? "Project";
  return (
    <View className="gap-3 p-5">
      <Text className="ksm-headline">{title}</Text>
      <Link href="/projects">
        <Text className="ksm-nav">Back</Text>
      </Link>
    </View>
  );
}
