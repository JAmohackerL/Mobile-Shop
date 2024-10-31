/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7332d6",
                secondary: "#ecf0f2",
                tertiary: "#020202",
                container: "#e5e9ec",
            },
            fontFamily: {
                estedad: ["var(estedad)"],
            },
        },
    },
    plugins: [],
};
