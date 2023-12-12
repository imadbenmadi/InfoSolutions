/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inria Sans", "sans-serif"],
        },

        extend: {
            colors: {
                Black: "var(--Black)",
                Blue: "var(--Blue)",
            },
        },
    },
    plugins: [],
};