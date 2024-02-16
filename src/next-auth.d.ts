import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  username?: string;
  surname?: string;
  emailVerified?: DateTime;
  birthDate?: DateTime;
  puntuation: Float;
  country?: String;
  phone?: Int;
  createdAt: DateTime;
  role: UserRole;
  accounts: Array,
  isTwoFactorEnabled?: Boolean;
  experiencesDone: Array,
  experiencesSaved: Array
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
