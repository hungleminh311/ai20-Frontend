"use client";

import { FC } from "react";
import RegisterSimple from "@/app/_components/ai/auth/register-simple";
import useCreateAccount from "@/api/auth/useCreateAccount";
import { authenticate } from "@/api/auth/authenticate";

const Page: FC = () => {
  const { mutate: createAccount } = useCreateAccount();
  return (
    <RegisterSimple
      onLogin={async ({ email, password }) => {
        await createAccount(email, password);
        await authenticate(email, password);
      }}
    />
  );
};

export default Page;
