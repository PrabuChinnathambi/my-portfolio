import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    fontFamily: {
      short: ["short-baby"],
      roboto: ["roboto"],
    },
    extend: {
      colors: {
        // background: "var(--background)",
        // border: "var(--border)",
        // card: "var(--card)",
        // "copy-primary": "var(--copy-primary)",
        // "copy-secondary": "var(--copy-secondary)",
        // cta: "var(--cta)",
        // "cta-active": "var(--cta-active)",
        // "cta-text": "var(--cta-text)",
        // grape: "r(--grape)",

        // background: "var(--background)",
        // blue: "var(--blue)",
        // white: "var(--white)",
        // black: "var(--black)",
        // gray: "var(--gray)",
        // primary: "var(--white)",
        // secondary: "var(--gray)",

        blue: "#61dbfb",
        black: "#000000",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        gray_dark: "#273444",
        gray: "#C3C3C3",
        gray_light: "#d3dce6",
        white: "#F4F6F7",
      },

      textColor: {
        'primary': "var(--white)",
        'secondary': "var(--gray)",
        'danger': "var(--blue)",
      }
      // extend: {

      //   typography: {
      //     DEFAULT: {
      //       css: {
      //         "code::before": {
      //           content: '""',
      //         },
      //         "code::after": {
      //           content: '""',
      //         },
      //       },
      //     },
      //     quoteless: {
      //       css: {
      //         "blockquote p:first-of-type::before": { content: "none" },
      //         "blockquote p:first-of-type::after": { content: "none" },
      //       },
      //     },
      //   },
      //   backgroundImage: {
      //     "gradient-radial":
      //       "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      //   },
      //   animation: {
      //     "fade-in": "fade-in 3s ease-in-out forwards",
      //     title: "title 3s ease-out forwards",
      //     "fade-left": "fade-left 3s ease-in-out forwards",
      //     "fade-right": "fade-right 3s ease-in-out forwards",
      //   },
      //   keyframes: {
      //     "fade-in": {
      //       "0%": {
      //         opacity: "0%",
      //       },
      //       "75%": {
      //         opacity: "0%",
      //       },
      //       "100%": {
      //         opacity: "100%",
      //       },
      //     },
      //     "fade-left": {
      //       "0%": {
      //         transform: "translateX(100%)",
      //         opacity: "0%",
      //       },

      //       "30%": {
      //         transform: "translateX(0%)",
      //         opacity: "100%",
      //       },
      //       "100%": {
      //         opacity: "0%",
      //       },
      //     },
      //     "fade-right": {
      //       "0%": {
      //         transform: "translateX(-100%)",
      //         opacity: "0%",
      //       },

      //       "30%": {
      //         transform: "translateX(0%)",
      //         opacity: "100%",
      //       },
      //       "100%": {
      //         opacity: "0%",
      //       },
      //     },
      //     title: {
      //       "0%": {
      //         "line-height": "0%",
      //         "letter-spacing": "0.25em",
      //         opacity: "0",
      //       },
      //       "25%": {
      //         "line-height": "0%",
      //         opacity: "0%",
      //       },
      //       "80%": {
      //         opacity: "100%",
      //       },

      //       "100%": {
      //         "line-height": "100%",
      //         opacity: "100%",
      //       },
      //     },
      //   },
      // },
      // spacing: {
      //   "128": "32rem",
      //   "144": "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
