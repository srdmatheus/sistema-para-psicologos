import { ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { useInput } from './input-root';

type InputTextProps = ComponentProps<'input'>;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, ...props }, ref) => {
    const { hasError } = useInput();
    return (
      <input
        className={cn('', hasError && '', className)}
        {...props}
        ref={ref}
      />
    );
  }
);

InputText.displayName = 'InputText';
