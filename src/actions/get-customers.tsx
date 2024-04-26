'use server';

export const getCustomers = async () => {
  try {
    const response = await fetch('http://localhost:3001/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: {
        tags: ['customers']
      }
    });

    const dataFetch = await response.json();

    return dataFetch;
  } catch (error: unknown) {
    return console.log(error);
  }
};
