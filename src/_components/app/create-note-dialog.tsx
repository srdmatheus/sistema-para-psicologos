'use client';

import { ReactNode, useState } from 'react';

import { createNote } from '@/_actions/create-note';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Dialog, Icon, Input } from '../ui';

const formSchema = z.object({
  note: z.string()
});

type FormData = z.infer<typeof formSchema>;

type CreateNoteProps = {
  buttonTitle?: ReactNode;
  customerId: string;
};

export const CreateNoteDialog = ({
  buttonTitle,
  customerId
}: CreateNoteProps) => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log(data);

    await createNote({ customerId, note: data.note });

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
              <Icon.plus className="size-4" />
              Nova anotação
            </>
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content className="flex max-w-[48rem] flex-col gap-2">
        <h1 className="text-xl font-bold tracking-tight">Nova anotação</h1>
        <form
          className="mt-8 flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input.Root>
            <Input.Label htmlFor="observations">Anotação</Input.Label>
            <textarea
              {...register('note')}
              className="h-80 w-full resize-none rounded-xl border p-2 text-sm outline-none"
              id="observations"
            />
          </Input.Root>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>

            <Button type="submit">Criar</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
