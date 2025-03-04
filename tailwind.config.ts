import type { Config } from 'tailwindcss'
 
// import fontFamily from "tailwindcss/defaultTheme";

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
  ],
  theme: {
    extend: {
        // fontFamily: {
        //     mont: ['var(--font-mont)', ...fontFamily.sans]
        // },
        colors: {
            dark: "#1b1b1b",
            light: "#f5f5f5",
            primary: "#B63E96", // 240,86,199
            primaryDark: "#58E6D9", // 80,230,217
        }
    },
  },
  plugins: [],
} satisfies Config