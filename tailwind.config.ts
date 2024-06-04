import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/client/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'qu_blue': {
          200 : '#c39cfd',
          300 : '#a46afb',
          400 : '#8639fa',
          500 : '#6807f9',
          600 : '#5306c7',
          700 : '#3e0495',
          800 : '#1f024b',
        },
        'qu_purple': {
          200 : '#d6bafd',
          300 : '#c197fb',
          400 : '#ad75fa',
          500 : '#9852f9',
          600 : '#7a42c7',
          700 : '#5b3195',
          800 : '#3d2164',
        },
        'qu_li_purple': '#c299fc',
        'qu_yellow': {
          200 : '#ffefb0',
          300 : '#ffe788',
          400 : '#ffdf61',
          500 : '#ffd739',
          600 : '#ccac2e',
          700 : '#998122',
          800 : '#665617',
        },
      },
    },
  },
  plugins: [],
};
export default config;
