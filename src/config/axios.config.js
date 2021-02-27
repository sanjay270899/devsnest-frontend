import Axios from 'axios';
import { API_BASE_URL } from '../constants/api';

const axios = Axios.create({
  baseURL: API_BASE_URL,
});

export default axios;
