'use client';

import { Icon } from '@/_components';
import { Customer } from '@prisma/client';
import { differenceInYears, format } from 'date-fns';

type CustomerContactDetailsProps = {
  customer: Customer;
};

export const CustomerContactDetails = ({
  customer
}: CustomerContactDetailsProps) => {
  const { email, phone, birthDate, insurance, description } = customer;

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex items-start justify-start">
      <div>
        <div className="group flex items-center gap-1">
          <Icon.atSign className="size-4" />
          <p className="font-bold">
            E-mail:{' '}
            <span className="font-medium">
              {email ? email : 'não informado'}
            </span>
          </p>
          {email && (
            <button
              onClick={() => handleCopyToClipboard(email)}
              className="invisible p-2 group-hover:visible group-hover:transition-all"
            >
              <Icon.copy className="size-4" />
              <span className="sr-only">Copiar</span>
            </button>
          )}
        </div>

        <div className="group flex items-center gap-1">
          <Icon.phone className="size-4" />
          <p className="font-bold">
            Telefone:{' '}
            <span className="font-medium">
              {phone ? phone : 'não informado'}
            </span>
          </p>
          {phone && (
            <button
              onClick={() => handleCopyToClipboard(phone)}
              className="invisible p-2 group-hover:visible group-hover:transition-all"
            >
              <Icon.copy className="size-4" />
              <span className="sr-only">Copiar</span>
            </button>
          )}
        </div>

        <div className="group flex items-center gap-1">
          <Icon.calendar className="size-4" />
          <p className="font-bold">
            Data de nascimento:{' '}
            <span className="font-medium">
              {birthDate
                ? format(birthDate, 'dd/MM/yyyy') +
                  ` (${differenceInYears(new Date(), birthDate)} anos)`
                : 'não informado'}
            </span>
          </p>
          {birthDate && (
            <button
              onClick={() => handleCopyToClipboard(String(birthDate))}
              className="invisible p-2 group-hover:visible group-hover:transition-all"
            >
              <Icon.copy className="size-4" />
              <span className="sr-only">Copiar</span>
            </button>
          )}
        </div>
        <div className="my-1 flex items-center gap-1">
          <Icon.handshake className="size-4" />

          <p className="font-bold">
            Possui convênio:{' '}
            <span className="font-medium">{insurance ? 'Sim' : 'Não'}</span>
          </p>
        </div>
        {description && (
          <div className="my-1 flex items-center gap-1">
            <Icon.notebookText className="size-4" />

            <p className="font-bold">
              Observação: <span className="font-medium">{description}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
