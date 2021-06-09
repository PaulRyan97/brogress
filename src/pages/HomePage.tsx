import React from 'react';
import { StoreType } from '../store';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import { NAVIGATION_ROUTES } from '../navigation/navigationConstants';

const useStyles = makeStyles((theme) => ({}));

type Props = {
    showWizard: boolean;
};

const HomePage = (props: Props) => {
    const { showWizard } = props;
    const classes = useStyles();

    if (showWizard) {
        return <Redirect to={NAVIGATION_ROUTES.WIZARD} />;
    }

    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

const mapStateToProps = (store: StoreType) => {
    return {
        showWizard: store.appState.showWizard,
    };
};

export default connect(mapStateToProps)(HomePage);
