'use client';

import { ReactNode, useState } from 'react';

import { createConsultation } from '@/_actions/create-consultation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma } from '@prisma/client';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon, Input, Tooltip } from '../ui';
import { Calendar } from '../ui/calendar';

const formSchema = z.object({
  startTime: z.string(),
  status: z.enum(['SCHEDULED', 'CONCLUDED', 'CANCELED']),
  startHour: z.string()
});

type FormData = z.infer<typeof formSchema>;

type CreateConsultationProps = {
  customerId: string;
  trigger?: ReactNode;
};

type HourType = {
  id: string;
  hour: string;
  available: boolean;
};

const hoursAvailable: HourType[] = [
  { id: '1', hour: '09h00', available: false },
  { id: '2', hour: '10h00', available: false },
  { id: '3', hour: '11h00', available: true },
  { id: '4', hour: '12h00', available: true },
  { id: '6', hour: '13h00', available: false },
  { id: '7', hour: '14h00', available: true },
  { id: '8', hour: '15h00', available: true },
  { id: '9', hour: '16h00', available: false },
  { id: '10', hour: '17h00', available: true },
  { id: '11', hour: '18h00', available: true },
  { id: '12', hour: '19h00', available: false },
  { id: '13', hour: '20h00', available: false },
  { id: '14', hour: '21h00', available: false },
  { id: '15', hour: '22h00', available: false }
];

export const CreateConsultationDialog = ({
  customerId,
  trigger
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
    const consultation: Prisma.ConsultationUncheckedCreateInput = {
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
      <Dialog.Trigger>
        {trigger ? (
          trigger
        ) : (
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button size="icon" asChild>
                <div>
                  <Icon.circleFadingPlus className="size-4" />
                  <span className="sr-only">Nova consulta</span>
                </div>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Nova consulta</p>
            </Tooltip.Content>
          </Tooltip.Root>
        )}
      </Dialog.Trigger>

      <Dialog.Content className="flex max-w-[36rem] flex-col gap-4">
        <h1 className="text-xl font-bold tracking-tight">Nova consulta</h1>
        <form
          className="mt-4 flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-start justify-between gap-4 bg-background-foreground">
            <div className="flex flex-col">
              <span className="text-center text-sm font-semibold">Data</span>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </div>
            <div className="flex w-full flex-col overflow-y-auto pr-4">
              <span className="text-center text-sm font-semibold">Horário</span>
              <div className="mt-3.5 flex h-72 flex-col items-center gap-1 overflow-y-auto px-2">
                {hoursAvailable.map((item) => (
                  <Button
                    disabled={!item.available}
                    key={item.id}
                    size="sm"
                    className="w-content xs:w-[100px] md:w-[180px]"
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
                  <Input.RadioItem
                    value="SCHEDULED"
                    className="w-full data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500/10 data-[state=checked]:text-orange-500"
                  >
                    Agendado
                  </Input.RadioItem>
                  <Input.RadioItem
                    value="CONCLUDED"
                    className="w-full data-[state=checked]:border-success data-[state=checked]:bg-success/10 data-[state=checked]:text-success"
                  >
                    Concluído
                  </Input.RadioItem>
                  <Input.RadioItem
                    value="CANCELED"
                    className="w-full data-[state=checked]:border-destructive data-[state=checked]:bg-destructive/10 data-[state=checked]:text-destructive"
                  >
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

            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
