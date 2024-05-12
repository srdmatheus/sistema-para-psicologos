'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DynamicIcon, IconName, Tooltip } from '@/_components';
import { useMediaQuery } from '@/_hooks/use-media-query';
import { cn } from '@/_lib/utils';

export type NavItem = {
  name: string;
  href: string;
  icon: IconName;
};

export const NavItem = ({ href, icon, name }: NavItem) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const isActive = pathname === href;

  return (
    <li>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link
            href={href}
            className={cn(
              'flex items-center gap-2 rounded p-2 hover:bg-background',
              isActive && 'text-primary'
            )}
          >
            <DynamicIcon name={icon} className="size-5" /> {!isMobile && name}
          </Link>
        </Tooltip.Trigger>
        {isMobile && (
          <Tooltip.Content>
            <p>{name}</p>
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </li>
  );
};
