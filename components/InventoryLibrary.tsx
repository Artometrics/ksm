import { Text, View } from "react-native";
import { Link } from "expo-router";
import { getInventoryItems } from "@/lib/inventory";

/** Native fallback — full search UI on web. */
export function InventoryLibrary() {
  const items = getInventoryItems().slice(0, 40);
  return (
    <View className="gap-3">
      {items.map((item) => (
        <View key={item.id} className="ksm-slot gap-1">
          <Text className="ksm-card-title">{item.title}</Text>
          <Text className="ksm-card-line">{item.tab}</Text>
        </View>
      ))}
      <Link href="/inventory">
        <Text className="ksm-nav">Open inventory</Text>
      </Link>
    </View>
  );
}
