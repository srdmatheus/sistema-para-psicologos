import type { Metadata } from 'next';

import { manrope } from '@/_fonts';

import '@/_styles/globals.css';

import { Providers } from '@/_providers';

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
      <body className={`${manrope.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
