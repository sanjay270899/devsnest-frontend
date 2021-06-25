import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';
import { saveStorage } from './utils/localStorage';

store.subscribe(() => {
  saveStorage(`${window.origin}/state`, store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
