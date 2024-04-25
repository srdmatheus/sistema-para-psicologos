import { AddPatientDialog } from '@/components/app/';
import { Icon } from '@/components/ui';

export default function PatientsPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-extrabold tracking-tight">Pacientes</h1>
      <div className="mt-8 flex gap-4">
        <div className="flex w-96 items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
          <Icon.search className="size-4" />
          <input
            type="text"
            className="w-full outline-none placeholder:text-foreground"
            placeholder="Pesquisar..."
            title="Pesquisar paciente"
          />
        </div>

        <AddPatientDialog />
      </div>
    </section>
  );
}
