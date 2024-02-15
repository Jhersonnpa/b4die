import { db } from "@/lib/db";

export const getAccountsByProvider = async (userId: string, provider: string) => {
  try {
    const accounts = await db.account.findMany({
      where: {
        provider: provider,
        userId: userId
      }
    })

    if (accounts) return accounts
    return { error: "No se encontraron cuentas" }
  } catch (error) {
    return { error: error };
  }
}

export const deleteFirstAccountByUserId = async (userId: string) => {
  try {
    const firstAccount = await db.account.findFirst({
      where: { userId: userId }, // Ajusta el criterio de orden según tus necesidades
    });

    if (!firstAccount) {
      return { error: "No se encontraron cuentas para el usuario" };
    }

    await db.account.delete({ where: { id: firstAccount.id } });

    return { success: "Cuenta eliminada exitosamente" };
  } catch (error) {
    return { error: error };
  }
};

export const deleteAllButLastAccountByUserId = async (userId: string, provider: string) => {
  try {
    const accountsToDelete = await db.account.findMany({
      where: { userId: userId , provider: provider},
      orderBy: { createdAt: 'asc' }, // Ajusta el criterio de orden según tus necesidades
    });

    if (accountsToDelete.length <= 1) {
      return { error: "No hay suficientes cuentas para eliminar" };
    }

    const accountsIdsToDelete = accountsToDelete.slice(0, -1).map(account => account.id);

    await db.account.deleteMany({ where: { id: { in: accountsIdsToDelete } } });

    return { success: "Cuentas eliminadas exitosamente" };
  } catch (error) {
    return { error: error };
  }
};

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