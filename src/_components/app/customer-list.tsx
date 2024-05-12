import Link from 'next/link';

import { Customer } from '@prisma/client';

type CustomerListProps = {
  customers: Customer[];
};
export const CustomerList = ({ customers }: CustomerListProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {customers.map((customer) => (
        <Link
          href={`/clientes/${customer.id}`}
          key={customer.id}
          className="hover:text-primary hover:underline"
        >
          {customer.name}
        </Link>
      ))}
    </div>
  );
};
