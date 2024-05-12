'use server';

import { db } from '@/_lib/prisma';

export const getNotes = async (customerId: string) => {
  const notes = await db.note.findMany({
    where: {
      customerId
    }
  });

  return notes;
};
