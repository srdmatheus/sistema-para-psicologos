'use client';

import { ReactNode, useState } from 'react';

import { getCustomer } from '@/_actions/get-customer';
import { updateCustomer } from '@/_actions/update-customer';
import { formatDateForInput } from '@/_helpers/format-date-for-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma } from '@prisma/client';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon, Input } from '../ui';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  email: z.string().optional(),
  insurance: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  description: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

type UpdateCustomerDialogProps = {
  customTitle?: ReactNode;
  customerId: string;
};

export const UpdateCustomerDialog = ({
  customTitle,
  customerId
}: UpdateCustomerDialogProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: async () => {
      const user = await getCustomer(customerId);

      const data: FormData = {
        name: user?.name || '',
        phone: user?.phone || '',
        birthDate: user?.birthDate
          ? formatDateForInput(new Date(user.birthDate))
          : undefined,
        email: user?.email || undefined,
        insurance: (user?.insurance ? 'yes' : 'no') || undefined,
        status: user?.status || 'ACTIVE',
        description: user?.description || undefined
      };

      return data;
    },
    resolver: zodResolver(formSchema)
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    const customerUpdated: Prisma.CustomerCreateInput = {
      name: data.name,
      birthDate: data.birthDate ? new Date(data.birthDate) : null,
      status: data.status,
      phone: data.phone,
      email: data.email,
      insurance: data.insurance === 'yes' ? true : false
    };

    await updateCustomer({ customerId, customerUpdated });

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
          {customTitle ? (
            customTitle
          ) : (
            <>
              <Icon.pencil size={16} />
              Editar cliente
            </>
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content className="flex max-w-[44rem] flex-col gap-4">
        <h1 className="text-xl font-bold tracking-tight">Editar cliente</h1>
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
                    <Input.RadioItem value="ACTIVE">Ativo</Input.RadioItem>
                    <Input.RadioItem value="INACTIVE">Inativo</Input.RadioItem>
                  </Input.RadioGroup>
                )}
              />
            </Input.Root>
          </div>

          <Input.Root>
            <Input.Label htmlFor="description">Observações</Input.Label>
            <textarea
              {...register('description')}
              className="h-20 w-full resize-none rounded-xl border p-2 text-sm outline-none"
              id="description"
            />
          </Input.Root>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>

            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
