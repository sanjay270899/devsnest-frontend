import { configureStore } from '@reduxjs/toolkit';

import { loadStorage } from '../utils/localStorage';
import loginReducer from './slices/loginSlice';

const preloadedState = loadStorage(`${window.origin}/state`) || {};

const store = configureStore({
  preloadedState,
  reducer: {
    login: loginReducer,
  },
});

export default store;
