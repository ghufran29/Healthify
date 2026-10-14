import { View } from "react-native";
import { Body, Container, Icon, Photo, SectionHeader } from "../components/ui";
import { testimonials } from "../data/content";
import { colors, fonts, tw, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
export default function TestimonialsSection() {
  const { tablet } = useLayout();
  const { open } = usePage();
  return (
    <Container style={{ paddingTop: 16, paddingBottom: 15 }}>
      <SectionHeader
        eyebrow="CUSTOMER STORIES"
        title="What Our Customers Say"
        action="View Customer Stories"
        onAction={() =>
          open({
            kind: "info",
            title: "Customer stories",
            body:
              "The three customer stories on this page are supplied assessment copy, presented to reproduce the reference design. They are illustrative testimonials, not verified reviews.\n\n" +
              testimonials
                .map((t) => t.name + " — Dubai, UAE\n“" + t.review + "”")
                .join("\n\n"),
          })
        }
      />
      <View style={{ flexDirection: tablet ? "column" : "row", gap: 24 }}>
        {testimonials.map((t) => (
          <View
            key={t.name}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#EBECE6",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <Body
              style={{
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.4,
                minHeight: 60,
              }}
            >
              “{t.review}”
            </Body>
            <View
              style={[
                tw.style("flex-row items-center"),
                { marginTop: 12, gap: 12 },
              ]}
            >
              <Photo
                source={t.portrait}
                label={t.name + " — illustrative demo portrait"}
                style={{ width: 36, height: 36, borderRadius: 18 }}
              />
              <View>
                <Body
                  style={{
                    fontSize: 13,
                    fontFamily: fonts.bold,
                    color: colors.ink,
                    lineHeight: 18,
                  }}
                >
                  {t.name}
                </Body>
                <Body style={{ fontSize: 11, lineHeight: 17 }}>Dubai, UAE</Body>
              </View>
              <View
                accessibilityLabel="5 out of 5 stars"
                style={[tw.style("flex-row"), { gap: 3, marginLeft: "auto" }]}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon
                    key={i}
                    name="star"
                    size={15}
                    color={colors.gold}
                    fill={colors.gold}
                  />
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </Container>
  );
}
