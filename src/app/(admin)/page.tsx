import { Icon } from '@/components/ui';

export default function AdminPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-extrabold tracking-tight">Dashboard</h1>
      <div className="mt-8">
        <div className="h-44 w-96 rounded-lg bg-background-foreground p-4 shadow shadow-primary/10">
          <div className="flex items-center justify-between text-foreground/80 ">
            <span className="text-sm font-semibold">Hoje</span>
            <Icon.calendar className="size-5 text-foreground/70" />
          </div>
          <div>3 Agendamentos</div>
        </div>
      </div>
    </section>
  );
}
