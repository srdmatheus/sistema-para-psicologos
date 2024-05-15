'use client';

import { useState } from 'react';

import { Tooltip } from '@/_components';
import { cn } from '@/_lib/utils';
import { Customer } from '@prisma/client';

import { CustomerContactDetails } from './customer-contact-details';

export const CustomerDetails = ({ customer }: { customer: Customer }) => {
  const [showCustomerContact, setShowCustomerContact] = useState(false);

  const handleToggleCustomerContact = () =>
    setShowCustomerContact((prev) => !prev);
  return (
    <div>
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-extrabold tracking-tight">
          {customer.name}
        </h2>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="p-1.5">
              <div
                className={cn(
                  'size-2.5 rounded-full',
                  customer.status === 'ACTIVE' ? 'bg-success' : 'bg-destructive'
                )}
              />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <p>
              {customer.status === 'ACTIVE'
                ? 'Cliente ativo'
                : 'Cliente inativo'}
            </p>
          </Tooltip.Content>
        </Tooltip.Root>
      </div>

      <button
        onClick={handleToggleCustomerContact}
        className="text-sm hover:text-primary hover:underline"
      >
        {showCustomerContact ? 'Ocultar' : 'Exibir informações de contato'}
      </button>
      {showCustomerContact && <CustomerContactDetails customer={customer} />}
    </div>
  );
};
