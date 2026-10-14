import { View } from "react-native";
import { Body, Container, Icon, SectionHeader } from "../components/ui";
import { colors, fonts, tw, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
const steps = [
  {
    title: "Choose Your Plan",
    text: "Select the meal plan that fits your goals.",
    icon: "person",
  },
  {
    title: "We Prepare Fresh Meals",
    text: "Our chefs prepare nutritious meals with care.",
    icon: "salad",
  },
  {
    title: "Enjoy Convenient Delivery",
    text: "Receive your meals and enjoy a healthier you.",
    icon: "truck",
  },
] as const;
export default function ProcessSection() {
  const { tablet } = useLayout();
  const { navigate } = usePage();
  return (
    <View style={{ backgroundColor: "#FAFAF7", paddingVertical: 15 }}>
      <Container>
        <SectionHeader
          eyebrow="OUR ADVANTAGES"
          title="Healthy Eating in 3 Simple Steps"
          action="It's Easy to Get Started"
          onAction={() => navigate("plans")}
        />
        <View
          style={{
            flexDirection: tablet ? "column" : "row",
            gap: tablet ? 26 : 24,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {steps.map((s, i) => (
            <View
              key={s.title}
              style={[tw.style("flex-row items-center"), { flex: 1, gap: 22 }]}
            >
              <View
                style={{
                  width: 51,
                  height: 51,
                  borderRadius: 26,
                  backgroundColor: "#E1E3D4",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Body
                  style={{
                    fontFamily: fonts.headingBold,
                    fontSize: 28,
                    lineHeight: 35,
                    color: colors.ink,
                  }}
                >
                  {i + 1}
                </Body>
              </View>
              <Icon name={s.icon} size={40} />
              <View style={{ flex: 1 }}>
                <Body
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: 14,
                    color: colors.ink,
                    marginBottom: 5,
                  }}
                >
                  {s.title}
                </Body>
                <Body style={{ fontSize: 12, lineHeight: 18 }}>{s.text}</Body>
              </View>
              {i < 2 && !tablet && (
                <Icon name="arrow" size={24} color="#68654B" />
              )}
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}
