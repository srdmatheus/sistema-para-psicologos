import { Skeleton } from '@/_components';

export const CustomerListSkeleton = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="mb-4 flex gap-4">
        <Skeleton className="h-10 w-96" />
        <Skeleton className="h-10 w-40" />
      </div>
      <Skeleton className="h-96 w-full" />
    </div>
  );
};
