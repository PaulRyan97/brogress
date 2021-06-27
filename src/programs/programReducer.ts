import { createReducer, Handler } from '../utils/createReducer';
import { Program } from './programTypes';
import { LoadProgramsActionType, PROGRAM_ACTION_TYPES, SelectProgramActionType } from './programActions';

export type ProgramStateType = {
    programs: Program[];
    selectedProgram: Program | null;
};

const programsDefaultState: ProgramStateType = {
    programs: [],
    selectedProgram: null,
};

export default createReducer(programsDefaultState, [
    new Handler(PROGRAM_ACTION_TYPES.LOAD_PROGRAMS, (state: ProgramStateType, action: LoadProgramsActionType) => {
        state.programs = action.programsData;
        return state;
    }),
    new Handler(PROGRAM_ACTION_TYPES.SELECT_PROGRAM, (state: ProgramStateType, action: SelectProgramActionType) => {
        state.selectedProgram = action.program;
        return state;
    }),
]);
