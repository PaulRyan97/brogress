import { createReducer, Handler } from '../utils/createReducer'
import { Profile } from './profileTypes'
import { PROFILE_ACTION_TYPES, SetProfileActionType } from './profileActions'

export type ProfileStateType = {
    profile: Profile | null
}

const profileDefaultState: ProfileStateType = {
    profile: null,
}

export default createReducer(profileDefaultState, [
    new Handler(PROFILE_ACTION_TYPES.SET_PROFILE_INFO, (state: ProfileStateType, action: SetProfileActionType) => {
        state.profile = action.info
        return state
    }),
])
