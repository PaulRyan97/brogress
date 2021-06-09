import { createReducer, Handler } from '../utils/createReducer';
import { AnyAction } from 'redux';
import { WIZARD_ACTION_TYPES, WizardStages } from './wizardActions';

export type WizardStateType = {
    stage: WizardStages;
};

const wizardDefaultState: WizardStateType = {
    stage: WizardStages.WELCOME,
};

export default createReducer(wizardDefaultState, [
    new Handler(WIZARD_ACTION_TYPES.SET_STAGE, (state: WizardStateType, action: AnyAction) => {
        state.stage = action.stage;
        return state;
    }),
]);
