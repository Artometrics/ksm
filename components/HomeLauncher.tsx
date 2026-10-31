import { Text, View } from "react-native";
import { Link } from "expo-router";
import { getLaunchProjects, projectDetailPath } from "@/lib/projects";

/** Native fallback — full Spotify-style launcher on web. */
export function HomeLauncher() {
  const launchProjects = getLaunchProjects();

  return (
    <View className="gap-4">
      {launchProjects.map((item) => (
        <View key={item.id} className="gap-2">
          <Text className="ksm-card-title">{item.title}</Text>
          <a className="ksm-nav" href={item.href}>
            Open live
          </a>
          <Link href={projectDetailPath(item.id) as "/projects"}>
            <Text className="ksm-nav">Full story</Text>
          </Link>
        </View>
      ))}
    </View>
  );
}
