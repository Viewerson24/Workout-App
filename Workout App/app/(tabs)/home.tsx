import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { ActionButton, Card, Pill, Screen, SectionTitle } from "../../src/components/ui";
import { athleteScore, milestones, streakDays, todayWorkout, weeklyCompletion, weeklyTarget, user } from "../../src/data/mock";
import { theme } from "../../src/theme";

function Metric({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card style={{ flex: 1, minWidth: "46%" }}>
      <Text style={{ color: theme.colors.muted, fontSize: 12 }}>{label}</Text>
      <Text style={{ color: theme.colors.text, fontSize: 24, fontWeight: "800" }}>{value}</Text>
      <Text style={{ color: theme.colors.primary, fontSize: 12, fontWeight: "700" }}>{hint}</Text>
    </Card>
  );
}

function ScoreRing() {
  return (
    <View
      style={{
        width: 138,
        height: 138,
        borderRadius: 999,
        borderWidth: 14,
        borderColor: "rgba(125,211,252,0.2)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.04)"
      }}
    >
      <Text style={{ color: theme.colors.primary, fontSize: 12, fontWeight: "800", letterSpacing: 1.4 }}>ATHLETE SCORE</Text>
      <Text style={{ color: theme.colors.text, fontSize: 42, fontWeight: "900", lineHeight: 46 }}>{athleteScore}</Text>
      <Text style={{ color: theme.colors.muted, fontSize: 12 }}>out of 100</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 32, gap: 18 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: theme.colors.surface,
            borderRadius: 30,
            padding: 18,
            borderWidth: 1,
            borderColor: theme.colors.border,
            overflow: "hidden"
          }}
        >
          <View style={{ position: "absolute", right: -40, top: -30, width: 140, height: 140, borderRadius: 999, backgroundColor: "rgba(125,211,252,0.14)" }} />
          <View style={{ position: "absolute", left: -20, bottom: -30, width: 100, height: 100, borderRadius: 999, backgroundColor: "rgba(167,139,250,0.18)" }} />
          <Text style={{ color: theme.colors.primary, fontSize: 12, fontWeight: "800", letterSpacing: 1.2 }}>BACK TO ATHLETE</Text>
          <Text style={{ color: theme.colors.text, fontSize: 30, lineHeight: 36, fontWeight: "900", marginTop: 8 }}>
            Morning, {user.name}. Today is built to make you stronger in under 45 minutes.
          </Text>
          <Text style={{ color: theme.colors.muted, fontSize: 15, lineHeight: 22, marginTop: 10 }}>
            {user.goal}. You are on day {streakDays} of your comeback streak.
          </Text>
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center", marginTop: 18, flexWrap: "wrap" }}>
            <Pill label={`${todayWorkout.durationMinutes} min workout`} tone="primary" />
            <Pill label={`${weeklyCompletion}/${weeklyTarget} sessions this week`} tone="success" />
            <Pill label={`${todayWorkout.scoreImpact} score points on deck`} tone="warning" />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <ScoreRing />
          <View style={{ flex: 1, gap: 12, minWidth: 180 }}>
            <Metric label="Workout streak" value={`${streakDays}`} hint="days in a row" />
            <Metric label="Weekly progress" value={`${weeklyCompletion}/${weeklyTarget}`} hint="one session away from target" />
          </View>
        </View>

        <Card>
          <SectionTitle title="Today's Workout" subtitle={`${todayWorkout.title} · ${todayWorkout.focus.toUpperCase()} focus · ${todayWorkout.durationMinutes} minutes`} />
          <View style={{ gap: 10 }}>
            {todayWorkout.exercises.slice(0, 3).map((exercise) => (
              <View key={exercise.name} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={{ color: theme.colors.text, fontSize: 15, fontWeight: "700" }}>{exercise.name}</Text>
                  <Text style={{ color: theme.colors.muted, fontSize: 12 }}>{exercise.sets} sets x {exercise.reps} · {exercise.restSec}s rest</Text>
                </View>
                <Ionicons name="checkmark-circle-outline" size={22} color={theme.colors.primary} />
              </View>
            ))}
          </View>
          <ActionButton label="Start Workout" />
        </Card>

        <Card>
          <SectionTitle title="Upcoming Milestones" subtitle="Your comeback is measured by strength, consistency, and athletic output." />
          <View style={{ gap: 12 }}>
            {milestones.map((milestone) => (
              <View key={milestone.label} style={{ gap: 6 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ color: theme.colors.text, fontSize: 14, fontWeight: "700" }}>{milestone.label}</Text>
                  <Text style={{ color: theme.colors.muted, fontSize: 12 }}>{Math.round(milestone.progress * 100)}%</Text>
                </View>
                <View style={{ height: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <View style={{ width: `${milestone.progress * 100}%`, height: 10, borderRadius: 999, backgroundColor: theme.colors.primaryStrong }} />
                </View>
              </View>
            ))}
          </View>
        </Card>
      </ScrollView>
    </Screen>
  );
}
