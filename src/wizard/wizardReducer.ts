import { createReducer, Handler } from '../utils/createReducer'
import { AnyAction } from 'redux'
import { WIZARD_ACTION_TYPES, WIZARD_STAGES } from './wizardActions'

export type WizardStateType = {
    stage: WIZARD_STAGES
}

const wizardDefaultState: WizardStateType = {
    stage: WIZARD_STAGES.WELCOME,
}

export default createReducer(wizardDefaultState, [
    new Handler(WIZARD_ACTION_TYPES.SET_STAGE, (state: WizardStateType, action: AnyAction) => {
        state.stage = action.stage
        return state
    }),
])
