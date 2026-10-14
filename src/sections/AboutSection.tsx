import { View } from "react-native";
import Botanical from "../components/Botanical";
import {
  Body,
  Button,
  Container,
  Eyebrow,
  Heading,
  Icon,
  Photo,
} from "../components/ui";
import { colors, shadow, tw, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
export default function AboutSection() {
  const { tablet, mobile } = useLayout();
  const { open } = usePage();
  return (
    <Container
      style={{
        paddingVertical: 32,
        flexDirection: tablet ? "column" : "row",
        gap: tablet ? 30 : 76,
        alignItems: "center",
      }}
    >
      {!tablet && <Botanical />}
      <View
        style={{ width: tablet ? "100%" : "47%", height: mobile ? 275 : 320 }}
      >
        <Photo
          source={require("../../assets/images/about.jpg")}
          label="Fresh quinoa, avocado and roasted vegetable bowl"
          style={{
            width: "100%",
            height: mobile ? 240 : 292,
            borderRadius: 18,
          }}
        />
        <Photo
          source={require("../../assets/images/preparation.jpg")}
          label="Chef preparing a fresh salad by hand"
          style={{
            position: "absolute",
            left: tablet ? 0 : -36,
            bottom: 0,
            width: "39%",
            height: mobile ? 128 : 167,
            borderRadius: 19,
            borderWidth: 2,
            borderColor: colors.ink,
          }}
        />
        <View
          style={[
            tw.style("flex-row items-center"),
            shadow,
            {
              position: "absolute",
              left: "27%",
              bottom: 15,
              padding: 22,
              gap: 16,
              backgroundColor: "#FEFEFA",
              borderRadius: 26,
            },
          ]}
        >
          <Icon name="leaf" size={33} />
          <Heading
            level={3}
            style={{ fontSize: 16, lineHeight: 20, letterSpacing: -0.3 }}
          >
            Nourishing{"\n"}Lives Daily
          </Heading>
        </View>
      </View>
      <View
        style={{
          flex: tablet ? undefined : 1,
          width: tablet ? "100%" : undefined,
        }}
      >
        <Eyebrow>ABOUT HEALTHIFY</Eyebrow>
        <Heading>Your Trusted Healthy{"\n"}Food Partner</Heading>
        <Body style={{ marginTop: 15, maxWidth: 460 }}>
          At Healthify, we believe healthy eating should be convenient,
          affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced
          meals using high-quality ingredients to help individuals and families
          achieve their health goals without sacrificing taste.
        </Body>
        <View
          style={[
            tw.style("flex-row flex-wrap"),
            { gap: mobile ? 15 : 24, marginTop: 22, marginBottom: 19 },
          ]}
        >
          {["Freshly Prepared Daily", "Balanced Nutrition", "Great Taste"].map(
            (s, i) => (
              <View
                key={s}
                style={[tw.style("flex-row items-center"), { gap: 8 }]}
              >
                <Icon
                  name={(["badge", "salad", "circlecheck"] as const)[i]}
                  size={25}
                />
                <Body style={{ fontSize: 11 }}>{s}</Body>
              </View>
            ),
          )}
        </View>
        <Button
          label="More About Us"
          variant="olive"
          style={{ alignSelf: "flex-start" }}
          onPress={() =>
            open({
              kind: "info",
              title: "Your healthy food partner",
              body: "Healthify brings together fresh ingredients, balanced nutrition, and great taste. Our approach is simple: prepare meals with care and make healthy eating easier to fit into everyday life.\n\nThis website reproduces the supplied Healthify assessment design. Its plans, statistics, and customer stories are demonstration content.",
            })
          }
        />
      </View>
    </Container>
  );
}
