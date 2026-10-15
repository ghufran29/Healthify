import { useState } from "react";
import { View, Pressable } from "react-native";
import { navigation } from "../data/content";
import { useLayout, tw, colors } from "../theme";
import { Body, Button, Container, Icon, Link, Logo } from "./ui";
import { usePage } from "../context/PageContext";
export default function Header() {
  const { compact } = useLayout();
  const { navigate } = usePage();
  const [menu, setMenu] = useState(false);
  const go = (id: string) => {
    setMenu(false);
    navigate(id);
  };
  return (
    <View
      nativeID="site-header"
      style={{ backgroundColor: "white", zIndex: 5 }}
    >
      <Container
        style={[
          tw.style("flex-row items-center justify-between"),
          { height: 68 },
        ]}
      >
        <Logo onPress={() => go("home")} />
        {!compact && (
          <View
            dataSet={{ navigation: "links" }}
            style={[tw.style("flex-row items-center"), { gap: 24 }]}
          >
            {navigation.map(([label, id]) => (
              <Link
                key={id}
                label={label}
                onPress={() => go(id)}
                arrow={false}
              />
            ))}
          </View>
        )}
        <View style={[tw.style("flex-row items-center"), { gap: 12 }]}>
          {!compact && (
            <Button
              label="Get Started"
              onPress={() => go("plans")}
              variant="olive"
              style={{ borderRadius: 30, minHeight: 38, paddingHorizontal: 21 }}
            />
          )}
          {compact && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={menu ? "Close navigation" : "Open navigation"}
              accessibilityState={{ expanded: menu }}
              aria-expanded={menu}
              onPress={() => setMenu(!menu)}
              style={{ padding: 10 }}
            >
              <Icon
                name={menu ? "close" : "menu"}
                color={colors.forest}
                size={25}
              />
            </Pressable>
          )}
        </View>
      </Container>
      {compact && menu && (
        <Container style={{ paddingBottom: 20, gap: 4 }}>
          {navigation.map(([label, id]) => (
            <Pressable
              accessibilityRole="button"
              key={id}
              dataSet={{ navigation: "link" }}
              onPress={() => go(id)}
              style={({ pressed }) => ({
                padding: 12,
                backgroundColor: pressed ? colors.pale : "white",
                borderBottomWidth: 1,
                borderColor: colors.line,
              })}
            >
              <Body>{label}</Body>
            </Pressable>
          ))}
          <Button label="Get Started" onPress={() => go("plans")} />
        </Container>
      )}
    </View>
  );
}
