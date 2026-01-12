import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./prisma";
import { createCourierIfNotExists } from "@/services/courier/create-courier";

/** @type {import("next-auth").NextAuthOptions} */
export const authOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
    async signIn({ user }) {
      if (!user?.id) return false;

      await createCourierIfNotExists(user.id, {
        name: user.name ?? "",
        phone: "",
      });

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
