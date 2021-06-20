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
    name: string;
    days: Days[];
    level: LiftLevel;
    workouts: Partial<{ [key in Days]: Workout }>;
};

export enum LiftLevel {
    BEGINNER = 0,
    NOVICE = 1,
    INTERMEDIATE = 2,
    ADVANCED = 3,
    ELITE = 4,
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

export const createProgram = (programId: number): Program | null => {
    let blueprint = programs.find((program: ProgramBlueprint) => program.id === programId);
    if (blueprint) {
        let workouts: Partial<{ [key in Days]: Workout }> = {};

        _.forOwn(blueprint.workouts, (value: WorkoutPreset[], key: string) => {
            let lifts: Lift[] = [];
            value.forEach((wp: WorkoutPreset) => {
                let setsPreset = (nSunsPresets as Presets)[wp.exercise].find((preset: Preset) => preset.id === wp.sets);
                if (setsPreset) {
                    lifts.push({ exercise: wp.exercise, sets: setsPreset.sets });
                }
            });

            workouts[parseInt(key) as Days] = { lifts, accessories: [] };
        });

        return {
            name: blueprint.name,
            days: blueprint.days,
            level: blueprint.level,
            workouts: workouts,
        };
    }
    return null;
};
