import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import store from './services/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app'),
);
