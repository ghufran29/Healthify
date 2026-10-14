import { View } from "react-native";
import { Body, Container, Icon } from "../components/ui";
import { colors, fonts, tw, useLayout } from "../theme";
const stats = [
  { value: "1M+", label: "Meals Delivered", icon: "leaf" },
  { value: "30K+", label: "Happy Customers", icon: "sprout" },
  { value: "4.8/5", label: "Customer Satisfaction", icon: "star" },
  { value: "550+", label: "Corporate Clients", icon: "users" },
] as const;
export default function StatsSection() {
  const { mobile } = useLayout();
  return (
    <View style={{ backgroundColor: "#F6F5EF" }}>
      <Container
        style={[
          tw.style("flex-row flex-wrap"),
          { paddingVertical: mobile ? 16 : 25 },
        ]}
      >
        {stats.map((s, i) => (
          <View
            key={s.label}
            style={[
              tw.style("flex-row items-center"),
              {
                width: mobile ? "50%" : "25%",
                paddingVertical: mobile ? 14 : 0,
                paddingHorizontal: mobile ? 8 : 25,
                gap: mobile ? 12 : 28,
                borderRightWidth: !mobile && i < 3 ? 1 : 0,
                borderColor: colors.line,
              },
            ]}
          >
            <Icon name={s.icon} size={mobile ? 29 : 37} />
            <View style={{ flexShrink: 1 }}>
              <Body
                style={{
                  fontFamily: fonts.headingBold,
                  fontSize: mobile ? 24 : 27,
                  lineHeight: 32,
                  color: colors.ink,
                }}
              >
                {s.value}
              </Body>
              <Body style={{ fontSize: 11, lineHeight: 17 }}>{s.label}</Body>
            </View>
          </View>
        ))}
      </Container>
    </View>
  );
}
