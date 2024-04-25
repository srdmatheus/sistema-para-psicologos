import { NavItem } from './nav-item';

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: 'grid' },
  { name: 'Agendamentos', href: '/agendamentos', icon: 'calendar' },
  { name: 'Pacientes', href: '/pacientes', icon: 'contact' },
  { name: 'Teleconsulta', href: '/teleconsulta', icon: 'video' },
  { name: 'Questionários', href: '/questionarios', icon: 'notebookText' }
];

export const Sidebar = () => {
  return (
    <div className="flex h-full w-64 flex-col bg-background-foreground p-8">
      <h2 className="pl-2 text-lg font-semibold">Olá, Maria!</h2>
      <nav className="flex-1 pt-10">
        <ul className="flex flex-col gap-4">
          {navItems.map((props) => (
            <NavItem {...props} key={props.href} />
          ))}
        </ul>
      </nav>
      <footer>Deslogar</footer>
    </div>
  );
};
