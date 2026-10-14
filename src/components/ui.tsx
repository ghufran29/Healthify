import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  ArrowRight,
  ArrowDownRight,
  Leaf,
  Truck,
  Heart,
  Diamond,
  Star,
  Users,
  BadgeCheck,
  Salad,
  UserRound,
  ChartNoAxesColumnIncreasing,
  Check,
  Plus,
  Minus,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Camera,
  CirclePlay,
  Sprout,
  CircleCheck,
} from "lucide-react-native";
import { colors, fonts, tw, useLayout } from "../theme";
const icons = {
  arrow: ArrowRight,
  curve: ArrowDownRight,
  leaf: Leaf,
  truck: Truck,
  heart: Heart,
  diamond: Diamond,
  star: Star,
  users: Users,
  badge: BadgeCheck,
  salad: Salad,
  person: UserRound,
  chart: ChartNoAxesColumnIncreasing,
  check: Check,
  plus: Plus,
  minus: Minus,
  menu: Menu,
  close: X,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  chat: MessageCircle,
  instagram: Camera,
  youtube: CirclePlay,
  sprout: Sprout,
  circlecheck: CircleCheck,
};
export type IconName = keyof typeof icons;
export function Icon({
  name = "leaf",
  size = 22,
  color = colors.olive,
  fill = "none",
}: {
  name?: IconName;
  size?: number;
  color?: string;
  fill?: string;
}) {
  const C = icons[name];
  return (
    <C size={size} color={color} strokeWidth={1.5} fill={fill} aria-hidden />
  );
}
export function Body({
  children,
  style,
  ...props
}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: fonts.body,
          fontSize: 14,
          lineHeight: 21,
          color: colors.body,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
export function Heading({
  children,
  style,
  level = 2,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  level?: 1 | 2 | 3;
}) {
  const { mobile } = useLayout();
  return (
    <Text
      role="heading"
      aria-level={level}
      style={[
        {
          fontFamily: fonts.heading,
          fontSize: mobile ? 30 : 36,
          lineHeight: mobile ? 36 : 40,
          letterSpacing: -1.1,
          color: colors.ink,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Body
      style={{
        fontSize: 10,
        letterSpacing: 2,
        lineHeight: 16,
        color: light ? "#F4F3E9" : colors.olive,
        marginBottom: 5,
        fontFamily: fonts.medium,
      }}
    >
      {children}
    </Body>
  );
}
export function Container({
  children,
  wide = false,
  style,
}: {
  children: React.ReactNode;
  wide?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const l = useLayout();
  return (
    <View
      style={[
        { width: wide ? l.wide : l.container, alignSelf: "center" },
        style,
      ]}
    >
      {children}
    </View>
  );
}
export function Button({
  label,
  onPress,
  variant = "primary",
  arrow = true,
  style,
  accessibilityLabel,
}: {
  label: string;
  onPress: () => void;
  variant?: "primary" | "olive" | "outline" | "white";
  arrow?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const light = variant === "outline" || variant === "white";
  const { mobile } = useLayout();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      onPress={onPress}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={({ pressed }) => [
        {
          minHeight: 42,
          paddingHorizontal: 25,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: variant === "outline" ? "#9A8F63" : "transparent",
          backgroundColor:
            variant === "outline"
              ? "transparent"
              : variant === "white"
                ? "#FFFFFF"
                : variant === "olive"
                  ? colors.olive
                  : colors.forest,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          opacity: pressed ? 0.72 : hover ? 0.86 : 1,
          boxShadow: focus ? "0 0 0 3px #B4C57A" : undefined,
        },
        style,
        mobile ? { minHeight: 44 } : {},
      ]}
    >
      <Body
        style={{
          color: light ? colors.ink : "#FFFFFF",
          fontFamily: fonts.bold,
          fontSize: 12,
          lineHeight: 18,
        }}
      >
        {label}
      </Body>
      {arrow && (
        <Icon name="arrow" size={16} color={light ? colors.ink : "#FFFFFF"} />
      )}
    </Pressable>
  );
}
export function Link({
  label,
  onPress,
  light = false,
  arrow = true,
  style,
}: {
  label: string;
  onPress: () => void;
  light?: boolean;
  arrow?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const { mobile } = useLayout();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={({ pressed }) => [
        tw.style("flex-row items-center"),
        {
          gap: 7,
          minHeight: 32,
          opacity: pressed ? 0.6 : 1,
          borderRadius: 4,
          boxShadow: focus ? "0 0 0 2px #9BAE68" : undefined,
        },
        style,
        mobile ? { minHeight: 44 } : {},
      ]}
    >
      <Body
        style={{
          fontSize: 12,
          lineHeight: 18,
          color: light ? "#DCE1D5" : colors.olive,
          textDecorationLine: hover ? "underline" : "none",
        }}
      >
        {label}
      </Body>
      {arrow && (
        <Icon name="arrow" size={16} color={light ? "#DCE1D5" : colors.olive} />
      )}
    </Pressable>
  );
}
export function IconButton({
  name,
  label,
  onPress,
  style,
}: {
  name: IconName;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  const [focused, setFocused] = useState(false);
  const { mobile } = useLayout();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onPress={onPress}
      style={({ pressed }) => [
        {
          width: 44,
          height: 44,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 22,
          backgroundColor: pressed ? "#DBDFC9" : colors.pale,
          borderWidth: 1,
          borderColor: "#A3AA83",
          boxShadow: focused ? "0 0 0 3px #A7BC6A" : undefined,
        },
        style,
        mobile ? { minWidth: 44, minHeight: 44 } : {},
      ]}
    >
      <Icon name={name} size={20} />
    </Pressable>
  );
}
export function Photo({
  source,
  label,
  style,
}: {
  source: ImageSourcePropType;
  label: string;
  style?: React.ComponentProps<typeof Image>["style"];
}) {
  return (
    <Image
      source={source}
      accessibilityLabel={label}
      accessible
      resizeMode="cover"
      style={style}
    />
  );
}
export function SectionHeader({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow: string;
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  const { mobile } = useLayout();
  return (
    <View
      style={[
        tw.style("flex-row justify-between"),
        {
          alignItems: "center",
          gap: 15,
          marginBottom: 20,
          flexWrap: mobile ? "wrap" : "nowrap",
        },
      ]}
    >
      <View style={{ flexShrink: 1 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{title}</Heading>
      </View>
      {action && onAction && <Link label={action} onPress={onAction} />}
    </View>
  );
}
export function Logo({
  light = false,
  onPress,
}: {
  light?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Healthify — back to home"
      onPress={onPress}
      style={{ minWidth: 90, minHeight: 54, justifyContent: "center" }}
    >
      <Text
        style={{
          fontFamily: "serif",
          alignSelf: "flex-start",
          textAlign: "left",
          fontSize: 29,
          lineHeight: 31,
          fontWeight: "700",
          color: light ? "white" : colors.ink,
        }}
      >
        هيلثي
      </Text>
      <Text
        style={{
          fontFamily: fonts.bold,
          fontSize: 11,
          letterSpacing: 0.7,
          color: light ? "white" : colors.ink,
        }}
      >
        HEALTHIFY
      </Text>
    </Pressable>
  );
}
