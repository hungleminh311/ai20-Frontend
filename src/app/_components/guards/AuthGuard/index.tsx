import { FC, PropsWithChildren } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AuthGuard: FC<PropsWithChildren> = async ({ children }) => {
  if (process.env.NEXT_PUBLIC_AUTH_ENABLED === "true") {
    const session = await auth();
    if (session?.user) {
      return <>{children}</>;
    } else {
      redirect("/login");
    }
  } else {
    return <>{children}</>;
  }
};

export default AuthGuard;
