import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./theme/theme";
import {Provider} from "react-redux";
import store from "./store";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
          </MuiPickersUtilsProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
