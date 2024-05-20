'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';
import { Prisma } from '@prisma/client';

export const createConsultation = async (
  data: Prisma.ConsultationCreateInput
) => {
  await db.consultation.create({
    data
  });

  revalidatePath('clientes');
};
