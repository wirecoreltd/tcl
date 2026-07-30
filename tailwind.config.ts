import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#081826",
          deep: "#050D16",
          panel: "#0D2436",
          line: "rgba(255,255,255,0.08)",
        },
        electric: {
          DEFAULT: "#2F6FED",
          light: "#5B8DEF",
          dim: "#1A3F8F",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          dim: "#0E8FA6",
        },
        offwhite: "#F3F8FF",
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
        glow: "0 0 40px rgba(47,111,237,0.35)",
        glowCyan: "0 0 30px rgba(34,211,238,0.25)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(47,111,237,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
