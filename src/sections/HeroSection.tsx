import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Body,
  Button,
  Container,
  Heading,
  Icon,
  Photo,
} from "../components/ui";
import { colors, fonts, shadow, tw, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
export default function HeroSection() {
  const { tablet, mobile } = useLayout();
  const { navigate } = usePage();
  return (
    <View style={{ backgroundColor: "#F6F5F1", overflow: "hidden" }}>
      {!tablet && (
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "60%",
          }}
        >
          <Photo
            source={require("../../assets/images/hero-v2.jpg")}
            label="Grilled chicken, avocado, cherry tomatoes and greens in a ceramic bowl"
            style={{ width: "100%", height: "100%" }}
          />
          <LinearGradient
            colors={["#F6F5F1", "rgba(246,245,241,0)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.24]}
            style={{ position: "absolute", inset: 0 }}
          />
        </View>
      )}
      <Container
        style={{
          minHeight: tablet ? undefined : 414,
          paddingTop: tablet ? 36 : 34,
          paddingBottom: tablet ? 28 : 25,
        }}
      >
        <View style={{ width: tablet ? "100%" : "49%" }}>
          <Heading
            level={1}
            style={{
              fontFamily: fonts.headingBold,
              fontSize: mobile ? 44 : 60,
              lineHeight: mobile ? 49 : 63,
              letterSpacing: -2,
            }}
          >
            Healthy Meals{"\n"}
            <Text style={{ color: colors.olive }}>Happier Lives</Text>
          </Heading>
          <Body
            style={{
              fontSize: mobile ? 16 : 19,
              lineHeight: 25,
              letterSpacing: 0.5,
              marginTop: 16,
              color: "#292C26",
            }}
          >
            Fresh. Nutritious. Convenient. Delivered to You.
          </Body>
          <Body style={{ maxWidth: 445, marginTop: 12, lineHeight: 22 }}>
            At Healthify, we make healthy eating simple and enjoyable with
            chef-prepared meals, customized plans and a commitment to your
            wellness goals.
          </Body>
          <View
            style={[tw.style("flex-row flex-wrap"), { gap: 17, marginTop: 24 }]}
          >
            <Button
              label="Explore Meal Plans"
              onPress={() => navigate("plans")}
            />
            <Button
              label="Learn More"
              variant="outline"
              arrow={false}
              onPress={() => navigate("about")}
            />
          </View>
          <View
            style={[
              tw.style("flex-row flex-wrap"),
              { gap: mobile ? 15 : 22, marginTop: 21 },
            ]}
          >
            {(
              [
                { label: "Fresh Ingredients", icon: "circlecheck" },
                { label: "Nutritionist Approved", icon: "badge" },
                { label: "Delivered to Your Door", icon: "truck" },
              ] as const
            ).map((x) => (
              <View
                key={x.label}
                style={[tw.style("flex-row items-center"), { gap: 8 }]}
              >
                <Icon name={x.icon} size={23} />
                <Body style={{ fontSize: 11, lineHeight: 16 }}>{x.label}</Body>
              </View>
            ))}
          </View>
        </View>
      </Container>
      {tablet && (
        <Photo
          source={require("../../assets/images/hero.jpg")}
          label="Grilled chicken and avocado meal bowl"
          style={{ width: "100%", height: mobile ? 280 : 390 }}
        />
      )}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: tablet ? undefined : 54,
          bottom: tablet ? 210 : undefined,
          left: tablet ? 20 : "49%",
          transform: [{ rotate: "-10deg" }],
        }}
      >
        <Body
          style={{
            fontFamily: fonts.heading,
            fontStyle: "italic",
            color: colors.olive,
            fontSize: 18,
            lineHeight: 24,
          }}
        >
          Good Food{"\n"}Brightens You
        </Body>
        <View style={{ alignSelf: "flex-end", marginRight: -28 }}>
          <Icon name="curve" size={40} color={colors.forest} />
        </View>
      </View>
      <View
        style={[
          tw.style("flex-row items-center"),
          shadow,
          {
            position: "absolute",
            right: tablet ? 20 : 28,
            bottom: tablet ? 22 : 64,
            backgroundColor: "white",
            borderRadius: 25,
            padding: 22,
            gap: 16,
          },
        ]}
      >
        <Icon name="leaf" size={31} fill={colors.olive} />
        <View>
          <Body style={{ fontFamily: fonts.medium, fontSize: 12 }}>
            Nutritious Meals
          </Body>
          <Body style={{ fontSize: 11 }}>A Healthier Tomorrow</Body>
        </View>
      </View>
    </View>
  );
}
