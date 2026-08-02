import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { SunCrossMark } from "@/components/SunCrossMark";

export function Logo({
  className,
  variant = "display",
  markSize,
}: {
  className?: string;
  variant?: "display" | "gothic" | "mark";
  markSize?: number;
}) {
  const size =
    markSize ??
    (variant === "gothic" ? 36 : variant === "mark" ? 22 : 28);

  const textClass =
    variant === "gothic"
      ? "font-[UnifrakturCook] text-4xl text-accent"
      : variant === "mark"
        ? "font-[Anton] text-sm uppercase tracking-[3px] text-fg"
        : "font-[Anton] text-2xl uppercase tracking-[2px] text-fg";

  return (
    <Link href="/" asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel="KSM home"
        className={["flex-row items-center gap-2", className]
          .filter(Boolean)
          .join(" ")}
      >
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <SunCrossMark size={size} />
        </View>
        {variant !== "mark" ? (
          <Text className={textClass}>
            {variant === "gothic" ? "ksm" : "KSM"}
          </Text>
        ) : null}
      </Pressable>
    </Link>
  );
}
