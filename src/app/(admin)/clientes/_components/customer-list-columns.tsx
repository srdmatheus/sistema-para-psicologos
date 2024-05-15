'use client';

import Link from 'next/link';

import { Customer } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { CreateConsultationDialog } from '../../../../_components/app/create-consultation-dialog';
import { CreateNoteDialog } from '../../../../_components/app/create-note-dialog';
import { UpdateCustomerDialog } from '../../../../_components/app/update-customer-dialog';
import { Button, Dropdown, Icon, Tooltip } from '../../../../_components/ui';

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ cell }) => {
      const name = cell.getValue() as string;
      const id = cell.getContext().row.original.id;
      return (
        <div>
          <Link
            href={`/clientes/${id}`}
            className="flex h-full w-full hover:text-primary hover:underline"
          >
            {name}
          </Link>
        </div>
      );
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          E-mail
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-right">Status</div>,
    cell: ({ cell }) => {
      return (
        <div className="text-right font-medium">
          {cell.getValue() === 'ACTIVE' ? 'Ativo' : 'Inativo'}
        </div>
      );
    }
  },
  {
    accessorKey: 'id',
    header: '',
    cell: ({ cell }) => {
      const id = cell.getValue() as string;
      return (
        <Dropdown.Root>
          <Dropdown.Trigger>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className="flex size-10 items-center justify-center rounded-xl border-0 bg-transparent p-0 hover:border">
                  <Icon.ellipsisVertical size={16} />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Opções</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item asChild>
              <CreateConsultationDialog
                customerId={id}
                trigger={
                  <Button
                    variant="ghost"
                    className="justify-start rounded-lg px-4"
                  >
                    <Icon.dollar size={16} />
                    Nova consulta
                  </Button>
                }
              />
            </Dropdown.Item>
            <Dropdown.Item asChild>
              <CreateNoteDialog
                customerId={id}
                trigger={
                  <Button
                    variant="ghost"
                    className="justify-start rounded-lg px-4"
                  >
                    <Icon.plus size={16} />
                    Nova anotação
                  </Button>
                }
              />
            </Dropdown.Item>
            <Dropdown.Item asChild>
              <UpdateCustomerDialog
                customerId={id}
                trigger={
                  <Button
                    variant="ghost"
                    className="justify-start rounded-lg px-4"
                  >
                    <Icon.pencil size={16} />
                    Editar cliente
                  </Button>
                }
              />
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      );
    }
  }
];
