import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2E7D32',
          light: '#81C784',
          amber: '#F59E0B',
          bg: '#FAF9F6',
          surface: '#F1F8E9',
        }
      }
    }
  },
  plugins: [],
};

export default config;
