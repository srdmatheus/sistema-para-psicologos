'use server';

import { revalidateTag } from 'next/cache';

import { CustomerModel } from '@/model/customer';

export const createCustomer = async (data: Omit<CustomerModel, 'id'>) => {
  console.log({ ...data });
  try {
    const response = await fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    });

    const dataFetch = await response.json();
    revalidateTag('customers');
    return dataFetch;
  } catch (error: unknown) {
    return console.log(error);
  }
};
