'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { DynamicIcon, IconName } from '@/components/ui';

export type NavItem = {
  name: string;
  href: string;
  icon: IconName;
};

export const NavItem = ({ href, icon, name }: NavItem) => {
  const pathname = usePathname();
  return (
    <li key={href}>
      <Link
        href={href}
        className={cn(
          'flex items-center gap-2 rounded p-2 hover:bg-background',
          pathname.startsWith(href) && 'text-primary'
        )}
      >
        <DynamicIcon name={icon} className="size-5" /> {name}
      </Link>
    </li>
  );
};
