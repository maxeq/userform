import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
