type ErrorMessageProps = {
  children: string;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <span className="block text-sm">{children}</span>;
};
