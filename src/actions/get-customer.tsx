'use server';

import { CustomerModel } from '@/model/customer';

export const getCustomer = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/customers/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const dataFetch: CustomerModel = await response.json();

    return dataFetch;
  } catch (error: unknown) {
    return console.log(error);
  }
};
