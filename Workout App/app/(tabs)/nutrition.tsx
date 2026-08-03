import { ScrollView, Text, View } from "react-native";
import { Card, Pill, Screen, SectionTitle } from "../../src/components/ui";
import { user } from "../../src/data/mock";
import { theme } from "../../src/theme";

const calories = Math.round(user.weightKg * 14.4 + 250);
const protein = Math.round(user.weightKg * 2.1);
const waterGoal = 110;

export default function NutritionScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 32, gap: 18 }} showsVerticalScrollIndicator={false}>
        <Card style={{ backgroundColor: theme.colors.surfaceSoft }}>
          <SectionTitle title="Nutrition" subtitle="Simple targets that support training without turning meals into homework." />
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            <Pill label={`${calories} cal target`} tone="primary" />
            <Pill label={`${protein} g protein`} tone="success" />
            <Pill label={`${waterGoal} oz water`} tone="warning" />
          </View>
        </Card>

        <Card>
          <SectionTitle title="Daily Targets" />
          <View style={{ gap: 12 }}>
            <View>
              <Text style={{ color: theme.colors.muted, fontSize: 12 }}>Calories</Text>
              <Text style={{ color: theme.colors.text, fontSize: 26, fontWeight: "900" }}>{calories}</Text>
            </View>
            <View>
              <Text style={{ color: theme.colors.muted, fontSize: 12 }}>Protein</Text>
              <Text style={{ color: theme.colors.text, fontSize: 26, fontWeight: "900" }}>{protein} g</Text>
            </View>
            <View>
              <Text style={{ color: theme.colors.muted, fontSize: 12 }}>Hydration</Text>
              <Text style={{ color: theme.colors.text, fontSize: 26, fontWeight: "900" }}>{waterGoal} oz</Text>
            </View>
          </View>
        </Card>

        <Card>
          <SectionTitle title="Meal Suggestions" subtitle="Fast, repeatable meals that support the comeback." />
          {[
            "Greek yogurt, berries, honey, and granola",
            "Chicken rice bowl with avocado and salsa",
            "Eggs, potatoes, fruit, and a protein shake",
            "Lean steak, rice, and roasted vegetables"
          ].map((meal) => (
            <Text key={meal} style={{ color: theme.colors.text, fontSize: 14, lineHeight: 20 }}>• {meal}</Text>
          ))}
        </Card>

        <Card>
          <SectionTitle title="Water Tracking" subtitle="Keep it simple and visible." />
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View key={index} style={{ width: 44, height: 62, borderRadius: 12, backgroundColor: index < 4 ? "rgba(74,222,128,0.22)" : "rgba(255,255,255,0.06)" }} />
            ))}
          </View>
        </Card>
      </ScrollView>
    </Screen>
  );
}
