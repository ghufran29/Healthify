import { View, Pressable, Text } from "react-native";
import { Body, Container, Icon, Link, Logo } from "./ui";
import { navigation, services, extraServices } from "../data/content";
import { colors, fonts, tw, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
export default function Footer() {
  const { tablet, mobile } = useLayout();
  const { navigate, open } = usePage();
  const col = { width: mobile ? "100%" : tablet ? "46%" : "23%" } as const;
  const contact = () => open({ kind: "contact" });
  return (
    <View style={{ backgroundColor: colors.forest, paddingTop: 25 }}>
      <Container
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: tablet ? 28 : 0,
          paddingBottom: 15,
        }}
      >
        <View style={col}>
          <Logo light onPress={() => navigate("home")} />
          <Body
            style={{
              color: "#D5DECF",
              fontSize: 11,
              lineHeight: 17,
              marginTop: 12,
              maxWidth: 270,
            }}
          >
            At Healthify, we believe healthy eating should be convenient,
            affordable, and enjoyable.
          </Body>
          <View style={[tw.style("flex-row"), { gap: 10, marginTop: 15 }]}>
            {(["facebook", "x", "instagram", "youtube"] as const).map((s) => (
              <View
                key={s}
                dataSet={{ motion: "social" }}
                accessibilityLabel={s + " social icon — no profile configured"}
                style={{
                  width: 31,
                  height: 31,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#C4D0BE",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s === "x" || s === "facebook" ? (
                  <Text style={{ fontSize: 16, color: "white" }}>
                    {s === "x" ? "X" : "f"}
                  </Text>
                ) : (
                  <Icon name={s} size={17} color="white" />
                )}
              </View>
            ))}
          </View>
        </View>
        <View
          style={{ ...col, width: mobile ? "100%" : tablet ? "46%" : "17%" }}
        >
          <Body
            style={{ color: "white", fontFamily: fonts.bold, marginBottom: 9 }}
          >
            Quick Links
          </Body>
          {navigation.map(([label, id]) => (
            <Link
              key={id}
              label={label}
              light
              arrow={false}
              onPress={() => navigate(id)}
              style={{ minHeight: 21 }}
            />
          ))}
        </View>
        <View
          style={{ ...col, width: mobile ? "100%" : tablet ? "46%" : "27%" }}
        >
          <Body
            style={{ color: "white", fontFamily: fonts.bold, marginBottom: 9 }}
          >
            Our Services
          </Body>
          {services.map((s) => (
            <Link
              key={s.title}
              label={s.title}
              light
              arrow={false}
              onPress={() =>
                open({ kind: "info", title: s.title, body: s.detail })
              }
              style={{ minHeight: 21 }}
            />
          ))}
          {extraServices.map((s) => (
            <Link
              key={s}
              label={s}
              light
              arrow={false}
              onPress={() =>
                open({
                  kind: "info",
                  title: s,
                  body: "Tell us what you are looking for in the contact enquiry. Service availability and details would be confirmed by the provider in a live service. This is a frontend demonstration.",
                })
              }
              style={{ minHeight: 21 }}
            />
          ))}
        </View>
        <View style={col}>
          <Body
            style={{ color: "white", fontFamily: fonts.bold, marginBottom: 12 }}
          >
            Get In Touch
          </Body>
          {(
            [
              { icon: "pin", text: "Dubai, UAE" },
              { icon: "phone", text: "+971 50 262 6144" },
              { icon: "mail", text: "info@healthify.ae" },
            ] as const
          ).map((x) => (
            <Pressable
              key={x.text}
              accessibilityRole="button"
              accessibilityLabel={"Contact information: " + x.text}
              onPress={contact}
              style={[
                tw.style("flex-row items-center"),
                { gap: 12, minHeight: 32 },
              ]}
            >
              <Icon name={x.icon} size={17} color="#E7EBDF" />
              <Body style={{ color: "#DCE1D5", fontSize: 12 }}>{x.text}</Body>
            </Pressable>
          ))}
        </View>
      </Container>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#506248",
          marginHorizontal: 32,
        }}
      >
        <Container
          style={{
            paddingVertical: 12,
            flexDirection: mobile ? "column" : "row",
            gap: 12,
            justifyContent: "space-between",
          }}
        >
          <Body style={{ color: "#DCE1D5", fontSize: 10, lineHeight: 16 }}>
            Copyright © 2026 Healthify. All Rights Reserved.
          </Body>
          <View style={[tw.style("flex-row"), { gap: 22 }]}>
            <Link
              label="Privacy Policy"
              light
              arrow={false}
              style={{ minHeight: 18 }}
              onPress={() =>
                open({
                  kind: "info",
                  title: "Privacy Policy",
                  body: "This frontend assessment demo has no account system, analytics, or backend. Information entered in the enquiry form is held temporarily in page memory and is cleared when the dialog closes. Nothing is sent to Healthify or stored as an order.\n\nImages and fonts are bundled with the application. Hosting providers may process standard request logs under their own policies.",
                })
              }
            />
            <Link
              label="Terms of Service"
              light
              arrow={false}
              style={{ minHeight: 18 }}
              onPress={() =>
                open({
                  kind: "info",
                  title: "Terms of Service",
                  body: "This website is an educational UI implementation of a supplied Healthify reference. Prices, business statistics, testimonials, and contact details are reference demonstration content.\n\nNo meals, payments, subscriptions, or deliveries can be purchased or arranged here. Submitting a demo enquiry creates only a local confirmation.",
                })
              }
            />
          </View>
        </Container>
      </View>
    </View>
  );
}
