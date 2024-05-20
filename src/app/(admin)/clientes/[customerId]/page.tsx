import { Suspense } from 'react';
import { notFound, redirect } from 'next/navigation';

import { getCustomer } from '@/_actions/get-customer';
import { getNotes } from '@/_actions/get-notes';
import { CreateConsultationDialog } from '@/_components/app/create-consultation-dialog';
import { CreateNoteDialog } from '@/_components/app/create-note-dialog';
import { UpdateCustomerDialog } from '@/_components/app/update-customer-dialog';
import { Skeleton } from '@/_components/ui/skeleton';
import { auth } from '@/auth';

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
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  const customer = await getCustomer(customerId);
  const notes = await getNotes(customerId);

  if (!customer) {
    return notFound();
  }

  if (customer.userId !== session.user.id) {
    return (
      <section className="grid h-full w-full p-8 pb-4">
        <div className="h-full rounded-xl bg-background-foreground p-4">
          <div className="flex flex-col">
            <BackButton />
            <h3 className="mt-10">Você não tem acesso a este usuário.</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid h-full w-full grid-cols-1 xl:grid-cols-10 xl:divide-x">
      <div className="col-span-6 p-8 pb-4 xl:pb-8">
        <div className="h-full rounded-xl bg-background-foreground p-4">
          <div className="flex items-center justify-between">
            <BackButton />
            <div className="flex gap-2">
              <CreateConsultationDialog customerId={customerId} />
              <CreateNoteDialog customerId={customerId} />
              <UpdateCustomerDialog customerId={customerId} />
            </div>
          </div>
          <div className="mt-8">
            <CustomerDetails customer={customer} />
          </div>

          <hr className="my-4" />

          <div>
            <h3 className="mt-4 text-lg font-bold text-primary">
              Questionários aplicados
            </h3>
            {/* TODO: criar componente de questionário */}
            <p>Padrões de pensamentos</p>
          </div>

          <hr className="my-4" />
          <div>
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

      <div className="col-span-4 p-8 pt-4 xl:pt-8">
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
