import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import { login, logout, loginLoadingState } from '../actions/loginActions';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import myLog from '../utils/myLog';

export default function useAuth() {
  const loginState = useSelector((state) => state.loginState);
  const actions = useActions({ login, logout, loginLoadingState });

  useEffect(() => {
    actions.loginLoadingState(true);
    axios
      .get(API_ENDPOINTS.CURRENT_USER)
      .then((response) => {
        myLog(response);
        actions.login(response.data.data.attributes);
      })
      .catch((e) => {
        myLog(e);
        actions.logout();
        actions.loginLoadingState(false);
      });

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loginState;
}
