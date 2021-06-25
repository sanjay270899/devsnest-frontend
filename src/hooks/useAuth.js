import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import { logout, setLoginLoading, updateUser, useUser } from '../redux';

export default function useAuth() {
  const user = useUser();
  const dispatch = useDispatch();
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      dispatch(setLoginLoading(true));
      try {
        const response = await axios.get(API_ENDPOINTS.CURRENT_USER);
        dispatch(updateUser(response.data.data.attributes));
      } catch (e) {
        dispatch(logout());
      }
      dispatch(setLoginLoading(false));
    };
    if (initial && user) {
      loadData();
      setInitial(false);
    }
  }, [initial, user, dispatch]);

  return null;
}
