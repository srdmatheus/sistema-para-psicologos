'use server';

import { db } from '@/_lib/prisma';

import { auth } from '../auth';

export const getCustomers = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Usuário não autenticado');
  }

  const customers = await db.customer.findMany({
    where: {
      userId: session.user.id
    }
  });
  return customers;
};
