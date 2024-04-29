'use client';

import { useState } from 'react';

import { Button, Icon } from '@/components';
import { CustomerModel } from '@/model/customer';

type CustomerDataProps = {
  customer: CustomerModel;
};

export const CustomerData = ({ customer }: CustomerDataProps) => {
  const { name, email, phone, status, birthDate, insurance, observations } =
    customer;

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const [sessionObservations, setSessionObservations] = useState(false);

  const handleToggleObservations = () =>
    setSessionObservations((prevState) => !prevState);

  return (
    <div>
      <h3 className="mt-4 text-lg font-bold text-primary">Informações</h3>

      <div className="group flex items-center gap-1">
        <Icon.contact className="size-4" />
        <p className="font-bold">
          Nome: <span className="font-medium">{name}</span>
        </p>
        <button
          onClick={() => handleCopyToClipboard(name)}
          className="invisible p-2 group-hover:visible group-hover:transition-all"
        >
          <Icon.copy className="size-4" />
          <span className="sr-only">Copiar</span>
        </button>
      </div>

      <div className="group flex items-center gap-1">
        <Icon.atSign className="size-4" />
        <p className="font-bold">
          E-mail:{' '}
          <span className="font-medium">{email ? email : 'não informado'}</span>
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
          <span className="font-medium">{phone ? phone : 'não informado'}</span>
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
            {birthDate ? birthDate + ' (24 anos)' : 'não informado'}
          </span>
        </p>
        {birthDate && (
          <button
            onClick={() => handleCopyToClipboard(birthDate)}
            className="invisible p-2 group-hover:visible group-hover:transition-all"
          >
            <Icon.copy className="size-4" />
            <span className="sr-only">Copiar</span>
          </button>
        )}
      </div>

      <hr className="my-4" />

      <div className="group mb-2 flex items-center gap-1">
        <p className="font-bold">
          Status:{' '}
          <span className="font-medium">
            {status === 'active' ? 'Ativo' : 'Inativo'}
          </span>
        </p>
      </div>

      <div className="group mb-2 flex items-center gap-1">
        <p className="font-bold">
          Convênio:{' '}
          <span className="font-medium">
            {insurance === 'yes' ? 'Sim' : 'Não'}
          </span>
        </p>
      </div>
      <div className="group flex items-center gap-1">
        <p className="font-bold">
          Sessões concluídas: <span className="font-medium">17</span>
        </p>
      </div>

      <hr className="my-4" />
      <div>
        <h3 className="mt-4 text-lg font-bold text-primary">
          Questionários aplicados
        </h3>
        <p>Padrões de pensamentos</p>
      </div>
      <hr className="my-4" />

      <div className="flex flex-col gap-3">
        <h3 className="mt-4 text-lg font-bold text-primary">Observações</h3>
        <div className="flex gap-2">
          <Button
            onClick={handleToggleObservations}
            variant={sessionObservations ? 'outline' : 'default'}
            className="w-32"
          >
            Gerais
          </Button>
          <Button
            onClick={handleToggleObservations}
            variant={sessionObservations ? 'default' : 'outline'}
            className="w-32"
          >
            Por sessão
          </Button>
        </div>
        {sessionObservations ? (
          <>
            <p className="font-extrabold">1ª sessão</p>
            <p className="font-extrabold">2ª sessão</p>
            <p>3ª sessão</p>
            <p className="font-extrabold">4ª sessão</p>
          </>
        ) : (
          <textarea
            className="h-20 w-full rounded-lg border p-2"
            value={observations}
          />
        )}
      </div>
    </div>
  );
};
