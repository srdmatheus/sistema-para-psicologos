'use client';

import { Tooltip } from '@/_components';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
};
