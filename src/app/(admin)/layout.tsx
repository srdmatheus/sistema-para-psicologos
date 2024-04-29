import { ReactNode } from 'react';

import { Sidebar } from '@/components';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-full">
      <Sidebar />
      {children}
    </main>
  );
}
