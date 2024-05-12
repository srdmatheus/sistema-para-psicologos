'use client';

import { useRouter } from 'next/navigation';

import { Button, Icon, Tooltip } from '@/_components';

export const BackButton = () => {
  const router = useRouter();
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="h-10 w-10 p-0"
          >
            <Icon.chevronLeft size={14} />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>Voltar</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
