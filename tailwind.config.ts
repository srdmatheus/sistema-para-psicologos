import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_styles/**/*.css'
  ],
  theme: {
    fontFamily: {
      manrope: ['var(--font-manrope)']
    },
    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        border: 'rgb(var(--border))',
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
