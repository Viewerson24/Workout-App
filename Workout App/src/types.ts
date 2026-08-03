export type Equipment = "full_gym" | "dumbbells" | "home";

export type WorkoutFocus = "strength" | "hypertrophy" | "athletic";

export type UserProfile = {
  name: string;
  age: number;
  formerSport: string;
  availableTimeMinutes: number;
  equipment: Equipment;
  goal: string;
  heightCm: number;
  weightKg: number;
};

export type WorkoutExercise = {
  name: string;
  sets: number;
  reps: string;
  restSec: number;
  videoUrl: string;
  cues: string[];
};

export type WorkoutDay = {
  title: string;
  focus: WorkoutFocus;
  durationMinutes: number;
  warmup: string[];
  exercises: WorkoutExercise[];
  finisher: string;
  scoreImpact: number;
};

export type ProgressMetric = {
  label: string;
  current: string;
  target: string;
  delta: string;
};
