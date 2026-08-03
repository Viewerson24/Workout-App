import { ProgressMetric, UserProfile, WorkoutDay } from "../types";

export const user: UserProfile = {
  name: "Jordan",
  age: 31,
  formerSport: "Basketball",
  availableTimeMinutes: 42,
  equipment: "full_gym",
  goal: "Regain strength, athleticism, and confidence",
  heightCm: 183,
  weightKg: 91
};

export const streakDays = 18;
export const athleteScore = 78;
export const weeklyCompletion = 4;
export const weeklyTarget = 5;

export const milestones = [
  { label: "Bench 225", progress: 0.82 },
  { label: "5 strict pull-ups", progress: 0.64 },
  { label: "10k steps/day", progress: 0.9 },
  { label: "Under 18% body fat", progress: 0.71 }
];

export const progressMetrics: ProgressMetric[] = [
  { label: "Bench press", current: "205 lb", target: "225 lb", delta: "+8 lb this month" },
  { label: "Body weight", current: "201 lb", target: "195 lb", delta: "-1.2 lb this week" },
  { label: "Waist", current: "34.5 in", target: "33 in", delta: "-0.4 in this month" },
  { label: "Resting HR", current: "58 bpm", target: "54 bpm", delta: "-3 bpm vs. last month" }
];

export const todayWorkout: WorkoutDay = {
  title: "Upper Power + Core",
  focus: "strength",
  durationMinutes: 41,
  warmup: ["6 min bike", "Band pull-aparts", "Hip airplanes", "Scap push-ups"],
  exercises: [
    {
      name: "Barbell Bench Press",
      sets: 4,
      reps: "5",
      restSec: 150,
      videoUrl: "https://example.com/bench",
      cues: ["Brace before the unrack", "Touch low chest", "Drive feet through the floor"]
    },
    {
      name: "Chest-Supported Row",
      sets: 4,
      reps: "8",
      restSec: 90,
      videoUrl: "https://example.com/row",
      cues: ["Pause at the top", "Keep ribs down", "Pull elbows to hips"]
    },
    {
      name: "Incline Dumbbell Press",
      sets: 3,
      reps: "10",
      restSec: 75,
      videoUrl: "https://example.com/incline",
      cues: ["Soft arch", "Control the eccentric", "Stop shy of failure"]
    },
    {
      name: "Pallof Press",
      sets: 3,
      reps: "12/side",
      restSec: 45,
      videoUrl: "https://example.com/pallof",
      cues: ["Stay tall", "Do not rotate", "Exhale on extension"]
    }
  ],
  finisher: "8-minute EMOM: 8 kettlebell swings + 6 push-ups",
  scoreImpact: 6
};

export const weeklyPlan = [
  { day: "Mon", title: "Lower Strength", focus: "Strength", duration: "44 min" },
  { day: "Tue", title: "Zone 2 + Mobility", focus: "Recovery", duration: "35 min" },
  { day: "Wed", title: "Upper Power", focus: "Strength", duration: "41 min" },
  { day: "Thu", title: "Off / Walk", focus: "Recovery", duration: "20 min" },
  { day: "Fri", title: "Full Body Athletic", focus: "Athletic", duration: "43 min" }
];

export const badges = ["Comeback Week", "5-Day Streak", "First PR", "Consistency King"];

export const communityPosts = [
  {
    author: "Mike R.",
    title: "Hit a new deadlift PR after 3 years off",
    body: "Followed the 45-minute plan and got back to 405 without grinding every day."
  },
  {
    author: "Sam L.",
    title: "Travel week saved",
    body: "Coach swapped in dumbbell work and a hotel treadmill session. Zero missed workouts."
  }
];

export const coachResponses = [
  "If you only have 30 minutes, keep the main lift and the finisher, then trim accessory volume.",
  "For a sore lower back, swap hinge work for split squats and sled pushes while keeping intensity up.",
  "Traveling? Use dumbbells, slow eccentrics, and short rests to preserve the training effect."
];
