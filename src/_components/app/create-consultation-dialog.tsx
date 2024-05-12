'use client';

import { ReactNode, useState } from 'react';

import { createConsultation } from '@/_actions/create-consultation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Consultation } from '@prisma/client';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon, Input } from '../ui';
import { Calendar } from '../ui/calendar';

const formSchema = z.object({
  startTime: z.string(),
  status: z.enum(['SCHEDULED', 'CONCLUDED', 'CANCELED']),
  startHour: z.string()
});

type FormData = z.infer<typeof formSchema>;

type CreateConsultationProps = {
  buttonTitle?: ReactNode;
  customerId: string;
};

type HourType = {
  id: string;
  hour: string;
};

const hoursAvailable: HourType[] = [
  { id: '1', hour: '09h00' },
  { id: '2', hour: '10h00' },
  { id: '3', hour: '11h00' },
  { id: '4', hour: '12h00' },
  { id: '6', hour: '13h00' },
  { id: '7', hour: '13h00' },
  { id: '8', hour: '13h00' },
  { id: '9', hour: '13h00' },
  { id: '10', hour: '13h00' },
  { id: '11', hour: '13h00' },
  { id: '12', hour: '13h00' }
];

export const CreateConsultationDialog = ({
  buttonTitle,
  customerId
}: CreateConsultationProps) => {
  const { handleSubmit, reset, control } = useForm<FormData>({
    defaultValues: {
      status: 'SCHEDULED'
    },
    resolver: zodResolver(formSchema)
  });
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<HourType>();
  const onSubmit = async (data: FormData) => {
    console.log(data);
    const consultation: Omit<Consultation, 'id' | 'createdAt' | 'updatedAt'> = {
      customerId,
      status: data.status,
      startTime: new Date(data.startTime)
    };

    await createConsultation(consultation);

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
              <Icon.dollar className="size-4" />
              Criar sessão
            </>
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content className="flex max-w-[30rem] flex-col gap-4">
        <h1 className="text-xl font-bold tracking-tight">Nova consulta</h1>
        <form
          className="mt-8 flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-start justify-between gap-2 bg-background-foreground">
            <div className="flex flex-col border-r">
              <span className="text-center text-sm font-semibold">Data</span>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </div>
            <div className="flex w-full flex-col overflow-y-auto pr-2">
              <span className="text-center text-sm font-semibold">Horário</span>
              <div className="mt-3.5 flex h-72 flex-col gap-1 overflow-y-auto px-2">
                {hoursAvailable.map((item) => (
                  <Button
                    key={item.id}
                    size="sm"
                    variant={item.id === hour?.id ? 'default' : 'outline'}
                    onClick={() => setHour(item)}
                  >
                    {item.hour}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Input.Root>
            <Input.Label className="text text-sm font-bold tracking-tighter">
              Situação
            </Input.Label>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <Input.RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-2"
                >
                  <Input.RadioItem value="SCHEDULED" className="w-full">
                    Agendado
                  </Input.RadioItem>
                  <Input.RadioItem value="CONCLUDED" className="w-full">
                    Concluído
                  </Input.RadioItem>
                  <Input.RadioItem value="CANCELED" className="w-full">
                    Cancelado
                  </Input.RadioItem>
                </Input.RadioGroup>
              )}
            />
          </Input.Root>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>

            <Button type="submit">Agendar</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
