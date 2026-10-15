import { View } from "react-native";
import {
  Body,
  Button,
  Container,
  Eyebrow,
  Heading,
  Icon,
} from "../components/ui";
import { advantages } from "../data/content";
import { colors, fonts, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
export default function AdvantagesSection() {
  const { tablet, mobile } = useLayout();
  const { open } = usePage();
  return (
    <View style={{ backgroundColor: colors.pale, paddingVertical: 30 }}>
      <Container
        style={{
          flexDirection: tablet ? "column" : "row",
          gap: 30,
          alignItems: tablet ? "stretch" : "center",
        }}
      >
        <View style={{ width: tablet ? "100%" : "35%" }}>
          <Eyebrow>OUR ADVANTAGES</Eyebrow>
          <Heading>Why Choose Healthify</Heading>
          <Body style={{ marginTop: 12, fontSize: 13, lineHeight: 20 }}>
            More than just meals — we deliver a healthier, happier you with
            benefits that fit your lifestyle.
          </Body>
          <Button
            label="Discover All Advantages"
            variant="olive"
            onPress={() =>
              open({
                kind: "info",
                title: "Healthy eating, made easier",
                body: advantages
                  .map((x) => x.title + "\n" + x.description + ".")
                  .join("\n\n"),
              })
            }
            style={{ alignSelf: "flex-start", marginTop: 17 }}
          />
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 14 }}
        >
          {advantages.map((x) => (
            <View
              key={x.title}
              dataSet={{ motion: "card" }}
              style={{
                width: mobile ? "47%" : undefined,
                flex: mobile ? undefined : 1,
                minHeight: 176,
                backgroundColor: "#FCFCF7",
                paddingHorizontal: 12,
                paddingVertical: 24,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={x.icon} size={38} />
              <Body
                style={{
                  fontSize: 13,
                  fontFamily: fonts.bold,
                  marginTop: 22,
                  marginBottom: 7,
                  textAlign: "center",
                  color: colors.ink,
                }}
              >
                {x.title}
              </Body>
              <Body
                style={{ fontSize: 12, lineHeight: 17, textAlign: "center" }}
              >
                {x.description}
              </Body>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}
