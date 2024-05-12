import { cn } from '@/_lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-xl bg-background', className)}
      {...props}
    />
  );
}

export { Skeleton };
