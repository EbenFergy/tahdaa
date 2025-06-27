const tailwindConfig = {
  darkMode: 'class', // Enables dark mode support
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './core/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-main)',
        'primary-200': 'var(--primary-main-200)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        mdlg: '900px',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
