import { useState } from "react";
import { View, Pressable } from "react-native";
import {
  Body,
  Button,
  Container,
  Eyebrow,
  Heading,
  Icon,
} from "../components/ui";
import { faqs } from "../data/content";
import { colors, useLayout } from "../theme";
export default function FAQSection() {
  const { tablet } = useLayout();
  const [expanded, setExpanded] = useState<number[]>([]);
  return (
    <View style={{ backgroundColor: "#F5F6F4", paddingVertical: 16 }}>
      <Container
        style={{
          flexDirection: tablet ? "column" : "row",
          gap: tablet ? 24 : 80,
        }}
      >
        <View style={{ width: tablet ? "100%" : "46%" }}>
          <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
          <Heading style={{ fontSize: 32, lineHeight: 34 }}>
            Have Questions?{"\n"}We’ve Got Answers.
          </Heading>
          <Body style={{ marginTop: 12, maxWidth: 420 }}>
            Find quick answers to common questions about our meal plans,
            delivery, and more.
          </Body>
          <Button
            label={
              expanded.length === faqs.length
                ? "Collapse All FAQs"
                : "View All FAQs"
            }
            variant="olive"
            onPress={() =>
              setExpanded(
                expanded.length === faqs.length ? [] : faqs.map((_, i) => i),
              )
            }
            style={{ alignSelf: "flex-start", marginTop: 13 }}
          />
        </View>
        <View style={{ flex: 1, gap: 7 }}>
          {faqs.map((f, i) => {
            const isOpen = expanded.includes(i);
            return (
              <View
                key={f.question}
                style={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isOpen }}
                  aria-expanded={isOpen}
                  accessibilityLabel={f.question}
                  onPress={() =>
                    setExpanded(
                      isOpen
                        ? expanded.filter((n) => n !== i)
                        : [...expanded, i],
                    )
                  }
                  style={({ pressed }) => ({
                    minHeight: tablet ? 44 : 33,
                    paddingHorizontal: 19,
                    paddingVertical: 7,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 14,
                    backgroundColor: pressed ? colors.pale : "white",
                  })}
                >
                  <Body style={{ fontSize: 12, lineHeight: 19, flex: 1 }}>
                    {f.question}
                  </Body>
                  <Icon
                    name={isOpen ? "minus" : "plus"}
                    size={15}
                    color={colors.body}
                  />
                </Pressable>
                {isOpen && (
                  <Body
                    style={{
                      padding: 19,
                      paddingTop: 4,
                      fontSize: 13,
                      lineHeight: 21,
                    }}
                  >
                    {f.answer}
                  </Body>
                )}
              </View>
            );
          })}
        </View>
      </Container>
    </View>
  );
}
