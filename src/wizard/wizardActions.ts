export const WIZARD_ACTION_TYPES = Object.freeze({
    SET_STAGE: 'SET_STAGE',
});

export enum WizardStages {
    WELCOME = 0,
    PROFILE = 1,
    PROGRAM = 2,
}

export const setWizardStage = (stage: WizardStages) => {
    return { type: WIZARD_ACTION_TYPES.SET_STAGE, stage };
};
