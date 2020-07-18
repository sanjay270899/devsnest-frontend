import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://13.127.92.196:3000/",
});

export default instance;
