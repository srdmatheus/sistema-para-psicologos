import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      manrope: ['var(--font-manrope)']
    },
    extend: {
      screens: {
        xs: '380px'
      },
      colors: {
        background: {
          DEFAULT: 'rgb(var(--background))',
          foreground: 'rgb(var(--background-foreground))'
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))'
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground))'
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive))'
        },
        success: {
          DEFAULT: 'rgb(var(--success))'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
export default config;
