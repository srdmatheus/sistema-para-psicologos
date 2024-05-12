'use client';

import { Icon } from '@/_components';
import { Consultation, Customer } from '@prisma/client';
import { differenceInYears, format } from 'date-fns';

type CustomerDetailsProps = {
  customer: Customer;
  consultations: Consultation[];
};

export const CustomerDetails = ({
  customer,
  consultations
}: CustomerDetailsProps) => {
  const { email, phone, status, birthDate, insurance } = customer;

  const totalConsultations = consultations.filter(
    (consultation) => consultation.status === 'CONCLUDED'
  ).length;

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
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
        </div>
        <div>
          <div className="group mb-2 flex items-center gap-1">
            <p className="font-bold">
              Status:{' '}
              <span className="font-medium">
                {status === 'ACTIVE' ? 'Ativo' : 'Inativo'}
              </span>
            </p>
          </div>

          <div className="group mb-2 flex items-center gap-1">
            <p className="font-bold">
              Convênio:{' '}
              <span className="font-medium">{insurance ? 'Sim' : 'Não'}</span>
            </p>
          </div>
          <div className="group flex items-center gap-1">
            <p className="font-bold">
              Sessões concluídas:{' '}
              <span className="font-medium">{totalConsultations}</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" />

      <div>
        <h3 className="mt-4 text-lg font-bold text-primary">
          Questionários aplicados
        </h3>
        <p>Padrões de pensamentos</p>
      </div>
    </div>
  );
};
