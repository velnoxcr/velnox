import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Paper — light surface palette (was 'graphite' inverted)
        paper: {
          50:  "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
          400: "#CBD5E1",
          500: "#94A3B8",
        },
        // Ink — text + dark accents
        ink: {
          50:  "#F1F5F9",
          100: "#CBD5E1",
          200: "#94A3B8",
          300: "#64748B",
          400: "#475569",
          500: "#334155",
          600: "#1E293B",
          700: "#0F172A",
          800: "#0B1220",
          900: "#060A14",
        },
        // Ocean — primary brand navy
        ocean: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        // Teal — secondary accent (CTAs alt, success states)
        teal: {
          DEFAULT: "#0D9488",
          50:  "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
        },
        // Amber — strictly reserved for SAE / Pharmacovigilance
        amber: {
          DEFAULT: "#F59E0B",
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif:   ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw, 5rem)",     { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-xl":  ["clamp(2.5rem, 5vw, 4rem)",    { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2rem, 4vw, 3rem)",      { lineHeight: "1.1",  letterSpacing: "-0.018em" }],
        "display-md":  ["clamp(1.5rem, 2.6vw, 2rem)",  { lineHeight: "1.2",  letterSpacing: "-0.012em" }],
      },
      letterSpacing: { tightest: "-0.025em" },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)",
        cardHover: "0 4px 6px rgba(15,23,42,0.04), 0 16px 40px -16px rgba(30,64,175,0.16)",
        glow: "0 0 0 1px rgba(13,148,136,0.22), 0 12px 36px -12px rgba(13,148,136,0.32)",
        oceanGlow: "0 0 0 1px rgba(30,64,175,0.22), 0 16px 36px -12px rgba(30,64,175,0.35)",
        ringInk: "inset 0 0 0 1px rgba(15,23,42,0.06)",
      },
      backgroundImage: {
        "grid-soft":
          "radial-gradient(circle at 1px 1px, rgba(30,58,138,0.05) 1px, transparent 0)",
        "radial-ocean":
          "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.10), transparent 70%)",
        "ocean-gradient":
          "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 45%, #0D9488 100%)",
        "ocean-soft":
          "linear-gradient(180deg, rgba(239,246,255,1) 0%, rgba(255,255,255,1) 100%)",
        "wave-divider":
          "linear-gradient(180deg, #F1F5F9 0%, #FFFFFF 100%)",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "pulse-slow": "pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 800ms cubic-bezier(0.2,0.8,0.2,1) both",
        "subtle-float": "subtleFloat 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
