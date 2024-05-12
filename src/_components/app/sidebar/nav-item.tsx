'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DynamicIcon, IconName } from '@/_components';
import { cn } from '@/_lib/utils';

export type NavItem = {
  name: string;
  href: string;
  icon: IconName;
};

export const NavItem = ({ href, icon, name }: NavItem) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li key={href}>
      <Link
        href={href}
        className={cn(
          'flex items-center gap-2 rounded p-2 hover:bg-background',
          isActive && 'text-primary'
        )}
      >
        <DynamicIcon name={icon} className="size-5" /> {name}
      </Link>
    </li>
  );
};