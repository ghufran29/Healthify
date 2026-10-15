import Svg, { Path } from "react-native-svg";
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
export type IconName = keyof typeof icons | "whatsapp";
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
  if (name === "whatsapp")
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
        <Path
          fill={color}
          d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.8 1.48h.01C18.64 23.84 24 18.49 24 11.91c0-3.18-1.24-6.18-3.48-8.43ZM12.06 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.51-5.28c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.01 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.46-4.45 9.91-9.97 9.89Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
        />
      </Svg>
    );
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
          fontFamily: level === 2 ? fonts.headingSemiBold : fonts.heading,
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
