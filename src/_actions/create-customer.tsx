'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';
import { Prisma } from '@prisma/client';

export const createCustomer = async (data: Prisma.CustomerCreateInput) => {
  await db.customer.create({
    data
  });

  revalidatePath('clientes');
};
