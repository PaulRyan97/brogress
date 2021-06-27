import { Days } from '../common/commonTypes';
import programs from './data/programs.json';
import nSunsPresets from './data/nSunsPresets.json';
import _ from 'lodash';

export type ProgramBlueprint = {
    id: number;
    name: string;
    days: Days[];
    level: LiftLevel;
    workouts: Partial<{ [key in Days]: WorkoutPreset[] }>;
};

export type Program = {
    id: string;
    name: string;
    days: Days[];
    level: LiftLevel;
    workouts: Partial<{ [key in Days]: Workout }>;
};

export enum LiftLevel {
    BEGINNER = 1,
    NOVICE = 2,
    INTERMEDIATE = 3,
    ADVANCED = 4,
    ELITE = 5,
}

export type Workout = {
    lifts: Lift[];
    accessories: string[];
};

export type WorkoutPreset = {
    exercise: ExerciseIDs;
    sets: string;
};

export type Lift = {
    exercise: ExerciseIDs;
    sets: Set[];
};

export type Presets = {
    [key in ExerciseIDs]: Preset[];
};

export type Preset = {
    id: string;
    sets: Set[];
};

export type Set = {
    reps: number;
    percentage: number;
    untilFailure?: boolean;
};

export enum ExerciseIDs {
    BENCH_PRESS,
    SQUAT,
    DEADLIFT,
    OVERHEAD_PRESS,
}

export type Exercise = {
    id: ExerciseIDs;
    name: string;
    target: string[];
};
