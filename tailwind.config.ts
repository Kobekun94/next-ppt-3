import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'vb-blue': '#003674',
      },
      width: {
        'custom-100-32': 'calc(100% - 32px)',
      },
      height: {
        'custom-100-40': 'calc(100% - 16px - 16px - 40px)',
      },
    },
  },
  plugins: [],
};
export default config;
