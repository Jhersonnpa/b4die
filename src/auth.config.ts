import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"
import bcrypt from 'bcryptjs'
import apple from "next-auth/providers/apple"
import google from "next-auth/providers/google"
import instagram from "next-auth/providers/instagram"
import twitter from "next-auth/providers/twitter"

export default {
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    apple({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET || ""
    }),
    instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    }),
    twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    // Credentials({
    //   async authorize(credentials) {
    //     const validatedFields = LoginSchema.safeParse(credentials)

    //     if (validatedFields.success) {
    //       const { email, password } = validatedFields.data

    //       const user = await getUserByEmail(email)
    //       if (!user || !user.password) return null

    //       const passwordsMatch = await bcrypt.compare(
    //         password, user.password
    //       )

    //       if (passwordsMatch) return user
    //     }
    //     return null
    //   }
    // })
  ],
} satisfies NextAuthConfig