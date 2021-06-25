import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';

function submitQuestion({ question_unique_id, status }) {
  const res = axios.post(API_ENDPOINTS.SUBMISSIONS, {
    data: {
      attributes: { question_unique_id, status },
      type: 'submissions',
    },
  });

  return res;
}

function statusToNumber(string) {
  switch (string) {
    case 'done':
      return 0;
    case 'notdone':
      return 1;
    case 'doubt':
      return 2;
    default:
      return 1;
  }
}

function statusToString(number) {
  switch (number) {
    case 0:
      return 'done';
    case 1:
      return 'notdone';
    case 2:
      return 'doubt';
    default:
      return 'notdone';
  }
}

function nextStatus(number) {
  if (typeof number === 'string') {
    number = statusToNumber(number);
  }
  return (number + 1) % 3;
}

export { submitQuestion, statusToString, statusToNumber, nextStatus };
