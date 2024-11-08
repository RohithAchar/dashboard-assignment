import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        custom: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        "custom-lg": "1147px",
        "custom-xl": "1500px",
      },
      colors: {
        background: "#F9F9F9",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(227, 91%, 54%)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgba(27, 89, 248, 0.1)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "#ffffff", // Default sidebar background (adjust as needed)
          foreground: "#000000", // Sidebar foreground color (adjust as needed)
          primary: "#1B59F8", // Primary color for sidebar
          "primary-foreground": "#ffffff", // Foreground text color on primary (e.g., white for contrast)
          accent: "rgba(27, 89, 248, 0.1)", // Secondary color as accent with low opacity
          "accent-foreground": "#1B59F8", // Accent foreground, could be the primary color for contrast
          border: "#E5E7EB", // Light gray for borders, adjust as needed
          ring: "#1B59F8", // Using primary for ring
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
