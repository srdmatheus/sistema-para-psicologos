import { Suspense } from 'react';

import { CustomerList } from '@/_components';

import { CustomerListSkeleton } from './_components/customer-list-skeleton';

export default function CustomerPage() {
  return (
    <section className="w-full p-2 xs:p-4 md:p-8">
      <h1 className="text-3xl font-extrabold tracking-tight">Clientes</h1>
      <div className="mt-10 w-full rounded-xl bg-background-foreground p-2 xs:p-4">
        <Suspense fallback={<CustomerListSkeleton />}>
          <CustomerList />
        </Suspense>
      </div>
    </section>
  );
}
