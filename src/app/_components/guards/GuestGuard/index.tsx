import { FC, PropsWithChildren } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const GuestGuard: FC<PropsWithChildren> = async ({ children }) => {
  const session = await auth();
  if (session) {
    redirect("/");
  } else {
    return <>{children}</>;
  }
};

export default GuestGuard;
