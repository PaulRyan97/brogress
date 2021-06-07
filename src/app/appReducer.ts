import { createReducer, Handler } from '../utils/createReducer'
import { APP_ACTION_TYPES } from './appActions'
import { AnyAction } from 'redux'

export type AppStateType = {
    showWizard: boolean
}

const appDefaultState: AppStateType = {
    showWizard: false,
}

export default createReducer(appDefaultState, [
    new Handler(APP_ACTION_TYPES.SHOW_WIZARD, (state: AppStateType, action: AnyAction) => {
        state.showWizard = action.show
        return state
    }),
])
