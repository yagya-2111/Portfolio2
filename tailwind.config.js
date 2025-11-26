/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#030712',
        'brand-darker': '#01030a',
        'brand-card': 'rgba(15, 23, 42, 0.72)',
        'brand-glow': '#a855f7',
        'brand-glow-soft': '#38bdf8',
        'brand-accent': '#8b5cf6',
        'brand-accent-2': '#06b6d4',
        'brand-accent-3': '#f97316',
        'brand-red': '#ef4444',
      },
      boxShadow: {
        glass: '0 20px 55px rgba(5, 7, 15, 0.65)',
        'inner-glow': 'inset 0 0 20px rgba(14,165,233,0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 0% 0%, rgba(14,165,233,0.25), transparent 45%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.35), transparent 55%)',
        'grid-pattern':
          'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      animation: {
        blob: 'blob 16s infinite',
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-15px, 25px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
