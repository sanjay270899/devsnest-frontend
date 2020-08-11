import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV == 'production'
      ? process.env.REACT_APP_BASE_PROD_IP
      : process.env.REACT_APP_BASE_DEV_IP,
});

export default instance;
