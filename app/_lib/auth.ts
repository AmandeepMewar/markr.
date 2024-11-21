import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        if (!user.email || !user.name) return false;

        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await createUser({ email: user.email, fullName: user.name });
        }

        return true;
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});
