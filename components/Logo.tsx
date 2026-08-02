import { Text } from "react-native";
import { Link } from "expo-router";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" asChild>
      <Text
        accessibilityRole="header"
        className={["font-serif text-xl font-semibold tracking-tight text-fg", className]
          .filter(Boolean)
          .join(" ")}
      >
        Hemingway
      </Text>
    </Link>
  );
}
