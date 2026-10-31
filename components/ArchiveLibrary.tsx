import { Text, View } from "react-native";
import { Link } from "expo-router";
import { ARCHIVE_ITEMS } from "@/data/archive";

/** Native fallback — full search UI on web. */
export function ArchiveLibrary() {
  return (
    <View className="gap-3">
      {ARCHIVE_ITEMS.map((item) => (
        <View key={item.id} className="ksm-slot gap-1">
          <Text className="ksm-card-title">{item.title}</Text>
          <Text className="ksm-card-line">{item.line}</Text>
        </View>
      ))}
      <Link href="/desk">
        <Text className="ksm-nav">Open desk</Text>
      </Link>
    </View>
  );
}
