import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { getConsultations } from '@/_actions/get-consultations';
import { getCustomer } from '@/_actions/get-customer';
import { getNotes } from '@/_actions/get-notes';
import { CreateConsultationDialog } from '@/_components/app/create-consultation-dialog';
import { CreateNoteDialog } from '@/_components/app/create-note-dialog';
import { UpdateCustomerDialog } from '@/_components/app/update-customer-dialog';
import { Skeleton } from '@/_components/ui/skeleton';

import { BackButton } from './_components/back-button';
import { CustomerDetails } from './_components/customer-details';
import { CustomerNoteList } from './_components/customer-note-list';
import { CustomerSessionsTable } from './_components/customer-sessions-table';

type CustomerPageProps = {
  params: { customerId: string };
};

export default async function CustomerPage({
  params: { customerId }
}: CustomerPageProps) {
  const customer = await getCustomer(customerId);
  const consultations = await getConsultations(customerId);
  const notes = await getNotes(customerId);

  if (!customer) {
    return notFound();
  }
  return (
    <section className="grid w-full grid-cols-10 divide-x">
      <div className="col-span-6 p-8">
        <div className="h-full rounded-xl bg-background-foreground p-4">
          <div className="flex items-center justify-between">
            <BackButton />
            <div className="flex gap-2">
              <CreateConsultationDialog customerId={customerId} />
              <CreateNoteDialog customerId={customerId} />
              <UpdateCustomerDialog customerId={customerId} />
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight">
              {customer.name}
            </h2>
          </div>

          <CustomerDetails customer={customer} consultations={consultations} />

          <div>
            <hr className="my-4" />
            <h3 className="mb-4 mt-4 text-lg font-bold text-primary">
              Anotações
            </h3>
            {notes.length ? (
              <CustomerNoteList notes={notes} />
            ) : (
              <p>Nenhuma anotação criada</p>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-4 p-8">
        <div className="h-full rounded-xl bg-background-foreground p-8">
          <h2 className="pb-4 text-xl font-extrabold tracking-tight">
            Sessões
          </h2>
          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <CustomerSessionsTable customerId={customerId} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
