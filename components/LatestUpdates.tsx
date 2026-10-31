import { Text, View } from "react-native";
import { NOW_UPDATES } from "@/data/now";

type Props = {
  limit?: number;
  showHeading?: boolean;
};

export function LatestUpdates({ limit = 3, showHeading = true }: Props) {
  const items = NOW_UPDATES.slice(0, limit);

  return (
    <View className="gap-3">
      {showHeading ? (
        <Text accessibilityRole="header" className="ksm-section">
          Latest updates
        </Text>
      ) : null}
      {items.map((item) => (
        <View key={item.href} className="gap-1">
          <Text className="ksm-card-year">{item.date}</Text>
          <Text className="ksm-lede">{item.text}</Text>
          <a className="ksm-nav" href={item.href}>
            Source commit
          </a>
        </View>
      ))}
    </View>
  );
}
