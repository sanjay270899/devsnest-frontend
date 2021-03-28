import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';

export const getScrums = async () => {
  const response = await axios.get(`${API_ENDPOINTS.SCRUMS}`);
  return response.data;
};

export const saveScrum = async (data) => {
  const response = await axios.put(`${API_ENDPOINTS.SCRUMS}/${data.id}`, {
    data: {
      attributes: {
        attdandace: data.attendance,
        data: data.data,
      },
      id: data.id,
      type: 'scrums',
    },
  });
  return response.data;
};

export const saveCurrentUserScrum = async (data) => {
  if (data.id) {
    const response = await axios.put(`${API_ENDPOINTS.SCRUMS}/${data.id}`, {
      data: {
        attributes: {
          data: data.data,
        },
        id: data.id,
        type: 'scrums',
      },
    });
    return response.data;
  } else {
    const response = await axios.post(`${API_ENDPOINTS.SCRUMS}`, {
      data: {
        attributes: {
          data: data.data,
        },
        type: 'scrums',
      },
    });
    return response.data;
  }
};
