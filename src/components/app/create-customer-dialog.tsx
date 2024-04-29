'use client';

import { ReactNode, useState } from 'react';

import { createCustomer } from '@/actions/create-customer';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon, Input } from '../ui';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  email: z.string().optional(),
  insurance: z.string().optional(),
  status: z.string(),
  next_session: z.string().optional(),
  next_session_price: z.string().optional(),
  observations: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

type CreateCustomerDialogProps = {
  buttonTitle?: ReactNode;
};

export const CreateCustomerDialog = ({
  buttonTitle
}: CreateCustomerDialogProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      status: 'active'
    },
    resolver: zodResolver(formSchema)
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    await createCustomer(data);
    console.log(data);
    reset(
      (formValues) => ({
        ...formValues
      }),
      { keepErrors: false }
    );
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
          {buttonTitle ? (
            buttonTitle
          ) : (
            <>
              Adicionar novo cliente <Icon.userPlus className="size-4" />
            </>
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content className="flex max-w-[44rem] flex-col gap-4">
        <h1 className="text-xl font-bold tracking-tight">
          Adicionar novo cliente
        </h1>
        <form
          className="flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-2 gap-4">
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
            <Input.Root setError={!!errors.birthDate?.message}>
              <Input.Label htmlFor="birthDate" className="px-1">
                Data de nascimento
              </Input.Label>

              <Input.Text
                {...register('birthDate')}
                id="birthDate"
                type="date"
                startContent={<Icon.calendar className="size-4" />}
              />
            </Input.Root>
            <Input.Root setError={!!errors.email?.message}>
              <Input.Label htmlFor="email" className="px-1">
                E-mail
              </Input.Label>
              {errors.email?.message}
              <Input.Text
                {...register('email')}
                id="email"
                startContent={<Icon.atSign className="size-4" />}
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input.Root>
              <Input.Label className="block px-1">Tem convênio</Input.Label>
              <Controller
                control={control}
                name="insurance"
                render={({ field }) => (
                  <Input.RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-2"
                  >
                    <Input.RadioItem value="yes">Sim</Input.RadioItem>
                    <Input.RadioItem value="no">Não</Input.RadioItem>
                  </Input.RadioGroup>
                )}
              />
            </Input.Root>

            <Input.Root>
              <Input.Label className="block px-1">Status</Input.Label>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Input.RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-2"
                  >
                    <Input.RadioItem value="active">Ativo</Input.RadioItem>
                    <Input.RadioItem value="inactive">Inativo</Input.RadioItem>
                  </Input.RadioGroup>
                )}
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input.Root setError={!!errors.next_session?.message}>
              <Input.Label htmlFor="next_session" className="px-1">
                Agendar próxima sessão
              </Input.Label>

              <Input.Text
                {...register('next_session')}
                id="next_session"
                type="date"
                startContent={<Icon.calendar className="size-4" />}
              />
            </Input.Root>
            <Input.Root setError={!!errors.next_session_price?.message}>
              <div className="flex items-center justify-between px-1">
                <Input.Label htmlFor="next_session_price">
                  Valor da próxima sessão
                </Input.Label>
                <Input.ErrorMessage>
                  {errors.next_session_price?.message}
                </Input.ErrorMessage>
              </div>
              <Input.Text
                {...register('next_session_price')}
                id="next_session_price"
                type="number"
                startContent={<Icon.dollar className="size-4" />}
              />
            </Input.Root>
          </div>

          <Input.Root>
            <Input.Label htmlFor="observations">Observações</Input.Label>
            <textarea
              {...register('observations')}
              className="h-20 w-full resize-none rounded-xl border p-2 text-sm outline-none"
              id="observations"
            />
          </Input.Root>

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
