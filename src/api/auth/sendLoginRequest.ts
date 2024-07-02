import { createAxios } from "@/api/base/createAxios";

export const sendLoginRequest = (email: string, password: string) => {
  return createAxios().post("/login", { email, password });
};
