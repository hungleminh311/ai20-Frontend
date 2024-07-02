import axios from "axios";

export const createAxios = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
  instance.interceptors.request.use(async (config) => {
    return config;
  });
  return instance;
};
