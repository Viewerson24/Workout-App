import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Card, Pill, Screen, SectionTitle } from "../../src/components/ui";
import { coachResponses } from "../../src/data/mock";
import { theme } from "../../src/theme";

const prompts = [
  "I only have 30 minutes today.",
  "My shoulder feels off.",
  "I am traveling this week.",
  "How do I keep progressing on cut calories?"
];

export default function CoachScreen() {
  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);

  const response = useMemo(() => {
    if (selectedPrompt.includes("30 minutes")) return coachResponses[0];
    if (selectedPrompt.includes("shoulder")) return "Reduce pressing range of motion, use neutral grips, and keep pain-free pulling in the session. If pain persists, stop and get assessed.";
    if (selectedPrompt.includes("travel")) return coachResponses[2];
    return "Keep protein high, train hard in the time available, and use body weight trends plus performance to guide the cut.";
  }, [selectedPrompt]);

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 32, gap: 18 }} showsVerticalScrollIndicator={false}>
        <Card style={{ backgroundColor: theme.colors.surfaceSoft }}>
          <SectionTitle title="AI Coach" subtitle="Ask for adjustments, recovery guidance, form cues, or travel-friendly swaps." />
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            <Pill label="Injury-safe swaps" tone="warning" />
            <Pill label="Time crunch plans" tone="primary" />
            <Pill label="Recovery advice" tone="success" />
          </View>
        </Card>

        <Card>
          <SectionTitle title="Quick Prompts" />
          <View style={{ gap: 10 }}>
            {prompts.map((prompt) => (
              <Pressable
                key={prompt}
                onPress={() => setSelectedPrompt(prompt)}
                style={{
                  backgroundColor: selectedPrompt === prompt ? "rgba(125,211,252,0.14)" : "rgba(255,255,255,0.04)",
                  borderRadius: 16,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: selectedPrompt === prompt ? "rgba(125,211,252,0.25)" : theme.colors.border
                }}
              >
                <Text style={{ color: theme.colors.text, fontSize: 14, fontWeight: "700" }}>{prompt}</Text>
              </Pressable>
            ))}
          </View>
        </Card>

        <Card>
          <SectionTitle title="Coach Response" subtitle="Context-aware guidance generated from your training situation." />
          <Text style={{ color: theme.colors.text, fontSize: 15, lineHeight: 23 }}>{response}</Text>
        </Card>

        <Card>
          <SectionTitle title="What the premium coach unlocks" />
          <View style={{ gap: 8 }}>
            {[
              "Auto-adapts workouts when time or equipment changes",
              "Explains form corrections in plain language",
              "Builds recovery and nutrition recommendations into the plan",
              "Keeps you moving through injuries without losing momentum"
            ].map((item) => (
              <Text key={item} style={{ color: theme.colors.text, fontSize: 14, lineHeight: 20 }}>• {item}</Text>
            ))}
          </View>
        </Card>
      </ScrollView>
    </Screen>
  );
}
