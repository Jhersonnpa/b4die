import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {db} from "@/lib/db"
import { getUserById } from "@/data/user"

export const { 
  handlers:{GET, POST},
  auth,
  signIn,
  signOut } = NextAuth({
    pages: {
      signIn: "/auth/login",
      error: "/auth/error"
    },
    callbacks: {
      async signIn({user, account}) {
        if (account?.provider !== "credentials") return true
        try {
          const existingUser = await getUserById(user.id)
          return true
        } catch {
          return false
        }
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
    session: {strategy: "jwt"},
    ...authConfig,
  })