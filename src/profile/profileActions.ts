import {Profile} from "./profileTypes";

export const PROFILE_ACTION_TYPES = Object.freeze({
    SET_PROFILE_INFO: "SET_PROFILE_INFO"
});


export type SetProfileActionType = { type: string, info: Profile };
export const setProfileInformation = (profile: Profile) => {
    return { type: PROFILE_ACTION_TYPES.SET_PROFILE_INFO, info: profile};
};

