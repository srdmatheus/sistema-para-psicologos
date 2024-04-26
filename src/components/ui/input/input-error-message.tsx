import { ReactNode } from 'react';

type InputErrorMessageProps = {
  children: ReactNode;
};

export const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
  return <span className="block text-sm text-destructive">{children}</span>;
};
