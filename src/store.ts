import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer, { AppStateType } from './app/appReducer';
import wizardReducer, { WizardStateType } from './wizard/wizardReducer';
import profileReducer, { ProfileStateType } from './profile/profileReducer';

const reducers = combineReducers({
    appState: appReducer,
    profileState: profileReducer,
    wizardState: wizardReducer,
});

const logger = createLogger({});

export type StoreType = {
    appState: AppStateType;
    profileState: ProfileStateType;
    wizardState: WizardStateType;
};

const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

export default store;
