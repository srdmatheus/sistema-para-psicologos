import { ComponentProps, forwardRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { useInput } from './input-root';

type InputTextProps = ComponentProps<'input'> & {
  startContent?: ReactNode;
  endContent?: ReactNode;
};

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, startContent, endContent, ...props }, ref) => {
    const { hasError } = useInput();
    return (
      <div
        className={cn(
          'flex w-full items-center gap-2 rounded-xl border bg-background-foreground p-2 text-sm ring-primary ring-offset-2 focus-within:ring-2',
          hasError && 'border-destructive text-destructive',
          className
        )}
      >
        {startContent}
        <input {...props} ref={ref} className="w-full outline-none" />
        {endContent}
      </div>
    );
  }
);

InputText.displayName = 'InputText';
