import { ScrollView, Text, View } from "react-native";
import { ActionButton, Card, Pill, Screen, SectionTitle } from "../../src/components/ui";
import { buildWorkoutPlan } from "../../src/lib/fitness";
import { user } from "../../src/data/mock";
import { theme } from "../../src/theme";

const plan = buildWorkoutPlan(user.availableTimeMinutes, user.equipment);

export default function TrainScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 32, gap: 18 }} showsVerticalScrollIndicator={false}>
        <Card style={{ backgroundColor: theme.colors.surfaceSoft }}>
          <SectionTitle title={plan.title} subtitle="Automatically matched to your time, equipment, and training goal." />
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            <Pill label={`${plan.durationMinutes} min`} tone="primary" />
            <Pill label={plan.focus} tone="success" />
            <Pill label={`+${plan.scoreImpact} Athlete Score`} tone="warning" />
          </View>
        </Card>

        <Card>
          <SectionTitle title="Warm-up" subtitle="Get the body ready without wasting time." />
          <View style={{ gap: 8 }}>
            {plan.warmup.map((item, index) => (
              <Text key={item} style={{ color: theme.colors.text, fontSize: 14 }}>
                {index + 1}. {item}
              </Text>
            ))}
          </View>
        </Card>

        <Card>
          <SectionTitle title="Main Work" subtitle="Progressive overload is baked in, not left to guesswork." />
          <View style={{ gap: 14 }}>
            {plan.exercises.map((exercise) => (
              <View key={exercise.name} style={{ borderBottomColor: theme.colors.border, borderBottomWidth: 1, paddingBottom: 14, gap: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
                  <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "800", flex: 1 }}>{exercise.name}</Text>
                  <Text style={{ color: theme.colors.primary, fontSize: 12, fontWeight: "800" }}>{exercise.sets} x {exercise.reps}</Text>
                </View>
                <Text style={{ color: theme.colors.muted, fontSize: 12 }}>Rest {exercise.restSec} seconds between sets</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                  {exercise.cues.map((cue) => (
                    <Pill key={cue} label={cue} />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </Card>

        <Card>
          <SectionTitle title="Finish Strong" subtitle="This is where the athletic edge comes back." />
          <Text style={{ color: theme.colors.text, fontSize: 15, lineHeight: 22 }}>{plan.finisher}</Text>
          <ActionButton label="Log Session" />
        </Card>
      </ScrollView>
    </Screen>
  );
}
