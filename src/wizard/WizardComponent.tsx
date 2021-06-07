import React from 'react';
import {StoreType} from "../store";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {WIZARD_STAGES} from "./wizardActions";
import WelcomeScreenComponent from "./WelcomeScreenComponent";
import AddProfileComponent from "./AddProfileComponent";

const useStyles = makeStyles((theme) => ({
}));

type Props = {
    stage: WIZARD_STAGES;
};

const WizardComponent = (props: Props) => {
    const { stage } = props;
    const classes = useStyles();

    const stageToShow = () => {
        switch (stage) {
            case WIZARD_STAGES.WELCOME:
                return <WelcomeScreenComponent/>;
            case WIZARD_STAGES.PROFILE:
                return <AddProfileComponent/>;
            default:
                return null;
        }
    };

    return stageToShow();
};

const mapStateToProps = (store: StoreType) =>
{
    return {
        stage: store.wizardState.stage,
    }
};

export default connect(mapStateToProps)(WizardComponent);
