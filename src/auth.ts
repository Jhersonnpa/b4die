import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserByEmail, getUserById, getUserByUsername } from "@/data/user";
import {
  deleteAllButLastAccountByUserId,
  deleteFirstAccountByUserId,
  getAccountsByProvider,
  getAccountsByUserId,
} from "./data/account";
import { User, UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user, account }) {
      const existingUserAccounts = await deleteAllButLastAccountByUserId(
        user.id,
        account.provider
      );

      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });

      if (!user.username) {
        let usernameRandom = `${user.name?.replace(/ /g, "")}-${Math.floor(
          Math.random() * 1000 + 1
        )}`;
        let existUsername = await getUserByUsername(usernameRandom);

        if (existUsername) {
          while (existUsername) {
            usernameRandom = `${user.name?.replace(/ /g, "")}-${Math.floor(
              Math.random() * 1000 + 1
            )}`;
            existUsername = await getUserByUsername(usernameRandom);
          }
        }

        await db.user.update({
          where: { id: user.id },
          data: { username: usernameRandom },
        });
      }
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserByEmail(user.email);
      if (!existingUser) return false;
    },
    async session({ token, session }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }
        if (token.username) {
          session.user.username = token.username as string;
        }
        if (token.surname) {
          session.user.surname = token.surname as string;
        }
        if (token.emailVerified) {
          session.user.emailVerified = token.emailVerified as Date;
        }
        if (token.birthDate) {
          session.user.birthDate = token.birthDate as Date;
        }
        if (token.puntuation) {
          session.user.puntuation = token.puntuation as Number;
        }
        if (token.country) {
          session.user.country = token.country as string;
        }
        if (token.phone) {
          session.user.phone = token.phone as Number;
        }
        if (token.createdAt) {
          session.user.createdAt = token.createdAt as Date;
        }
        if (token.role) {
          session.user.role = token.role as UserRole;
        }
        if (token.isTwoFactorEnabled) {
          session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as Boolean;
        }
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.username = existingUser.username;
      token.surname = existingUser.surname;
      token.emailVerified = existingUser.emailVerified;
      token.birthDate = existingUser.birthDate;
      token.puntuation = existingUser.puntuation;
      token.country = existingUser.country;
      token.phone = existingUser.phone;
      token.createdAt = existingUser.createdAt;
      token.role = existingUser.role;
      token.accounts = existingUser.accounts;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.experiencesDone = existingUser.experiencesDone;
      token.experiencesSaved = existingUser.experiencesSaved;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
