'use server';

import { db } from '@/_lib/prisma';

export const getConsultations = async (customerId: string) => {
  const consultations = await db.consultation.findMany({
    where: {
      customerId
    },
    orderBy: {
      startTime: 'asc'
    }
  });

  return consultations;
};
