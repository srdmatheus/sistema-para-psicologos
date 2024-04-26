import Link from 'next/link';

import { CustomerModel } from '@/model/customer';

export const CustomerList = ({ customers }: { customers: CustomerModel[] }) => {
  return (
    <div className="flex flex-col gap-1">
      {customers.map((customer) => (
        <Link
          href={`/pacientes/${customer.id}`}
          key={customer.id}
          className="hover:text-primary hover:underline"
        >
          {customer.name}
        </Link>
      ))}
    </div>
  );
};
