'use client';

import {
  ComponentProps,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { cn } from '@/lib/utils';

type InputRootContextType = {
  hasError: boolean;
};

const InputRootContext = createContext<InputRootContextType>(
  {} as InputRootContextType
);

export const useInput = () => {
  const context = useContext(InputRootContext);
  if (!context) {
    throw new Error('Componente Input necessita ser usado com Root.');
  }

  return context;
};

type InputRootProps = ComponentProps<'div'> & {
  setError?: boolean;
};

export const InputRoot = ({
  children,
  className,
  setError = false,
  ...props
}: InputRootProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (setError) {
      setHasError(true);
    }
  }, [setError, setHasError]);

  const contextValue = { hasError };

  return (
    <InputRootContext.Provider value={contextValue}>
      <div className={cn('', hasError && '', className)} {...props}>
        {children}
      </div>
    </InputRootContext.Provider>
  );
};
