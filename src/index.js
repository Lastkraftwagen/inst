import React from 'react';
import { Provider } from "react-redux";

import ReactDOM from 'react-dom';
import './css/App.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import configureStore  from "./store/index"

const store  = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
