/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          darkest: '#03070E',
          dark: '#060D1A',
          card: '#0A1526',
          border: '#14253D',
          hover: '#1B3252',
        },
        trench: {
          cyan: '#00F0FF',
          neon: '#00FF9D',
          gold: '#FFD700',
          coral: '#FF3366',
          purple: '#A855F7',
        },
        krill: {
          text: '#F0F6FC',
          muted: '#8B949E',
          dim: '#484F58',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        pixel: ['VT323', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 15px rgba(0, 240, 255, 0.25)',
        'neon-glow': '0 0 15px rgba(0, 255, 157, 0.25)',
        'coral-glow': '0 0 15px rgba(255, 51, 102, 0.25)',
      }
    },
  },
  plugins: [],
};
