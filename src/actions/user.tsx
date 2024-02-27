"use server"

import { getUserByUsername } from "@/data/user";


export const existUser = async (user:string) => {
  try {
    const userExist = await getUserByUsername(user)
    return userExist
  } catch (error) {
    return {error: error}
  };
};