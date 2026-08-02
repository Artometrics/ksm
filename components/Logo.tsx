import { Text, View } from "react-native";
import { Link } from "expo-router";

export function Logo({
  className,
  variant = "display",
}: {
  className?: string;
  variant?: "display" | "mark" | "block";
}) {
  if (variant === "block") {
    return (
      <Link href="/" asChild>
        <View
          accessibilityRole="header"
          className={["bg-accent-print px-2.5 py-1.5", className]
            .filter(Boolean)
            .join(" ")}
        >
          <Text className="font-[DMMono] text-[13px] font-medium tracking-[0.12em] text-white">
            K S M
          </Text>
        </View>
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href="/" asChild>
        <Text
          accessibilityRole="header"
          className={[
            "font-[DMMono] text-sm font-medium uppercase tracking-[0.12em] text-fg",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          KSM
        </Text>
      </Link>
    );
  }

  return (
    <Link href="/" asChild>
      <View
        accessibilityRole="header"
        className={["flex-row items-center gap-3", className]
          .filter(Boolean)
          .join(" ")}
      >
        <View className="bg-accent-print px-2.5 py-1.5">
          <Text className="font-[DMMono] text-[13px] font-medium tracking-[0.12em] text-white">
            K S M
          </Text>
        </View>
        <Text className="font-[Chomsky] text-[26px] leading-none text-fg">
          KSM
        </Text>
      </View>
    </Link>
  );
}
