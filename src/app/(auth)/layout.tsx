import { FC, PropsWithChildren } from "react";
import GuestGuard from "@/app/_components/guards/GuestGuard";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <GuestGuard>{children}</GuestGuard>;
};

export default Layout;
