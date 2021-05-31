import React from "react";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import '@ionic/react/css/core.css';
import {NAVIGATION_ROUTES} from "../navigation/navigationConstants";
import WelcomeScreenComponent from "../wizard/WelcomeScreenComponent";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appStyle: {
        height: "100%",
        width: "100%",
        position: "absolute",
    },
}));


const App: React.FC = () => {

    const classes = useStyles();

    return (<div className={classes.appStyle}>
        <Router>
            <Switch>
                <Route exact path={NAVIGATION_ROUTES.HOME}>
                    <div>
                        <h2>Home</h2>
                    </div>
                </Route>
                <Route exact path={NAVIGATION_ROUTES.WELCOME_SCREEN}>
                    <WelcomeScreenComponent/>
                </Route>
            </Switch>
        </Router>
    </div>);
};

export default App;
