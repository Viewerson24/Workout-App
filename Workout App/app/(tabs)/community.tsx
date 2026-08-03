import { ScrollView, Text, View } from "react-native";
import { Card, Pill, Screen, SectionTitle } from "../../src/components/ui";
import { badges, communityPosts } from "../../src/data/mock";
import { theme } from "../../src/theme";

export default function CommunityScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 32, gap: 18 }} showsVerticalScrollIndicator={false}>
        <Card style={{ backgroundColor: theme.colors.surfaceSoft }}>
          <SectionTitle title="Community" subtitle="Share progress, stay accountable, and compete with people who actually get it." />
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            <Pill label="Monthly challenge" tone="primary" />
            <Pill label="Accountability groups" tone="success" />
            <Pill label="Badge system" tone="warning" />
          </View>
        </Card>

        <Card>
          <SectionTitle title="Badges" />
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            {badges.map((badge) => (
              <Pill key={badge} label={badge} />
            ))}
          </View>
        </Card>

        <Card>
          <SectionTitle title="Recent Wins" subtitle="The feed is built around effort and progress, not noise." />
          <View style={{ gap: 14 }}>
            {communityPosts.map((post) => (
              <View key={post.title} style={{ borderBottomWidth: 1, borderBottomColor: theme.colors.border, paddingBottom: 14, gap: 6 }}>
                <Text style={{ color: theme.colors.primary, fontSize: 12, fontWeight: "800" }}>{post.author}</Text>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "800" }}>{post.title}</Text>
                <Text style={{ color: theme.colors.muted, fontSize: 13, lineHeight: 20 }}>{post.body}</Text>
              </View>
            ))}
          </View>
        </Card>

        <Card>
          <SectionTitle title="Premium Community" subtitle="Exclusive challenges, progress sharing, and coaching access at the subscription tier." />
          {[
            "Leaderboards by consistency, not just max lifts",
            "Challenge rooms for 7-day and 30-day streaks",
            "Share progress photos and milestones with accountability partners"
          ].map((item) => (
            <Text key={item} style={{ color: theme.colors.text, fontSize: 14, lineHeight: 20 }}>• {item}</Text>
          ))}
        </Card>
      </ScrollView>
    </Screen>
  );
}
