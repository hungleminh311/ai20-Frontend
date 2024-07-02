"use client";

import { FC } from "react";
import LoginSimple from "@/app/_components/ai/auth/login-simple";
import { authenticate } from "@/api/auth/authenticate";

const Page: FC = () => {
  return (
    <LoginSimple
      onLogin={async ({ email, password }) => {
        const response = await authenticate(email, password);
        return Promise.reject(response);
      }}
    />
  );
};

export default Page;
