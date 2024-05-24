'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';
import { auth } from '@/auth';
import { Prisma } from '@prisma/client';

export const createConsultation = async (
  data: Prisma.ConsultationUncheckedCreateInput
) => {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error('Usuário não autenticado');
  }

  const consultationData: Prisma.ConsultationUncheckedCreateInput = {
    ...data,
    customerId: data.customerId
  };
  await db.consultation.create({
    data: {
      ...consultationData
    }
  });

  revalidatePath('clientes');
};
