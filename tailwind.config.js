/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Tu crées une classe globale nommée "satoshi"
                satoshi: ['Satoshi', 'sans-serif'],
            },
        },
    },
    plugins: [],
}