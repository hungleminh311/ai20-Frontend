import { createAxios } from "@/api/base/createAxios";
import { useCallback, useState } from "react";

const useCreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const mutate = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await createAxios().post<{ message: string }>(
        "/register",
        {
          email,
          password,
        },
      );
      setLoading(false);
      return Promise.resolve(response);
    } catch (e) {
      setLoading(false);
      return Promise.reject(e);
    }
  }, []);
  return {
    loading,
    mutate,
  };
};

export default useCreateAccount;
