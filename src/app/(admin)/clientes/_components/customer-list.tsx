import { getCustomers } from '@/_actions/get-customers';

import { columns } from './customer-list-columns';
import { DataTable } from './customer-list-data';

export const CustomerList = async () => {
  const customer = await getCustomers();
  return (
    <div className="container mx-auto p-2">
      <DataTable columns={columns} data={customer} />
    </div>
  );
};
