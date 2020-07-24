import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://13.233.106.214:3000/',
});

export default instance;
