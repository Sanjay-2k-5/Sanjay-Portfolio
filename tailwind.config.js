/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                terminal: {
                    black: "#0d1117",
                    darker: "#0a0a0a",
                    green: "#00ff41",
                    dim: "#161b22",
                    text: "#c9d1d9",
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                blink: 'blink 1s step-end infinite',
                "scroll-left": "scroll-left 40s linear infinite",
                "scroll-right": "scroll-right 40s linear infinite",
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                "scroll-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "scroll-right": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            }
        },
    },
    plugins: [],
}
