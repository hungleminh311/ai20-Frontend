import NextAuth, { User } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { createAxios } from "@/api/base/createAxios";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    account: User;
  }

  interface User {
    accessToken: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { data } = await createAxios().post<{ token: string }>(
            "/login",
            credentials,
          );
          return {
            id: "1",
            email: String(credentials.email),
            accessToken: data.token,
          };
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ user, token }) => {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.account = user;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.accessToken = token.accessToken as string;
      session.account = token.account as User;
      return session;
    },
  },
});
