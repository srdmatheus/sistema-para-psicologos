'use client';

import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useInput } from './input-root';

type InputLabelProps = ComponentProps<'label'>;

export const InputLabel = ({ className, ...props }: InputLabelProps) => {
  const { hasError } = useInput();
  return (
    <label
      className={cn(
        'pb-1 text-sm font-semibold',
        hasError && 'text-destructive',
        className
      )}
      {...props}
    />
  );
};
