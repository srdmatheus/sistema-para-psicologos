'use client';

import { useRouter } from 'next/navigation';

import { Button, Icon } from '@/_components';

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="outline">
      <Icon.chevronLeft size={14} /> Voltar
    </Button>
  );
};
