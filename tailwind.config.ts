import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: '#F6F5ED',
        foreground: '#171717',
        muted: '#E8E6DD',
        'muted-foreground': '#525252',
        primary: '#0a0a0a',
        'primary-foreground': '#ffffff',
        accent: '#5b9cf5',
        'accent-foreground': '#ffffff',
        card: '#F6F5ED',
        'card-foreground': '#171717',
        border: '#d4d2c9',
        ring: '#d4d2c9',
        input: '#d4d2c9',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        popover: '#F6F5ED',
        'popover-foreground': '#171717',
        'header-bg': '#D9D6C7',
        'header-cta': '#38A3CC',
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
};

export default config;
