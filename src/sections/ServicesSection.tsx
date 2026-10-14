import { View } from "react-native";
import {
  Body,
  Container,
  Heading,
  IconButton,
  Photo,
  SectionHeader,
} from "../components/ui";
import { services } from "../data/content";
import { colors, useLayout } from "../theme";
import { usePage } from "../context/PageContext";
function ServiceCard({ index }: { index: number }) {
  const { open } = usePage();
  const item = services[index];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 13,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#EFEEE7",
      }}
    >
      <Photo
        source={item.image}
        label={item.title}
        style={{ width: "100%", height: 154 }}
      />
      <View style={{ padding: 16, paddingBottom: 18, flex: 1 }}>
        <Heading
          level={3}
          style={{ fontSize: 16, lineHeight: 21, letterSpacing: -0.5 }}
        >
          {item.title}
        </Heading>
        <Body
          style={{
            fontSize: 12,
            lineHeight: 18,
            marginTop: 8,
            paddingRight: 10,
          }}
        >
          {item.description}
        </Body>
        <IconButton
          name="arrow"
          label={"Explore " + item.title}
          onPress={() =>
            open({ kind: "info", title: item.title, body: item.detail })
          }
          style={{
            width: 30,
            height: 30,
            alignSelf: "flex-end",
            marginTop: "auto",
          }}
        />
      </View>
    </View>
  );
}
export default function ServicesSection() {
  const { tablet, mobile, wide } = useLayout();
  const { open } = usePage();
  return (
    <View
      style={{
        backgroundColor: colors.cream,
        paddingTop: 25,
        paddingBottom: 22,
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="Healthy Meal Plans for Every Lifestyle"
          action="View All Services"
          onAction={() =>
            open({
              kind: "info",
              title: "Our meal services",
              body: services
                .map((s) => s.title + "\n" + s.description)
                .join("\n\n"),
            })
          }
        />
      </Container>
      <Container
        wide
        style={{ flexDirection: "row", flexWrap: "wrap", gap: 20 }}
      >
        {services.map((s, index) => (
          <View
            key={s.title}
            style={{
              width: mobile
                ? "100%"
                : tablet
                  ? (wide - 20) / 2
                  : (wide - 60) / 4,
            }}
          >
            <ServiceCard index={index} />
          </View>
        ))}
      </Container>
    </View>
  );
}
