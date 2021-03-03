import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import { saveStorage } from './utils/localStorage';
import App from './App';

const store = configureStore();

store.subscribe(() => {
  var state = store.getState();
  saveStorage(`${window.origin}/state`, { ...state });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
