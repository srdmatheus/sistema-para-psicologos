'use server';

import { db } from '@/_lib/prisma';

import { auth } from '../auth';

export const getConsultations = async (customerId: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Usuário não autenticado');
  }

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
