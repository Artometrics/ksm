import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { SunCrossMark } from "@/components/SunCrossMark";

export function Logo({
  className,
  variant = "display",
  markSize,
  inverted = false,
}: {
  className?: string;
  variant?: "display" | "gothic" | "mark";
  markSize?: number;
  /** White wordmark for locked black chrome */
  inverted?: boolean;
}) {
  const size =
    markSize ??
    (variant === "gothic" ? 36 : variant === "mark" ? 22 : 28);

  const wordmarkColor = inverted ? "text-white" : "text-fg";
  const textClass =
    variant === "gothic"
      ? "font-[UnifrakturCook] text-4xl text-accent"
      : variant === "mark"
        ? `font-[Anton] text-sm uppercase tracking-[3px] ${wordmarkColor}`
        : `font-[Anton] text-2xl uppercase tracking-[2px] ${wordmarkColor}`;

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
