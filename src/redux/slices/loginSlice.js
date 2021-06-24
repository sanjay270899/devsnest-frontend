import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    loggedIn: false,
    user: null,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setLoginLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default loginSlice.reducer;

export const {
  login,
  logout,
  setLoginLoading,
  updateUser,
} = loginSlice.actions;

export const useLoginState = () => {
  return useSelector((state) => state.login);
};

export const useUser = () => {
  return useSelector((state) => state.login.user);
};
