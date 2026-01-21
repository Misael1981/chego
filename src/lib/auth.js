import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./prisma";

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

        const dbUser = await db.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        });

        token.role = dbUser?.role || "USER";
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId;
        session.user.role = token.role;
      }

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
