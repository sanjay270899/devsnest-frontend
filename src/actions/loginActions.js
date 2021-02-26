import { LOGIN, LOGIN_LOADING, LOGOUT } from '../constants/types';

export const loginLoadingState = (loadingState) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
      payload: {
        isLoading: loadingState,
      },
    });
  };
};

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: {
        loggedIn: true,
        user,
      },
    });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
      payload: {
        loggedIn: false,
        user: null,
      },
    });
  };
};
