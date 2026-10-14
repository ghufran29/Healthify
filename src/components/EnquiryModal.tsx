import { useState } from "react";
import { View, Modal, ScrollView, TextInput, Pressable } from "react-native";
import { Panel } from "../context/PageContext";
import { plans, PlanName } from "../data/content";
import { Body, Button, Eyebrow, Heading, Icon, IconButton } from "./ui";
import { colors, fonts, useLayout } from "../theme";
import { useDialogFocus } from "../hooks/useDialogFocus";

function EnquiryForm({
  initialPlan,
  onClose,
}: {
  initialPlan?: PlanName;
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<PlanName>(
    initialPlan || "Balanced Plan",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const submit = () => {
    const next: Record<string, string> = {};
    if (name.trim().length < 2)
      next.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    if (!Object.keys(next).length) setDone(true);
  };
  if (done)
    return (
      <View style={{ gap: 20, paddingVertical: 22 }}>
        <Icon name="circlecheck" size={46} />
        <Heading>Demo enquiry complete</Heading>
        <Body accessibilityLiveRegion="polite">
          Thank you, {name.trim()}. Your {initialPlan ? selected : "contact"}{" "}
          enquiry has been previewed successfully.
        </Body>
        <Body>
          No message was sent, and no order, payment, or subscription was
          created. Your details will be cleared when you close this dialog.
        </Body>
        <Button label="Done" onPress={onClose} arrow={false} />
      </View>
    );
  const fieldStyle = {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    fontFamily: fonts.body,
    color: colors.ink,
    backgroundColor: "#FCFCF8",
    minHeight: 46,
  };
  return (
    <View style={{ gap: 14 }}>
      <Eyebrow>LET’S MAKE HEALTHY EATING SIMPLE</Eyebrow>
      <Heading style={{ fontSize: 30, lineHeight: 36 }}>
        {initialPlan ? "Choose your plan" : "Get in touch"}
      </Heading>
      <Body>
        {initialPlan
          ? "Explore your selected plan and tell us a little about yourself."
          : "Have a question? Preview a contact enquiry below."}
      </Body>
      {initialPlan && (
        <View
          accessibilityRole="radiogroup"
          accessibilityLabel="Meal plan"
          style={{ gap: 8 }}
        >
          {plans.map((p) => (
            <Pressable
              key={p.name}
              accessibilityRole="radio"
              accessibilityState={{ checked: selected === p.name }}
              aria-checked={selected === p.name}
              onPress={() => setSelected(p.name)}
              style={({ pressed }) => ({
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 12,
                borderWidth: 1,
                borderColor: selected === p.name ? colors.olive : colors.line,
                borderRadius: 9,
                backgroundColor:
                  pressed || selected === p.name ? colors.pale : "white",
                gap: 8,
              })}
            >
              <Body style={{ flex: 1, fontFamily: fonts.medium, fontSize: 13 }}>
                {p.name}
              </Body>
              <Body style={{ fontSize: 12 }}>AED {p.price}/month</Body>
              {selected === p.name && <Icon name="check" size={19} />}
            </Pressable>
          ))}
        </View>
      )}
      <View>
        <Body style={{ fontFamily: fonts.medium, marginBottom: 6 }}>
          Name *
        </Body>
        <TextInput
          accessibilityLabel="Name"
          aria-invalid={!!errors.name}
          value={name}
          onChangeText={setName}
          autoComplete="name"
          placeholder="Your name"
          placeholderTextColor="#74786F"
          maxLength={100}
          style={[fieldStyle, errors.name ? { borderColor: "#AE3C2D" } : {}]}
        />
        {errors.name && (
          <Body
            accessibilityRole="alert"
            style={{ color: "#AE3C2D", fontSize: 12, marginTop: 5 }}
          >
            {errors.name}
          </Body>
        )}
      </View>
      <View>
        <Body style={{ fontFamily: fonts.medium, marginBottom: 6 }}>
          Email *
        </Body>
        <TextInput
          accessibilityLabel="Email"
          aria-invalid={!!errors.email}
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="you@example.com"
          placeholderTextColor="#74786F"
          maxLength={200}
          style={[fieldStyle, errors.email ? { borderColor: "#AE3C2D" } : {}]}
        />
        {errors.email && (
          <Body
            accessibilityRole="alert"
            style={{ color: "#AE3C2D", fontSize: 12, marginTop: 5 }}
          >
            {errors.email}
          </Body>
        )}
      </View>
      <View>
        <Body style={{ fontFamily: fonts.medium, marginBottom: 6 }}>
          {initialPlan ? "Dietary preferences or questions" : "Your message"}{" "}
          (optional)
        </Body>
        <TextInput
          accessibilityLabel="Message or dietary preferences"
          value={notes}
          onChangeText={setNotes}
          multiline
          maxLength={1000}
          placeholder="How can we help?"
          placeholderTextColor="#74786F"
          style={[fieldStyle, { height: 80, textAlignVertical: "top" }]}
        />
      </View>
      <Body style={{ fontSize: 12, lineHeight: 18 }}>
        Demo only. Your information stays in this page and is not sent or saved.
        Contact details shown in the footer are unverified reference content.
      </Body>
      <Button label="Preview enquiry" onPress={submit} />
    </View>
  );
}
export default function EnquiryModal({
  panel,
  onClose,
  onPlans,
}: {
  panel: Panel;
  onClose: () => void;
  onPlans: () => void;
}) {
  const { mobile } = useLayout();
  useDialogFocus(!!panel, onClose);
  return (
    <Modal
      visible={!!panel}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(7,25,18,0.62)",
          alignItems: "center",
          justifyContent: "center",
          padding: mobile ? 12 : 30,
        }}
      >
        <View
          testID="dialog"
          role="dialog"
          aria-modal
          accessibilityLabel={
            panel?.kind === "info"
              ? panel.title
              : panel?.kind === "plan"
                ? "Plan enquiry"
                : "Contact enquiry"
          }
          style={{
            backgroundColor: "white",
            borderRadius: 22,
            width: "100%",
            maxWidth: 560,
            maxHeight: "94%",
            overflow: "hidden",
          }}
        >
          <View
            style={{ alignItems: "flex-end", padding: 14, paddingBottom: 0 }}
          >
            <IconButton name="close" label="Close dialog" onPress={onClose} />
          </View>
          <ScrollView
            contentContainerStyle={{ padding: mobile ? 20 : 30, paddingTop: 8 }}
            keyboardShouldPersistTaps="handled"
          >
            {panel?.kind === "info" ? (
              <View style={{ gap: 20 }}>
                <Eyebrow>HEALTHIFY</Eyebrow>
                <Heading style={{ fontSize: 30, lineHeight: 36 }}>
                  {panel.title}
                </Heading>
                <Body>{panel.body}</Body>
                <Button label="Explore Meal Plans" onPress={onPlans} />
              </View>
            ) : (
              panel && (
                <EnquiryForm
                  key={panel.kind === "plan" ? panel.plan : "contact"}
                  initialPlan={panel.kind === "plan" ? panel.plan : undefined}
                  onClose={onClose}
                />
              )
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
