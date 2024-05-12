import { Skeleton } from '@/_components/ui/skeleton';

export default function CustomerLoading() {
  return (
    <section className="grid w-full grid-cols-10 divide-x">
      <div className="col-span-6 p-8">
        <div className="h-full rounded-xl bg-background-foreground p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-10 w-20" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-36" />
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight">
              <Skeleton className="h-8 w-80" />
            </h2>
          </div>

          <Skeleton className="my-2 h-7 w-20" />
          <Skeleton className="my-2 h-7 w-16" />
          <Skeleton className="my-2 h-7 w-32" />
          <hr className="my-4" />
          <Skeleton className="my-2 h-16 w-80" />
          <Skeleton className="my-2 h-7 w-40" />
          <hr className="my-4" />
          <Skeleton className="my-2 h-40 w-full" />
        </div>
      </div>

      <div className="col-span-4 p-8">
        <div className="h-full rounded-xl bg-background-foreground p-8">
          <h2 className="pb-4 text-xl font-extrabold tracking-tight">
            Sessões
          </h2>
          <Skeleton className="h-[600px] w-full" />
        </div>
      </div>
    </section>
  );
}
