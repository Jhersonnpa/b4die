import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import { getAccountsByUserId, getUserByEmail, getUserById } from "@/data/user"
import { deleteAllButLastAccountByUserId, deleteFirstAccountByUserId, getAccountsByProvider } from "./data/account"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut } = NextAuth({
    pages: {
      signIn: "/auth/login",
      signOut: "/auth/login",
      error: "/auth/error"
    },
    events: {
      async linkAccount({ user,account }) {
        const existingUserAccounts = await deleteAllButLastAccountByUserId(user.id,account.provider)
        console.log(existingUserAccounts)
        await db.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() }
        })
      }
    },
    callbacks: {
      async signIn({ user, account }) {
        const existingUser = await getUserByEmail(user.email)
        if (account?.provider !== "credentials") {
          if (!existingUser) {
            // This is a new user, no need to link accounts
            return true;
          }
          return true;
        }
        console.log(`Antes del getusrID`)

        if (!existingUser) return false

      },
      async session({ token, session }) {
        if (token.sub && session.user) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role as UserRole
        }

        return session
      },
      async jwt({ token }) {
        if (!token.sub) return token

        const existingUser = await getUserById(token.sub)

        if (!existingUser) return token

        token.role = existingUser.role
        return token
      }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
  })

