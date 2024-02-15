"use server"

import { signOut } from "@/auth"
import { DEFAULT_LOGOUT_REDIRECT } from "@/routes";

export const logout = async() => {
  await signOut();
  return Response.redirect(new URL(DEFAULT_LOGOUT_REDIRECT))
}