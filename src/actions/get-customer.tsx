'use server';

export const getCustomer = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/customers/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const dataFetch = await response.json();

    return dataFetch;
  } catch (error: unknown) {
    return console.log(error);
  }
};
