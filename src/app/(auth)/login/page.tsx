import Image from 'next/image';
import Link from 'next/link';

import { LoginForm } from './_components/login-form';

export default async function LoginPage() {
  return (
    <section className="flex h-dvh w-full items-center justify-center bg-opacity-30 bg-[url('/bg-login.webp')] bg-cover">
      <div className="flex flex-col items-center justify-center rounded-xl bg-background-foreground px-36 py-4">
        <div className="my-28 flex flex-col items-center justify-center gap-8">
          <Image
            width={240}
            height={200}
            sizes="100vw"
            priority
            src="/logo.svg"
            alt="Logo Psi Planeja"
          />
        </div>

        <LoginForm />

        <footer className="text-sm">
          Criado com 💜 por{' '}
          <Link
            target="_blank"
            href="https://linkedIn.com/in/srdmatheus"
            className="text-primary/80 hover:text-primary hover:underline"
          >
            Matheus Ribeiro
          </Link>
        </footer>
      </div>
    </section>
  );
}
