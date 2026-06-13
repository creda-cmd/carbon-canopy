/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#e6f4ec",
          100: "#c3e7cf",
          200: "#8fd0a4",
          300: "#5cbd80",
          400: "#43b96a",
          500: "#2e9e54",
          600: "#1b6e3c",
          700: "#14532d",
          800: "#103b29",
          900: "#0c2a1d",
        },
        sage: {
          100: "#e6f4ec",
          200: "#c3e7cf",
          300: "#8fd0a4",
        },
        lime: {
          50: "#f3fbe6",
          100: "#e4f6c3",
          200: "#cdef90",
          300: "#b2e35a",
          400: "#9bd62f",
          500: "#7fbf1f",
          600: "#639a17",
          700: "#4c7615",
        },
        gold: "#d9b14a",
        mist: "#f4faf6",
        ink: "#16241c",
        muted: "#51635a",
        line: "#dbe9e0",
      },
      fontFamily: {
        head: ['"Times New Roman"', "Times", "Georgia", "serif"],
        body: ['"Times New Roman"', "Times", "Georgia", "serif"],
      },
      boxShadow: {
        sm: "0 2px 8px rgba(16,59,41,0.06)",
        md: "0 10px 30px rgba(16,59,41,0.12)",
        lg: "0 24px 60px rgba(12,42,29,0.22)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
        "3xl": "28px",
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
