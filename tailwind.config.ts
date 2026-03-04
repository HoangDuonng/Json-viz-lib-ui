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
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: '#DFDFC1',
        foreground: '#0B0D0B',
        muted: '#C8C8A9',
        'muted-foreground': '#595959',
        primary: '#0B0D0B',
        'primary-foreground': '#DFDFC1',
        accent: '#1588B2',
        'accent-foreground': '#ffffff',
        card: '#D5D5B8',
        'card-foreground': '#0B0D0B',
        border: 'rgba(135, 139, 134, 0.12)',
        'border-solid': '#B8B8A0',
        ring: 'rgba(135, 139, 134, 0.12)',
        input: '#B8B8A0',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        popover: '#DFDFC1',
        'popover-foreground': '#0B0D0B',
        'header-bg': '#D5D5B8',
        'header-cta': '#1588B2',
        'footer-bg': '#2A2A22',
        'footer-fg': '#DFDFC1',
        'green-accent': '#2A6F2A',
        'olive-accent': '#98971A',
        'terminal-bg': '#1a1a1a',
        'terminal-fg': '#e0e0e0',
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      fontSize: {
        'display-xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
