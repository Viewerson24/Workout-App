import { PropsWithChildren } from "react";
import { Platform, Pressable, SafeAreaView, Text, View } from "react-native";
import { theme } from "../theme";

export function Screen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flex: 1, width: "100%", maxWidth: Platform.OS === "web" ? 1180 : "100%" }}>{children}</View>
      </View>
    </SafeAreaView>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={{ gap: 4, marginBottom: theme.spacing.md }}>
      <Text style={{ color: theme.colors.text, fontSize: 24, fontWeight: "800" }}>{title}</Text>
      {subtitle ? <Text style={{ color: theme.colors.muted, fontSize: 14, lineHeight: 20 }}>{subtitle}</Text> : null}
    </View>
  );
}

export function Card({ children, style = {} }: PropsWithChildren<{ style?: any }>) {
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderWidth: 1,
          borderRadius: theme.radius.lg,
          padding: theme.spacing.md,
          gap: theme.spacing.sm
        },
        style
      ]}
    >
      {children}
    </View>
  );
}

export function Pill({ label, tone = "neutral" }: { label: string; tone?: "neutral" | "success" | "warning" | "primary" }) {
  const tones = {
    neutral: { bg: "rgba(255,255,255,0.07)", fg: theme.colors.text },
    success: { bg: "rgba(74,222,128,0.16)", fg: theme.colors.success },
    warning: { bg: "rgba(251,191,36,0.16)", fg: theme.colors.warning },
    primary: { bg: "rgba(125,211,252,0.16)", fg: theme.colors.primary }
  }[tone];

  return (
    <View style={{ backgroundColor: tones.bg, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 }}>
      <Text style={{ color: tones.fg, fontSize: 12, fontWeight: "700" }}>{label}</Text>
    </View>
  );
}

export function ActionButton({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: theme.colors.primaryStrong,
          borderRadius: 16,
          paddingVertical: 14,
          alignItems: "center",
          opacity: pressed ? 0.85 : 1
        }
      ]}
    >
      <Text style={{ color: "#04111c", fontWeight: "800", fontSize: 15 }}>{label}</Text>
    </Pressable>
  );
}
