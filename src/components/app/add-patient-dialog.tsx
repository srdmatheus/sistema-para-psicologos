'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon } from '../ui';
import { Input } from '../ui/input';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  email: z.string().email().optional(),
  insurance: z.boolean().optional(),
  status: z.boolean(),
  next_session: z.date().optional(),
  next_session_price: z.number().optional()
});

type FormData = z.infer<typeof formSchema>;

export const AddPatientDialog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setOpen(false);
  };

  const handleCancel = () => {
    reset(
      (formValues) => ({
        ...formValues
      }),
      { keepErrors: false }
    );
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>
          Adicionar novo
          <Icon.userPlus className="size-5" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content className="flex max-w-[44rem] flex-col gap-4">
        <h1 className="text-lg font-bold tracking-tight">
          Adicionar novo cliente
        </h1>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-2 gap-2">
            <Input.Root setError={!!errors.name?.message}>
              <div className="flex items-center justify-between px-1">
                <Input.Label htmlFor="name">Nome completo</Input.Label>
                <Input.ErrorMessage>{errors.name?.message}</Input.ErrorMessage>
              </div>
              <Input.Text
                {...register('name')}
                id="name"
                startContent={<Icon.userPlus className="size-4" />}
              />
            </Input.Root>

            <Input.Root setError={!!errors.phone?.message}>
              <Input.Label htmlFor="phone" className="px-1">
                Telefone
              </Input.Label>

              <Input.Text
                {...register('phone')}
                id="phone"
                startContent={<Icon.phone className="size-4" />}
              />
            </Input.Root>
            <Input.Root setError={!!errors.name?.message}>
              <Input.Label htmlFor="name" className="px-1">
                Data de nascimento
              </Input.Label>

              <Input.Text
                {...register('birthDate')}
                id="birthDate"
                type="date"
                startContent={<Icon.calendar className="size-4" />}
              />
            </Input.Root>
            <Input.Root setError={!!errors.phone?.message}>
              <Input.Label htmlFor="email" className="px-1">
                E-mail
              </Input.Label>

              <Input.Text
                {...register('email')}
                id="email"
                startContent={<Icon.atSign className="size-4" />}
              />
            </Input.Root>
          </div>
          <hr />
          <div className="flex w-full items-center gap-2">
            <p>Possui convênio</p>
            <input
              type="radio"
              id="sim"
              value="sim"
              name="convenio"
              className="peer hidden"
            />
            <label
              htmlFor="sim"
              className="rounded-lg border-2 px-3 py-1.5 text-sm peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:font-bold peer-checked:text-primary"
            >
              Sim
            </label>
            <input
              type="radio"
              id="nao"
              value="nao"
              name="convenio"
              className="poor hidden"
            />
            <label
              htmlFor="nao"
              className="poor-checked:border-primary poor-checked:bg-primary/10 poor-checked:font-bold poor-checked:text-primary rounded-lg border-2 px-3 py-1.5 text-sm"
            >
              Não
            </label>
          </div>

          <div className="flex w-full items-center gap-2">
            <p>Status</p>
            <input
              type="radio"
              id="ativo"
              value="ativo"
              checked
              name="status"
              className="peer hidden"
            />
            <label
              htmlFor="ativo"
              className="rounded-lg border-2 px-3 py-1.5 text-sm peer-checked:border-success peer-checked:bg-success/10 peer-checked:font-bold peer-checked:text-success"
            >
              Ativo
            </label>
            <input
              type="radio"
              id="Inativo"
              value="Inativo"
              name="status"
              className="poor hidden"
            />
            <label
              htmlFor="Inativo"
              className="poor-checked:border-primary poor-checked:bg-primary/10 poor-checked:font-bold poor-checked:text-primary rounded-lg border-2 px-3 py-1.5 text-sm"
            >
              Inativo
            </label>
          </div>

          <p>Agendar próxima sessão</p>
          <div className="flex gap-2">
            <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
              <Icon.userPlus className="size-4" />
              <input
                type="date"
                className="w-full text-sm outline-none placeholder:text-foreground"
                placeholder="Data de nascimento"
              />
            </div>

            <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
              <Icon.userPlus className="size-4" />
              <input
                type="number"
                className="w-full text-sm outline-none placeholder:text-foreground"
                placeholder="Valor da sessão"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
            <textarea
              className="h-20 w-full resize-none text-sm outline-none placeholder:text-foreground"
              placeholder="Observações"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>

            <Button type="submit">Adicionar</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
