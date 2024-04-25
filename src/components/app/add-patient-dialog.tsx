'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon } from '../ui';
import { Input } from '../ui/input';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' })
});

type FormData = z.infer<typeof formSchema>;

export const AddPatientDialog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input.Root>
            <p className="text-sm">Nome Completo</p>
            <Input.Text {...register('name')} />
          </Input.Root>
          <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
            <Icon.userPlus className="size-4" />
            <input
              type="text"
              className="w-full text-sm outline-none placeholder:text-foreground"
              placeholder="Telefone"
            />
          </div>
          <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
            <Icon.userPlus className="size-4" />
            <input
              type="date"
              className="w-full text-sm outline-none placeholder:text-foreground"
              placeholder="Data de nascimento"
            />
          </div>
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
              className="rounded-lg border-2 px-3 py-1.5 text-sm peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:font-bold peer-checked:text-primary"
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
          <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
            <Icon.userPlus className="size-4" />
            <input
              type="date"
              className="w-full text-sm outline-none placeholder:text-foreground"
              placeholder="Data de nascimento"
            />
          </div>

          <p>Valor da sessão</p>
          <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
            <Icon.userPlus className="size-4" />
            <input
              type="number"
              className="w-full text-sm outline-none placeholder:text-foreground"
              placeholder="Valor da sessão"
            />
          </div>
          <div className="flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
            <textarea
              className="h-20 w-full resize-none text-sm outline-none placeholder:text-foreground"
              placeholder="Observações"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Dialog.Close asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </Dialog.Close>
            <Button type="submit">Adicionar</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
