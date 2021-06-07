import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '@ionic/react/css/core.css'
import { NAVIGATION_ROUTES } from '../navigation/navigationConstants'
import { makeStyles } from '@material-ui/core'
import HomePage from '../pages/HomePage'
import { connect } from 'react-redux'
import { getPreference, PREFERENCE_KEYS } from '../platformApis/Preferences'
import { Dispatch } from 'redux'
import { showWizard } from './appActions'
import WizardComponent from '../wizard/WizardComponent'

const useStyles = makeStyles((theme) => ({
    appStyle: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
}))

type Props = {
    dispatch: Dispatch
}

const App = (props: Props) => {
    const classes = useStyles()
    const { dispatch } = props

    useEffect(() => {
        getPreference(PREFERENCE_KEYS.SHOW_WIZARD).then((result) => dispatch(showWizard(result.value === null || !!result.value)))
    }, [])

    return (
        <div className={classes.appStyle}>
            <Router>
                <Switch>
                    <Route exact path={NAVIGATION_ROUTES.HOME}>
                        <HomePage />
                    </Route>
                    <Route exact path={NAVIGATION_ROUTES.WIZARD}>
                        <WizardComponent />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default connect()(App)
