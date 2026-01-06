import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // Deep Charcoal/Black
                surface: "#121212", // Slightly lighter black
                primary: "#4682B4", // Steel Blue
                secondary: "#5F9EA0", // Cadet Blue (Muted Cyan)
                text: "#E0E0E0", // High contrast gray
                "text-muted": "#A0A0A0",
            },
            fontFamily: {
                mono: ["var(--font-inconsolata)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
