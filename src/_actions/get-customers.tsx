'use server';

import { db } from '@/_lib/prisma';

export const getCustomers = async () => {
  const customers = await db.customer.findMany();
  return customers;
};
