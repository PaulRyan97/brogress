import React from 'react';
import { StoreType } from '../store';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { WizardStages } from './wizardActions';
import WelcomeScreenComponent from './WelcomeScreenComponent';
import AddProfileComponent from './AddProfileComponent';
import ChooseProgramComponent from './ChooseProgramComponent';
import { Redirect } from 'react-router';
import { NAVIGATION_ROUTES } from '../navigation/navigationConstants';

const useStyles = makeStyles((theme) => ({}));

type Props = {
    stage: WizardStages;
};

const WizardComponent = (props: Props) => {
    const { stage } = props;
    const classes = useStyles();

    const stageToShow = () => {
        switch (stage) {
            case WizardStages.WELCOME:
                return <WelcomeScreenComponent />;
            case WizardStages.PROFILE:
                return <AddProfileComponent />;
            case WizardStages.PROGRAM:
                return <ChooseProgramComponent />;
            default:
                return <Redirect to={NAVIGATION_ROUTES.HOME} />;
        }
    };

    return stageToShow();
};

const mapStateToProps = (store: StoreType) => {
    return {
        stage: store.wizardState.stage,
    };
};

export default connect(mapStateToProps)(WizardComponent);
