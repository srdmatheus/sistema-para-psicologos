'use client';

import { Tooltip } from '@/_components';
import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Tooltip.Provider>{children}</Tooltip.Provider>
    </ThemeProvider>
  );
};
