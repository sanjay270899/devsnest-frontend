import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import { login, loginLoadingState } from '../actions/loginActions';
import getCookie from '../utils/getCookie';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';

export default function useAuth() {
  const loginState = useSelector((state) => state.loginState);
  const actions = useActions({ login, loginLoadingState });

  useEffect(() => {
    actions.loginLoadingState(true);
    const authSessionId = getCookie('_interslice_session');
    if (authSessionId) {
      axios
        .get(API_ENDPOINTS.CURRENT_USER)
        .then((resp) => {
          console.log(resp);
          actions.login(resp.data.attributes);
        })
        .catch((e) => {
          console.error(e);
          actions.loginLoadingState(false);
        });
    } else {
      actions.loginLoadingState(false);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loginState;
}
