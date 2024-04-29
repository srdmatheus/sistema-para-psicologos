import { CustomerSessionsModel } from '@/model/customer';

import { Button, Icon } from '../ui';

type CustomerSessionsProps = {
  data: CustomerSessionsModel[];
};

const tableStatus = {
  pending: (
    <div className="flex items-center justify-start gap-2 text-xs font-semibold text-orange-500">
      <Icon.clock className="size-3.5" />
      <span>Agendado</span>
    </div>
  ),
  success: (
    <div className="flex items-center justify-start gap-2 text-xs font-semibold text-success">
      <Icon.circleCheck className="size-3.5" />
      <span>Concluído</span>
    </div>
  ),
  canceled: (
    <div className="flex items-center justify-start gap-2 text-xs font-semibold text-destructive">
      <Icon.circleX className="size-3.5" />
      <span>Cancelado</span>
    </div>
  )
};

export const CustomerSessionsTable = ({ data }: CustomerSessionsProps) => {
  return data.length ? (
    <table className="w-full">
      <thead>
        <tr className="border-b text-center text-base font-bold">
          <th className="text-center">Situação</th>
          <th className="text-center">Data</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, date, status }) => (
          <tr key={id} className="even:bg-background">
            <td className="my-1.5 flex items-center justify-center">
              {tableStatus[status]}
            </td>
            <td>
              <div className="flex items-center justify-center gap-1.5 text-sm">
                <Icon.calendar className="size-3.5" />
                <span>{date}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="flex flex-col gap-2 text-center">
      <p>Não há sessões cadastradas</p>
      <Button>Cadastrar</Button>
    </div>
  );
};
