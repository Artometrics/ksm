import { Text, View } from "react-native";
import projects from "@/data/projects.json";

export function ProjectDeck() {
  return (
    <View className="gap-3">
      {projects.map((item, index) => (
        <Text key={item.id}>
          {index + 1}. {item.title}
        </Text>
      ))}
    </View>
  );
}
