import programs from './data/programs.json';
import { Days } from '../common/commonTypes';
import _ from 'lodash';
import nSunsPresets from './data/nSunsPresets.json';
import { Lift, Preset, Presets, Program, ProgramBlueprint, Workout, WorkoutPreset } from './programTypes';

export const PROGRAM_ACTION_TYPES = Object.freeze({
    LOAD_PROGRAMS: 'LOAD_PROGRAMS',
    SELECT_PROGRAM: 'SELECT_PROGRAM',
});

export type LoadProgramsActionType = { type: string; programsData: Program[] };
export const loadPrograms = () => {
    let programsData = programs.map((program: ProgramBlueprint) => {
        let workouts: Partial<{ [key in Days]: Workout }> = {};

        _.forOwn(program.workouts, (value: WorkoutPreset[] | undefined, key: string) => {
            let lifts: Lift[] = [];
            value?.forEach((wp: WorkoutPreset) => {
                let setsPreset = (nSunsPresets as Presets)[wp.exercise].find((preset: Preset) => preset.id === wp.sets);
                if (setsPreset) {
                    lifts.push({ exercise: wp.exercise, sets: setsPreset.sets });
                }
            });

            workouts[parseInt(key) as Days] = { lifts, accessories: [] };
        });

        return {
            id: program.id,
            name: program.name,
            description: program.description,
            days: program.days,
            level: program.level,
            workouts: workouts,
        };
    });

    return { type: PROGRAM_ACTION_TYPES.LOAD_PROGRAMS, programsData };
};

export type SelectProgramActionType = { type: string; program: Program };
export const selectProgram = (program: Program) => {
    return { type: PROGRAM_ACTION_TYPES.SELECT_PROGRAM, program };
};
