import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import { login, logout, setLoginLoading } from '../redux';

export default function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      dispatch(setLoginLoading(true));
      try {
        const response = await axios.get(API_ENDPOINTS.CURRENT_USER);
        dispatch(login(response.data.data.attributes));
      } catch (e) {
        dispatch(logout());
      }
      dispatch(setLoginLoading(false));
    };
    loadData();
  }, [dispatch]);

  return null;
}
