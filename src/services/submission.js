import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';

function submitQuestion({ question_unique_id, status, user_id }) {
  const res = axios.post(API_ENDPOINTS.SUBMISSIONS, {
    data: {
      attributes: {
        id: user_id,
        question_unique_id,
        status,
      },
      type: 'submissions',
    },
  });

  return res;
}

export { submitQuestion };
