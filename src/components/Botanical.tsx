import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
export default function Botanical() {
  return (
    <View
      pointerEvents="none"
      aria-hidden
      style={{
        position: "absolute",
        right: -100,
        top: 60,
        width: 150,
        height: 285,
        opacity: 0.2,
      }}
    >
      <Svg width="150" height="285" viewBox="0 0 150 285" fill="none">
        <Path
          d="M148 280C105 216 72 144 67 16M116 222C79 194 41 188 10 177C45 169 95 179 116 222ZM96 181C62 154 29 135 2 126C40 115 81 137 96 181ZM81 136C54 106 24 77 8 60C48 65 73 93 81 136ZM70 93C50 66 48 33 52 4C77 28 84 60 70 93ZM89 166C86 114 99 78 110 57C127 102 114 141 89 166ZM117 224C106 177 125 145 142 124C149 173 140 203 117 224Z"
          stroke="#ADB5A3"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
}
