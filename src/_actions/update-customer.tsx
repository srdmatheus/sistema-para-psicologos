'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';
import { Prisma } from '@prisma/client';

export const updateCustomer = async ({
  customerId,
  customerUpdated
}: {
  customerId: string;
  customerUpdated: Prisma.CustomerUpdateInput;
}) => {
  await db.customer.update({
    where: {
      id: customerId
    },
    data: {
      ...customerUpdated
    }
  });

  revalidatePath('clientes');
};
