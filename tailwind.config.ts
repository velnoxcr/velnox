import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        graphite: {
          950: "#0B0F12",
          900: "#11161B",
          800: "#1A1F26",
          700: "#222B33",
          600: "#2B3742",
          500: "#3A4854",
          400: "#5B6975",
          300: "#7E8B96",
          200: "#9AA3AB",
          100: "#C9CFD4",
          50:  "#E8ECEF",
        },
        teal: {
          DEFAULT: "#2DD4BF",
          50:  "#E6FBF7",
          100: "#CCF7EF",
          200: "#99EFDF",
          300: "#5FE3CC",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0E9384",
          700: "#0B7468",
        },
        amber: {
          DEFAULT: "#F59E0B",
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)",   { lineHeight: "1.1",  letterSpacing: "-0.018em" }],
        "display-md": ["clamp(1.5rem, 2.6vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.012em" }],
      },
      letterSpacing: {
        tightest: "-0.025em",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,212,191,0.18), 0 8px 30px -10px rgba(45,212,191,0.25)",
        elev: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -16px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-soft":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
        "radial-teal":
          "radial-gradient(60% 60% at 50% 0%, rgba(45,212,191,0.10), transparent 70%)",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "pulse-slow": "pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
