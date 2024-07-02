import { FC, PropsWithChildren } from "react";
import AuthGuard from "@/app/_components/guards/AuthGuard";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default Layout;
