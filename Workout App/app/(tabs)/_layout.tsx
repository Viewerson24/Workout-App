import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { theme } from "../../src/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarPosition: Platform.OS === "web" ? "left" : "bottom",
        tabBarVariant: Platform.OS === "web" ? "material" : "uikit",
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarStyle: {
          backgroundColor: theme.colors.backgroundAlt,
          borderTopColor: theme.colors.border,
          borderRightColor: theme.colors.border,
          width: Platform.OS === "web" ? 250 : undefined,
          height: Platform.OS === "web" ? "100%" : 64,
          paddingBottom: Platform.OS === "web" ? 18 : 8,
          paddingTop: Platform.OS === "web" ? 18 : 8
        },
        sceneStyle: {
          backgroundColor: theme.colors.background
        },
        tabBarLabelStyle: {
          fontSize: Platform.OS === "web" ? 13 : 11,
          fontWeight: "700"
        },
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            home: "home-outline",
            train: "barbell-outline",
            coach: "chatbubble-ellipses-outline",
            progress: "stats-chart-outline",
            nutrition: "nutrition-outline",
            community: "people-outline"
          };

          return <Ionicons name={icons[route.name] ?? "ellipse-outline"} size={size} color={color} />;
        }
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="train" options={{ title: "Train" }} />
      <Tabs.Screen name="coach" options={{ title: "Coach" }} />
      <Tabs.Screen name="progress" options={{ title: "Progress" }} />
      <Tabs.Screen name="nutrition" options={{ title: "Nutrition" }} />
      <Tabs.Screen name="community" options={{ title: "Community" }} />
    </Tabs>
  );
}
