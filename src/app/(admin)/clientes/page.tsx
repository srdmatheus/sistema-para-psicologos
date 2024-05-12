import { Suspense } from 'react';

import { getCustomers } from '@/_actions/get-customers';
import { CreateCustomerDialog, CustomerList } from '@/_components';

import { Search } from './_components/search';

export default async function CustomerPage() {
  const customers = await getCustomers();
  return (
    <>
      <section className="w-full p-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Clientes</h1>
        <div className="mt-8 flex gap-4">
          <Search />
          <CreateCustomerDialog />
        </div>
        <div className="mt-10 w-full rounded-xl bg-background-foreground p-4">
          <Suspense fallback="carregando">
            <CustomerList customers={customers} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
