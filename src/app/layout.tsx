import type { Metadata } from 'next';

import { manrope } from '@/fonts';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sistema para psicólogos',
  description: 'Sistema para psicólogos'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
