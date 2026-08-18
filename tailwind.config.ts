import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        display: ['clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem)', { lineHeight: '1.1' }],
        h1: ['clamp(1.5rem, 1.3rem + 0.8vw, 2rem)', { lineHeight: '1.2' }],
        h2: ['clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)', { lineHeight: '1.3' }],
        h3: ['clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.5' }],
        small: ['0.875rem', { lineHeight: '1.4' }],
        matrix: ['clamp(0.875rem, 0.8rem + 0.3vw, 1.125rem)', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
} satisfies Config
