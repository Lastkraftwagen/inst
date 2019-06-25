import React from 'react';
import { Provider } from "react-redux";

import ReactDOM from 'react-dom';
import App from './redux/containers/App';
import configureStore  from "./redux/store/index"

const store  = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
