import React from 'react';
import { StoreType } from '../store';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { WizardStages } from './wizardActions';
import WelcomeScreenComponent from './WelcomeScreenComponent';
import AddProfileComponent from './AddProfileComponent';
import ChooseProgramComponent from './ChooseProgramComponent';

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
                return null;
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
