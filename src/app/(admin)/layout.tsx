import { ReactNode } from 'react';

import { Sidebar } from '@/_components';
import { Toaster } from '@/_components/ui/sonner';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex h-full">
      <Sidebar />
      <div className="ml-0 w-full xs:ml-[4.25rem] md:ml-64">{children}</div>
      <Toaster />
    </main>
  );
}
