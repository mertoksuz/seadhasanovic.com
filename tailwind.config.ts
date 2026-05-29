import type { Config } from "tailwindcss";

// Tailwind config - dark, tactical theme with Rival-blue accent.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand palette
        ink: {
          950: "#070809",
          900: "#0b0d10",
          800: "#111418",
          700: "#181c22",
          600: "#1f242b",
          500: "#2a3038",
        },
        // Rival-inspired accent red
        rival: {
          400: "#ff4d4d",
          500: "#e10600",
          600: "#b80500",
          700: "#8a0400",
        },
        // Tactical orange (secondary accent)
        tac: {
          500: "#ff7a18",
          600: "#e6620a",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Bebas Neue'", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-spot":
          "radial-gradient(60% 60% at 50% 0%, rgba(225,6,0,0.22) 0%, rgba(7,8,9,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
