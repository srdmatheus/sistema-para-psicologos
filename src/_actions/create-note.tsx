'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/_lib/prisma';

type CreateNoteProps = {
  customerId: string;
  note: string;
};

export const createNote = async ({ customerId, note }: CreateNoteProps) => {
  const response = await db.note.create({
    data: {
      note,
      customerId
    }
  });
  revalidatePath('/clientes');
  return response;
};
