import Svg, { Circle, Rect } from "react-native-svg";
import { Colors } from "@/constants/Colors";

/** Crimson solar cross — circle with equal-armed cross. */
export function SunCrossMark({
  size = 28,
  color = Colors.red,
  accessibilityLabel = "KSM sun cross",
}: {
  size?: number;
  color?: string;
  accessibilityLabel?: string;
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      accessibilityLabel={accessibilityLabel}
    >
      <Circle
        cx={50}
        cy={50}
        r={38}
        stroke={color}
        strokeWidth={11}
        fill="none"
      />
      <Rect x={44.5} y={16} width={11} height={68} fill={color} />
      <Rect x={16} y={44.5} width={68} height={11} fill={color} />
    </Svg>
  );
}
