const tailwindConfig = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './core/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'slide-in-from-right',
    'slide-out-to-right',
    'data-[state=open]:slide-in-from-right',
    'data-[state=closed]:slide-out-to-right',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-to-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'slide-in-from-right': 'slide-in-from-right 300ms ease-out',
        'slide-out-to-right': 'slide-out-to-right 300ms ease-in',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
