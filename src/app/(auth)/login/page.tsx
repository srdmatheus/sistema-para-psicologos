'use client';

import Image from 'next/image';

import { Button, Input } from '@/_components';

export default function LoginPage() {
  return (
    <section className="grid h-dvh w-full grid-cols-2">
      <div className="flex w-full flex-col items-center justify-center px-20">
        <Image
          width={150}
          height={100}
          sizes="100vw"
          priority
          quality={100}
          src="/logo.svg"
          alt="Logo Psi Planeja"
        />
        <form className="flex flex-col gap-4">
          <Input.Root>
            <Input.Text />
          </Input.Root>
          <Input.Root>
            <Input.Text />
          </Input.Root>
          <Button className="w-full">Entrar</Button>
        </form>
      </div>
      <div className="relative h-full w-full">
        <Image src="/bg-login.webp" fill alt="background page" />
      </div>
    </section>
  );
}
