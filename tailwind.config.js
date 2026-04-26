/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:     '#050508',
        bg2:    '#080810',
        neon:   '#00f5c4',
        neon2:  '#7c3aed',
        neon3:  '#f59e0b',
        soft:   '#a0a0c0',
        muted:  '#6b6b8a',
        ink:    '#e8e8f0',
      },
      fontFamily: {
        head: ['"Clash Display"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
      animation: {
        fadeUp0: 'fadeUp 0.8s 0.2s both',
        fadeUp1: 'fadeUp 0.8s 0.35s both',
        fadeUp2: 'fadeUp 0.8s 0.5s both',
        fadeUp3: 'fadeUp 0.8s 0.65s both',
        fadeUp4: 'fadeUp 0.8s 0.8s both',
        fadeUp5: 'fadeUp 0.8s 1s both',
        fadeUp6: 'fadeUp 0.8s 1.2s both',
        scrollPulse: 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%,100%': { opacity: '0.3', transform: 'scaleY(0.6)' },
          '50%':     { opacity: '1',   transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
