import { getCustomer } from '@/actions/get-customer';

export default async function CustomerPage({
  params
}: {
  params: { id: string };
}) {
  const customer = await getCustomer(params.id);
  return <div>{customer.name}</div>;
}
