import Image from 'next/image';

import { auth } from '../../../auth';
import { LogouButton } from './logout-button';
import { NavItem } from './nav-item';

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: 'grid' },
  { name: 'Agendamentos', href: '/agendamentos', icon: 'calendar' },
  { name: 'Clientes', href: '/clientes', icon: 'contact' }
];

export const Sidebar = async () => {
  const session = await auth();

  if (!session?.user) {
    return <div>Usuário não autenticado</div>;
  }
  return (
    <div className="fixed bottom-0 z-40 flex w-full flex-col border-t bg-background-foreground xs:h-dvh xs:w-[4.25rem] xs:border-none md:w-64">
      <div className="hidden w-full items-center justify-start border-b p-8 md:flex">
        <Image
          width={128}
          height={100}
          sizes="100vw"
          className="hidden md:block"
          quality={100}
          src="/logo.svg"
          alt="Logo Psi Planeja"
        />
      </div>

      <div className="flex w-full p-4 xs:h-full xs:flex-col md:p-8">
        <h2 className="hidden pl-2 text-lg font-semibold md:block">
          Olá, {session?.user.name?.split(' ')[0]}!
        </h2>
        <nav className="flex-1 pt-2 xs:pt-10">
          <ul className="flex justify-between gap-4 xs:flex-col xs:justify-start">
            {navItems.map((props) => (
              <NavItem {...props} key={props.href} />
            ))}
          </ul>
        </nav>
        <footer className="hidden xs:block">
          <LogouButton />
        </footer>
      </div>
    </div>
  );
};
