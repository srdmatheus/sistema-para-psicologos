import { getCustomers } from '@/actions/get-customers';

import { CreateCustomerDialog } from '@/components/app/';
import { CustomerList } from '@/components/app/customer-list';
import { Icon } from '@/components/ui';

export default async function PatientsPage() {
  const customers = await getCustomers();
  return (
    <section className="p-8">
      <h1 className="text-3xl font-extrabold tracking-tight">Pacientes</h1>
      <div className="mt-8 flex gap-4">
        <div className="flex w-96 items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
          <Icon.search className="size-4" />
          <input
            type="text"
            className="w-full outline-none placeholder:text-foreground"
            placeholder="Pesquisar..."
            title="Pesquisar paciente"
          />
        </div>
        <CreateCustomerDialog />
      </div>
      <div>
        <CustomerList customers={customers} />
      </div>
    </section>
  );
}
