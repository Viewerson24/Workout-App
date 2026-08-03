import { ScrollView, Text, View } from "react-native";
import { Card, Pill, Screen, SectionTitle } from "../../src/components/ui";
import { calculateAthleteScore, estimateGoalDate } from "../../src/lib/fitness";
import { progressMetrics, user } from "../../src/data/mock";
import { theme } from "../../src/theme";

const score = calculateAthleteScore({ strength: 84, consistency: 78, recovery: 72, mobility: 70, composition: 76, cardio: 68 });

function MetricRow({ label, current, target, delta }: { label: string; current: string; target: string; delta: string }) {
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: theme.colors.border, paddingVertical: 12, gap: 4 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
        <Text style={{ color: theme.colors.text, fontWeight: "700" }}>{label}</Text>
        <Text style={{ color: theme.colors.primary, fontWeight: "800" }}>{current}</Text>
      </View>
      <Text style={{ color: theme.colors.muted, fontSize: 12 }}>Target {target} · {delta}</Text>
    </View>
  );
}

export default function ProgressScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 32, gap: 18 }} showsVerticalScrollIndicator={false}>
        <Card style={{ backgroundColor: theme.colors.surfaceSoft }}>
          <SectionTitle title="Progress Tracking" subtitle="Measure performance, not just scale weight." />
          <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 16 }}>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 999,
                borderWidth: 14,
                borderColor: "rgba(74,222,128,0.18)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: theme.colors.success, fontSize: 34, fontWeight: "900" }}>{score}</Text>
              <Text style={{ color: theme.colors.muted, fontSize: 11 }}>Athlete Score</Text>
            </View>
            <View style={{ flex: 1, gap: 8 }}>
              <Pill label={`Goal completion: ${estimateGoalDate(0.72, 10)}`} tone="success" />
              <Text style={{ color: theme.colors.text, fontSize: 14, lineHeight: 20 }}>
                {user.name}'s current training load is trending up while recovery stays stable.
              </Text>
            </View>
          </View>
        </Card>

        <Card>
          <SectionTitle title="Performance Metrics" subtitle="Strength, body composition, and recovery trend together." />
          {progressMetrics.map((metric) => (
            <MetricRow key={metric.label} {...metric} />
          ))}
        </Card>

        <Card>
          <SectionTitle title="Workout History" subtitle="Recent sessions and key wins." />
          {[
            "Upper Power + Core · completed yesterday",
            "Lower Strength · completed 2 days ago",
            "Zone 2 + Mobility · completed 4 days ago"
          ].map((entry) => (
            <Text key={entry} style={{ color: theme.colors.text, fontSize: 14, lineHeight: 20 }}>• {entry}</Text>
          ))}
        </Card>

        <Card>
          <SectionTitle title="Photos & Measurements" subtitle="Progress photos and body data become more useful together." />
          <View style={{ flexDirection: "row", gap: 12 }}>
            <View style={{ flex: 1, height: 120, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.05)" }} />
            <View style={{ flex: 1, height: 120, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.08)" }} />
          </View>
        </Card>
      </ScrollView>
    </Screen>
  );
}
