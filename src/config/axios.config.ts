import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://13.232.2.76:3000/',
});

export default instance;
