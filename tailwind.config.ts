import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral charcoal base (instead of a pure navy) so all four brand
        // accent colors below can sit on it without clashing.
        navy: {
          DEFAULT: "#12141A",
          deep: "#0A0B0F",
          panel: "#1C1F27",
          line: "rgba(255,255,255,0.08)",
        },
        // Primary accent, taken from the blue quadrant of the TCL logo.
        electric: {
          DEFAULT: "#5D6AC4",
          light: "#7C87D6",
          dim: "#3B4590",
        },
        // "Live / online" accent, taken from the green quadrant of the logo.
        cyan: {
          DEFAULT: "#4FAE44",
          dim: "#357A2D",
        },
        // Secondary accents from the remaining two logo quadrants — used
        // sparingly (badges, hover states, the Fraud & Risk service icon)
        // rather than as base colors, to keep the site feeling like a B2B
        // operations partner rather than a rainbow of brand chips.
        brandOrange: {
          DEFAULT: "#E88B3F",
          dim: "#B8672A",
        },
        brandRed: {
          DEFAULT: "#D9394A",
          dim: "#A32836",
        },
        offwhite: "#F3F5F9",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        card: "20px",
      },
      keyframes: {
        pulseLine: {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
        pingSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.6)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-6px)" },
        },
      },
      animation: {
        "pulse-line": "pulseLine 3.5s linear infinite",
        "ping-slow": "pingSlow 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        drift: "drift 6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 40px rgba(93,106,196,0.35)",
        glowCyan: "0 0 30px rgba(79,174,68,0.25)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(93,106,196,0.16), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
