import type { ActivityLevel, Gender, GoalType } from './enums';

export type WeightEntry = {
  date: string;
  weight: number;
}

export type Goal = {
  type: GoalType;
  targetWeight: number;
  targetDate?: string;
}

export type User = {
  id: string;
  email: string;
  nickname: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  gender?: Gender;
  height: number;
  startWeight: number;
  currentWeight: number;
  activityLevel: ActivityLevel;
  bmi: number;
  calories: number;
  goal: Goal;
  points: number;
  weightHistory: WeightEntry[];
  lastWeightUpdate?: string;
  locale?: string;
  createdAt: string;
  lastLoginAt?: string;
}
