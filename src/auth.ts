import { db } from '@/_lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { signIn, signOut, auth, handlers } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [GitHub, Google]
});
