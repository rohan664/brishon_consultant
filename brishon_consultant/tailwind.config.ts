import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Parkinsans:["Parkinsans"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"var(--primary)",
        primarylight:"var(--primary-light)",
        primarydark:"var(--primary-dark)",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        large:'1.5rem',
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
      },
      backgroundImage:{
        'teams':"url('@/public/assets/buildings.jpg')",
        'contact':"url('@/public/assets/contact_teams.png')",
        'about':"url('@/public/assets/team_discussion.png')"
      },
      screens: {
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '2560px',
      }
    },
  },
  plugins: [],
} satisfies Config;
