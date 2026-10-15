import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Body,
  Button,
  Container,
  Heading,
  Icon,
  Photo,
  SectionHeader,
} from "../components/ui";
import { plans } from "../data/content";
import { colors, fonts, shadow, tw, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
function PricingCard({ index }: { index: number }) {
  const p = plans[index];
  const popular = index === 1;
  const { open } = usePage();
  return (
    <View
      dataSet={{ motion: "card" }}
      style={[
        popular ? shadow : {},
        {
          flex: 1,
          borderWidth: 1,
          borderColor: popular ? "#DBDFD1" : "#F1F0E9",
          borderRadius: 18,
          overflow: "hidden",
          backgroundColor: "white",
          minHeight: 326,
        },
      ]}
    >
      {popular && (
        <View
          style={[
            tw.style("flex-row items-center justify-center"),
            { backgroundColor: colors.olive, height: 26, gap: 6 },
          ]}
        >
          <Body
            style={{
              fontSize: 11,
              fontFamily: fonts.bold,
              color: "white",
              letterSpacing: 0.5,
            }}
          >
            MOST POPULAR
          </Body>
          <Icon name="star" size={13} color="white" fill="white" />
        </View>
      )}
      <View
        style={{
          padding: popular ? 18 : 22,
          paddingTop: popular ? 18 : 26,
          flex: 1,
        }}
      >
        <View style={[tw.style("flex-row"), { gap: 17 }]}>
          <Icon name={p.icon} size={31} />
          <View style={{ flex: 1 }}>
            <Heading
              level={3}
              style={{ fontSize: 19, lineHeight: 24, letterSpacing: -0.6 }}
            >
              {p.name}
            </Heading>
            <Body
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontStyle: "italic",
                marginTop: 9,
                minHeight: 38,
              }}
            >
              {p.description}
            </Body>
            <Body
              style={{
                fontFamily: fonts.bold,
                fontSize: 18,
                marginTop: 12,
                marginBottom: 12,
                color: "#272E1B",
              }}
            >
              AED {p.price}
              <Body style={{ fontSize: 11 }}> / month</Body>
            </Body>
          </View>
        </View>
        <View style={{ gap: 7, marginBottom: 15 }}>
          {p.benefits.map((b) => (
            <View
              key={b}
              style={[tw.style("flex-row items-center"), { gap: 11 }]}
            >
              <Icon name="check" size={18} />
              <Body style={{ fontSize: 12, lineHeight: 18, flex: 1 }}>{b}</Body>
            </View>
          ))}
        </View>
        <Button
          label="Get Started"
          accessibilityLabel={"Get started with " + p.name}
          variant={popular ? "primary" : "outline"}
          arrow={false}
          onPress={() => open({ kind: "plan", plan: p.name })}
          style={{ marginTop: "auto", borderRadius: 10, minHeight: 38 }}
        />
      </View>
    </View>
  );
}
export default function PricingSection() {
  const { tablet, mobile, wide } = useLayout();
  const { open } = usePage();
  const w = mobile ? wide : tablet ? (wide - 24) / 2 : (wide - 72) / 4;
  return (
    <View style={{ paddingTop: 22, paddingBottom: 15 }}>
      <Container>
        <SectionHeader
          eyebrow="GROWTH PLANS"
          title="Find the Perfect Plan for You"
          action="View All Plans"
          onAction={() =>
            open({
              kind: "info",
              title: "Find your perfect plan",
              body: plans
                .map(
                  (p) =>
                    p.name +
                    " — AED " +
                    p.price +
                    " / month\n" +
                    p.description +
                    "\n" +
                    p.benefits.join(" • "),
                )
                .join("\n\n"),
            })
          }
        />
      </Container>
      <Container
        wide
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {plans.map((p, i) => (
          <View key={p.name} style={{ width: w, paddingTop: i === 1 ? 0 : 8 }}>
            <PricingCard index={i} />
          </View>
        ))}
        <View style={{ width: w, paddingTop: 12, paddingHorizontal: 8 }}>
          <View
            style={{
              flex: 1,
              minHeight: 326,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Photo
              source={require("../../assets/images/promotion.jpg")}
              label="Fresh chicken and vegetable bowl for a healthier lifestyle"
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
            <LinearGradient
              colors={["transparent", "rgba(22,22,6,0.85)"]}
              style={{ position: "absolute", inset: 0 }}
            />
            <View style={{ marginTop: "auto", padding: 22 }}>
              <Icon name="leaf" size={34} color="#F5F1D3" />
              <Heading
                style={{
                  color: "white",
                  fontSize: 29,
                  lineHeight: 31,
                  marginTop: 12,
                  letterSpacing: -0.8,
                }}
              >
                Invest in{"\n"}a Healthier{"\n"}You
              </Heading>
              <View
                style={{
                  height: 2,
                  width: 75,
                  backgroundColor: "#D9CB98",
                  marginTop: 6,
                }}
              />
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
