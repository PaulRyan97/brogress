export const APP_ACTION_TYPES = Object.freeze({
    SHOW_WIZARD: 'SHOW_WIZARD',
});

export const showWizard = (show: boolean) => {
    return { type: APP_ACTION_TYPES.SHOW_WIZARD, show };
};
