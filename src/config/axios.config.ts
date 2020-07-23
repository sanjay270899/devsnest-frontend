import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://13.232.128.209:3000/',
});

export default instance;
