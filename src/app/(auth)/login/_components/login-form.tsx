import { Button, Icon } from '@/_components';
import { signIn } from '@/auth';

export const LoginForm = () => {
  const handleGithubSignIn = async () => {
    'use server';
    await signIn('github', { redirectTo: '/' });
  };

  const handleGoogleSignIn = async () => {
    'use server';
    await signIn('google', { redirectTo: '/' });
  };

  return (
    <div className="flex flex-col gap-2.5">
      <form action={handleGithubSignIn}>
        <Button
          type="submit"
          className="h-12 w-72 bg-gray-800 font-bold hover:bg-gray-800/90"
        >
          <Icon.github className="size-4" />
          Entre com Github
        </Button>
      </form>
      <form action={handleGoogleSignIn}>
        <Button
          type="submit"
          className="h-12 w-72 bg-red-500 font-bold hover:bg-red-500/90"
        >
          <Icon.google className="size-4" />
          Entre com Google
        </Button>
      </form>
    </div>
  );
};
