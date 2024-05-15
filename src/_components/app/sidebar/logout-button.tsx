'use client';

import { Icon, Tooltip } from '@/_components/ui';
import { useMediaQuery } from '@/_hooks/use-media-query';

export const LogouButton = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className="flex w-full items-center gap-2 rounded p-2 hover:bg-background">
          <Icon.arrowLeftFromLine className="size-5" />
          <span className="hidden md:block">Sair</span>
        </button>
      </Tooltip.Trigger>
      {isMobile && (
        <Tooltip.Content>
          <p>Sair</p>
        </Tooltip.Content>
      )}
    </Tooltip.Root>
  );
};
