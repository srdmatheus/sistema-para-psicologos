import { getConsultations } from '@/_actions/get-consultations';
import { CreateConsultationDialog } from '@/_components/app/create-consultation-dialog';
import { Icon } from '@/_components/ui/icon';
import { format } from 'date-fns';

type CustomerSessionsProps = {
  customerId: string;
};

const tableStatus = {
  SCHEDULED: (
    <div className="flex items-center justify-start gap-2 text-xs font-semibold text-orange-500">
      <Icon.clock className="size-3.5" />
      <span>Agendado</span>
    </div>
  ),
  CONCLUDED: (
    <div className="flex items-center justify-start gap-2 text-xs font-semibold text-success">
      <Icon.circleCheck className="size-3.5" />
      <span>Concluído</span>
    </div>
  ),
  CANCELED: (
    <div className="flex items-center justify-start gap-2 text-xs font-semibold text-destructive">
      <Icon.circleX className="size-3.5" />
      <span>Cancelado</span>
    </div>
  )
};

export const CustomerSessionsTable = async ({
  customerId
}: CustomerSessionsProps) => {
  const data = await getConsultations(customerId);
  return data.length ? (
    <div className="h-96 overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-center text-base font-bold">
            <th className="text-center">Situação</th>
            <th className="text-center">Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, startTime, status }) => (
            <tr key={id} className="even:bg-background">
              <td className="my-1.5 flex items-center justify-center">
                {tableStatus[status]}
              </td>
              <td>
                <div className="flex items-center justify-center gap-1.5 text-sm">
                  <Icon.calendar className="size-3.5" />
                  <span>{format(startTime, `dd/MM/yyyy - HH:MM`)}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="flex flex-col gap-2 text-center">
      <p>Não há sessões cadastradas</p>
      <CreateConsultationDialog
        customerId={customerId}
        buttonTitle="Cadastrar"
      />
    </div>
  );
};
