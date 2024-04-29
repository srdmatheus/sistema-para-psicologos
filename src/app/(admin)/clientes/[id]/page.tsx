import * as React from 'react';

import { getCustomer } from '@/actions/get-customer';
import { CustomerData, CustomerSessionsTable } from '@/components';
import { CustomerSessionsModel } from '@/model/customer';

type CustomerPageProps = {
  params: { id: string };
};

const tableData: CustomerSessionsModel[] = [
  { id: 'aa54d', status: 'pending', date: '12/11/2024 ~ 16h00' },
  { id: 'ba54d', status: 'pending', date: '12/11/2024 ~ 16h00' },
  { id: 'a454d', status: 'success', date: '12/11/2024 ~ 16h00' },
  { id: '9a54d', status: 'canceled', date: '12/11/2024 ~ 16h00' },
  { id: 'aa88d', status: 'success', date: '12/11/2024 ~ 16h00' },
  { id: 'aa54f', status: 'success', date: '12/11/2024 ~ 16h00' }
];

export default async function CustomerPage({ params }: CustomerPageProps) {
  const customer = await getCustomer(params.id);

  return (
    <section className="grid w-full grid-cols-10 divide-x">
      {!!customer && (
        <div className="col-span-6 p-8">
          <div className="rounded-xl bg-background-foreground p-4">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Dados do cliente
            </h2>
            <CustomerData customer={customer} />
          </div>
        </div>
      )}

      <div className="col-span-4 p-8">
        <div className="rounded-xl bg-background-foreground p-8">
          <h2 className="pb-4 text-xl font-extrabold tracking-tight">
            Sessões
          </h2>
          <CustomerSessionsTable data={tableData} />
        </div>
      </div>
    </section>
  );
}
