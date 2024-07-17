import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { Sidebar } from '@/_components';
import { Toaster } from '@/_components/ui/sonner';
import { auth } from '@/auth';

export default async function AdminLayout({
  children
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <main className="relative flex h-full">
      <Sidebar />
      <div className="ml-0 w-full xs:ml-[4.25rem] md:ml-64">{children}</div>
      <Toaster />
    </main>
  );
}
