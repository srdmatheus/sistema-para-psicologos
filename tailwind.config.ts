import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      manrope: ['var(--font-manrope)']
    },
    extend: {
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
  plugins: []
};
export default config;
