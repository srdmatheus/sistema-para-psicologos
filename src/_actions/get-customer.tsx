'use server';

import { db } from '@/_lib/prisma';

export const getCustomer = async (id: string) => {
  const customer = await db.customer.findUnique({
    where: {
      id
    },
    include: {
      consultations: true
    }
  });

  if (!customer) return undefined;

  return customer;
};
