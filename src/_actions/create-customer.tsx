'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';
import { Prisma } from '@prisma/client';

import { auth } from '../auth';

type CreateCustomerInput = Omit<Prisma.CustomerUncheckedCreateInput, 'userId'>;

export const createCustomer = async (data: CreateCustomerInput) => {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error('Usuário não autenticado');
  }

  const customerData: Prisma.CustomerUncheckedCreateInput = {
    ...data,
    userId: session.user.id
  };

  revalidatePath('clientes');

  return await db.customer.create({
    data: customerData
  });
};
