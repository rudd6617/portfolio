/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/main.js'],
  // main.js toggles these at runtime — keep them from being purged.
  safelist: ['text-accent', 'text-zinc-400'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          900: '#0a0c10',
          800: '#0f1218',
          700: '#161a22',
          600: '#1d2230',
          500: '#2a3142',
        },
        accent: {
          DEFAULT: '#5eead4',
          dim: '#2dd4bf',
          glow: '#99f6e4',
        },
      },
    },
  },
};
