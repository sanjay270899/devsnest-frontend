import { configureStore } from '@reduxjs/toolkit';

import { loadStorage } from '../utils/localStorage';
import loginReducer from './slices/loginSlice';

const preloadedState = loadStorage(`${window.origin}/state`) || {};

// Prevent the access of Private Components by Conditional Route before useAuth "/me" API
if (preloadedState.login) {
  preloadedState.login.isLoading = true;
}

const store = configureStore({
  preloadedState,
  reducer: {
    login: loginReducer,
  },
});

export default store;
