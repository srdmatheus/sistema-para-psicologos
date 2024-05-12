'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';
import { Consultation } from '@prisma/client';

export const createConsultation = async (
  data: Omit<Consultation, 'id' | 'createdAt' | 'updatedAt'>
) => {
  await db.consultation.create({
    data
  });

  revalidatePath('clientes');
};
