import { View } from "react-native";
import { Body, Button, Container, Eyebrow, Heading, Photo } from "./ui";
import { useLayout } from "../theme";
import { usePage } from "../context/PageContext";
export default function FinalCTA() {
  const { tablet } = useLayout();
  const { navigate } = usePage();
  return (
    <View style={{ backgroundColor: "#384621", overflow: "hidden" }}>
      <Photo
        source={require("../../assets/images/leaves.jpg")}
        label="Softly lit green leaves"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(18,36,8,0.38)",
        }}
      />
      <Container
        style={{
          paddingVertical: 27,
          flexDirection: tablet ? "column" : "row",
          gap: 24,
          alignItems: tablet ? "flex-start" : "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexShrink: 1 }}>
          <Eyebrow light>READY TO START?</Eyebrow>
          <Heading
            style={{
              fontSize: 30,
              lineHeight: 38,
              letterSpacing: -0.5,
              color: "white",
            }}
          >
            Transform Your Health, One Meal At A Time
          </Heading>
          <Body style={{ color: "#F2F2E5", fontSize: 14, marginTop: 7 }}>
            Fresh. Nutritious. Convenient. Join thousands of happy customers
            today.
          </Body>
        </View>
        <Button
          label="Get Started Today"
          variant="white"
          onPress={() => navigate("plans")}
          style={{ borderRadius: 14 }}
        />
      </Container>
    </View>
  );
}
