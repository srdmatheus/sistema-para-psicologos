import { Icon } from '@/_components';

export const Search = () => {
  return (
    <div className="flex w-96 items-center gap-2 rounded-xl border bg-background-foreground p-2 ring-primary focus-within:ring-2">
      <Icon.search className="size-4" />
      <input
        type="text"
        className="w-full outline-none placeholder:text-foreground"
        placeholder="Pesquisar..."
        title="Pesquisar cliente"
      />
    </div>
  );
};
