import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        "border-light": "hsl(var(--border-light))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
          muted: "hsl(var(--foreground-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          glow: "hsl(var(--primary-glow))",
          bright: "hsl(var(--primary-bright))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px hsl(347 100% 59% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(347 100% 59% / 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float-delay": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(20px)" },
        },
        // Blob animations - slow, organic, fluid movement
        "blob-1": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(5vw, 8vh) scale(1.1)",
          },
          "50%": {
            transform: "translate(-3vw, 15vh) scale(0.95)",
          },
          "75%": {
            transform: "translate(8vw, 5vh) scale(1.05)",
          },
        },
        "blob-2": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(-8vw, 12vh) scale(1.15)",
          },
          "66%": {
            transform: "translate(5vw, -8vh) scale(0.9)",
          },
        },
        "blob-3": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "20%": {
            transform: "translate(10vw, -5vh) scale(1.08)",
          },
          "40%": {
            transform: "translate(15vw, 8vh) scale(0.92)",
          },
          "60%": {
            transform: "translate(5vw, 12vh) scale(1.12)",
          },
          "80%": {
            transform: "translate(-5vw, 5vh) scale(0.98)",
          },
        },
        "blob-4": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(-12vw, -10vh) scale(1.2)",
          },
        },
        "blob-5": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
          },
          "25%": {
            transform: "translate(3vw, 5vh) scale(1.05) rotate(2deg)",
          },
          "50%": {
            transform: "translate(-5vw, 10vh) scale(0.95) rotate(-2deg)",
          },
          "75%": {
            transform: "translate(8vw, 3vh) scale(1.08) rotate(1deg)",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 20s ease infinite",
        "float-delay": "float-delay 8s ease-in-out infinite",
        // Blob animations - very slow for organic feel
        "blob-1": "blob-1 15s ease-in-out infinite",
        "blob-2": "blob-2 17s ease-in-out infinite",
        "blob-3": "blob-3 19s ease-in-out infinite",
        "blob-4": "blob-4 16s ease-in-out infinite",
        "blob-5": "blob-5 20s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
