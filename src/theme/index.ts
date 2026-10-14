import { create } from "twrnc";
import { useWindowDimensions } from "react-native";
export const colors = {
  forest: "#122E24",
  olive: "#596B29",
  cream: "#FCFBF8",
  pale: "#F1F2E7",
  ink: "#172B25",
  body: "#41453E",
  line: "#E6E5DC",
  gold: "#FFAD00",
};
export const fonts = {
  body: "DMSans",
  medium: "DMSansMedium",
  bold: "DMSansBold",
  heading: "Lora",
  headingBold: "LoraBold",
};
export const tw = create({
  theme: {
    extend: {
      colors,
      fontFamily: { sans: [fonts.body], serif: [fonts.heading] },
    },
  },
});
export const shadow = { boxShadow: "0 3px 9px rgba(25,42,25,0.09)" };
export function useLayout() {
  const { width } = useWindowDimensions();
  return {
    width,
    mobile: width < 640,
    tablet: width < 1100,
    compact: width < 1100,
    container: Math.min(1160, width >= 1000 ? width * 0.8 : width - 40),
    wide: Math.min(1210, width >= 1000 ? width * 0.84 : width - 40),
  };
}
