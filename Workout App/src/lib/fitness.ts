import { Equipment, WorkoutDay, WorkoutFocus } from "../types";

export function calculateAthleteScore(input: {
  strength: number;
  consistency: number;
  recovery: number;
  mobility: number;
  composition: number;
  cardio: number;
}) {
  const weighted =
    input.strength * 0.28 +
    input.consistency * 0.2 +
    input.recovery * 0.12 +
    input.mobility * 0.12 +
    input.composition * 0.14 +
    input.cardio * 0.14;

  return Math.round(Math.max(0, Math.min(100, weighted)));
}

export function buildWorkoutPlan(minutes: number, equipment: Equipment): WorkoutDay {
  const focus: WorkoutFocus = minutes <= 35 ? "athletic" : minutes <= 45 ? "strength" : "hypertrophy";

  const equipmentPrefix =
    equipment === "full_gym"
      ? "Barbell"
      : equipment === "dumbbells"
      ? "Dumbbell"
      : "Bodyweight";

  return {
    title: `${focus === "athletic" ? "Athletic Reset" : focus === "strength" ? "Heavy Push" : "Volume Builder"}`,
    focus,
    durationMinutes: minutes,
    warmup: ["3 min cardio", "Dynamic mobility", "Activation series"],
    exercises: [
      {
        name: `${equipmentPrefix} Squat Pattern`,
        sets: 4,
        reps: focus === "athletic" ? "6" : "5",
        restSec: 120,
        videoUrl: "https://example.com",
        cues: ["Stay stacked", "Own the bottom", "Explode up"]
      },
      {
        name: `${equipmentPrefix} Horizontal Push`,
        sets: 4,
        reps: "6-8",
        restSec: 90,
        videoUrl: "https://example.com",
        cues: ["Control descent", "Brace hard", "Finish strong"]
      },
      {
        name: `${equipmentPrefix} Pull`,
        sets: 4,
        reps: "8",
        restSec: 75,
        videoUrl: "https://example.com",
        cues: ["Lead with elbows", "Pause at peak", "Keep ribs down"]
      }
    ],
    finisher: minutes <= 35 ? "6-minute density circuit" : "8-minute conditioning block",
    scoreImpact: focus === "athletic" ? 7 : 5
  };
}

export function estimateGoalDate(completionRate: number, weeksRemaining: number) {
  const adjusted = Math.max(4, Math.round(weeksRemaining / Math.max(0.45, completionRate)));
  const target = new Date();
  target.setDate(target.getDate() + adjusted * 7);
  return target.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
