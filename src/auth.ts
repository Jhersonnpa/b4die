import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import { getUserByEmail, getUserById, getUserByUsername } from "@/data/user"
import { deleteAllButLastAccountByUserId, deleteFirstAccountByUserId, getAccountsByProvider, getAccountsByUserId } from "@/data/account"
import { User, UserRole } from "@prisma/client"

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
      async linkAccount({ user, account }) {
        const existingUserAccounts = await deleteAllButLastAccountByUserId(user.id, account.provider)

        await db.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() }
        })

        if (!user.username) {
          let usernameRandom = `${user.name?.replace(/ /g, "")}-${Math.floor(Math.random() * 1000 + 1)}`;
          let existUsername = await getUserByUsername(usernameRandom)

          if (existUsername) {
            while (existUsername) {
              usernameRandom = `${user.name?.replace(/ /g, "")}-${Math.floor(Math.random() * 1000 + 1)}`;
              existUsername = await getUserByUsername(usernameRandom)
            }
          }
          

          await db.user.update({
            where: { id: user.id },
            data: { username: usernameRandom }
          })
        }
      }
    },
    callbacks: {
      async signIn({ user, account }) {

        if (account?.provider !== "credentials") return true

        const existingUser = await getUserByEmail(user.email)
        if (!existingUser) return false

      },
      async session({ token, session }) {
        console.log(token)
        if (token.sub && session.user) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role as UserRole
        }
        if (token.username && session.user) {
          session.user.username = token.username as string
        }

        return session
      },
      async jwt({ token }) {
        if (!token.sub) return token

        const existingUser = await getUserById(token.sub)

        if (!existingUser) return token

        token.role = existingUser.role
        token.username = existingUser.username
        return token
      }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
  })

