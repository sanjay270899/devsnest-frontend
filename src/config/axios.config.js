import Axios from 'axios';
import { API_BASE_URL } from '../constants/api';
import { loadStorage } from '../utils/localStorage';

const axios = Axios.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    let request = config;
    const state = loadStorage(`${window.origin}/state`);
    if (
      state &&
      state.loginState &&
      state.loginState.user &&
      state.loginState.user.authorization
    ) {
      request.headers['Authorization'] = state.loginState.user.authorization;
    }
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
