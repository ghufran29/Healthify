import { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  Platform,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans/400Regular";
import { DMSans_500Medium } from "@expo-google-fonts/dm-sans/500Medium";
import { DMSans_700Bold } from "@expo-google-fonts/dm-sans/700Bold";
import { Lora_500Medium } from "@expo-google-fonts/lora/500Medium";
import { Lora_600SemiBold } from "@expo-google-fonts/lora/600SemiBold";
import { Lora_700Bold } from "@expo-google-fonts/lora/700Bold";
import Header from "./src/components/Header";
import HeroSection from "./src/sections/HeroSection";
import StatsSection from "./src/sections/StatsSection";
import AboutSection from "./src/sections/AboutSection";
import ServicesSection from "./src/sections/ServicesSection";
import AdvantagesSection from "./src/sections/AdvantagesSection";
import PricingSection from "./src/sections/PricingSection";
import ProcessSection from "./src/sections/ProcessSection";
import TestimonialsSection from "./src/sections/TestimonialsSection";
import FAQSection from "./src/sections/FAQSection";
import FinalCTA from "./src/components/FinalCTA";
import Footer from "./src/components/Footer";
import EnquiryModal from "./src/components/EnquiryModal";
import { Body, Icon } from "./src/components/ui";
import { PageProvider, Panel } from "./src/context/PageContext";
import { colors } from "./src/theme";
import { scrollToId, setPageMetadata } from "./src/utils/browser";

const sections = [
  ["home", HeroSection],
  ["statistics", StatsSection],
  ["about", AboutSection],
  ["services", ServicesSection],
  ["advantages", AdvantagesSection],
  ["plans", PricingSection],
  ["process", ProcessSection],
  ["testimonials", TestimonialsSection],
  ["faq", FAQSection],
  ["start", FinalCTA],
  ["contact", Footer],
] as const;
export default function App() {
  const [loaded, error] = useFonts({
    DMSans: DMSans_400Regular,
    DMSansMedium: DMSans_500Medium,
    DMSansBold: DMSans_700Bold,
    Lora: Lora_500Medium,
    LoraSemiBold: Lora_600SemiBold,
    LoraBold: Lora_700Bold,
  });
  const [panel, setPanel] = useState<Panel>(null);
  const scroll = useRef<ScrollView>(null);
  const positions = useRef<Record<string, number>>({});
  useEffect(() => {
    setPageMetadata();
  }, []);
  const navigate = (id: string) => {
    if (id === "blogs") {
      setPanel({
        kind: "info",
        title: "From the Healthify journal",
        body: "A simpler meal routine\n\nPlan a few balanced meals ahead of time, keep a selection of vegetables and grains ready, and choose food you enjoy. A little preparation can make busy days easier.\n\nBuilding a balanced bowl\n\nCombine colorful vegetables, a protein source, and grains or other starchy foods. Add your favorite herbs and dressing for flavor.\n\nThese are short demonstration articles for the assessment. Individual nutrition needs vary.",
      });
      return;
    }
    if (id === "home" && Platform.OS === "web") {
      scrollToId("page-top");
      return;
    }
    if (!scrollToId(id))
      scroll.current?.scrollTo({
        y: positions.current[id] || 0,
        animated: true,
      });
  };
  if (!loaded && !error)
    return (
      <View
        style={{
          flex: 1,
          minHeight: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={colors.olive} />
        <Body>Preparing something fresh…</Body>
      </View>
    );
  const content = (
    <View nativeID="page-top" style={{ width: "100%" }}>
      <Header />
      {sections.map(([id, Section]) => (
        <View
          nativeID={id}
          key={id}
          onLayout={(e) => {
            positions.current[id] = e.nativeEvent.layout.y;
          }}
        >
          <Section />
        </View>
      ))}
    </View>
  );
  return (
    <PageProvider value={{ navigate, open: setPanel }}>
      {Platform.OS === "web" ? (
        content
      ) : (
        <ScrollView ref={scroll}>{content}</ScrollView>
      )}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Open contact enquiry"
        onPress={() => setPanel({ kind: "contact" })}
        style={({ pressed }) => ({
          position:
            Platform.OS === "web" ? ("fixed" as "absolute") : "absolute",
          right: 26,
          bottom: 24,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: pressed ? "#159A45" : "#20CF63",
          borderWidth: 2,
          borderColor: "#B8E9BC",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        })}
      >
        <Icon name="whatsapp" size={31} color="white" />
      </Pressable>
      <EnquiryModal
        panel={panel}
        onClose={() => setPanel(null)}
        onPlans={() => {
          setPanel(null);
          navigate("plans");
        }}
      />
    </PageProvider>
  );
}
