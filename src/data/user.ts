import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } })
    return user
  } catch (error) {
    return { error: error }
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } })
    return user
  } catch (error) {
    return { error: error }
  }
}

export const getAccountsByUserId = async (userId: string) => {
  try {
    const arrayElements = await db.account.findMany({
      where: { userId: userId } // Ajusta las columnas según tus necesidades
    });

    return arrayElements;
  } catch (error) {
    return { error: error };
  }
};