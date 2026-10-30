import Svg, {
  Defs,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop,
} from "react-native-svg";

/**
 * Static ink wash for the home hero.
 * In the initial HTML, so it shows with JavaScript off and when motion is reduced.
 * Same palette as the Paper mesh: black, crimson, dried blood, warm paper.
 */
export function HeroInkWash() {
  return (
    <Svg
      pointerEvents="none"
      accessible={false}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <Defs>
        <RadialGradient id="ksmBleed" cx="16%" cy="90%" rx="62%" ry="70%">
          <Stop offset="0%" stopColor="#E60000" />
          <Stop offset="38%" stopColor="#5C0008" />
          <Stop offset="100%" stopColor="#5C0008" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="ksmPaper" cx="86%" cy="8%" rx="42%" ry="48%">
          <Stop offset="0%" stopColor="#F3E6D4" stopOpacity={0.22} />
          <Stop offset="70%" stopColor="#F3E6D4" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient id="ksmBand" x1="0%" y1="100%" x2="100%" y2="0%">
          <Stop offset="42%" stopColor="#E60000" stopOpacity={0} />
          <Stop offset="50%" stopColor="#E60000" stopOpacity={0.4} />
          <Stop offset="58%" stopColor="#E60000" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="ksmScrim" x1="0%" y1="100%" x2="70%" y2="0%">
          <Stop offset="0%" stopColor="#070707" stopOpacity={0.82} />
          <Stop offset="52%" stopColor="#070707" stopOpacity={0.42} />
          <Stop offset="100%" stopColor="#070707" stopOpacity={0.18} />
        </LinearGradient>
      </Defs>
      <Rect width="1440" height="900" fill="#070707" />
      <Rect width="1440" height="900" fill="url(#ksmBleed)" />
      <Rect width="1440" height="900" fill="url(#ksmPaper)" />
      <Rect width="1440" height="900" fill="url(#ksmBand)" />
      <Rect width="1440" height="900" fill="url(#ksmScrim)" />
    </Svg>
  );
}
