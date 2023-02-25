/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                anton: ["Anton", "sans-serif"],
                neueHaas: ["Neue Haas Grotesk Display Pro", "sans-serif"],
            },
            colors: {
                "custom-theme-purple": "#47003C",
            },
            backgroundImage: {
                'about_bg_img': "url('../public/images/otherPages/laptop/Standard_Background_Black.png')",
            },

            animation: {
                fadeInAni: 'fadeIn 0.6s ease-in-out forwards',
                fadeOutAni: 'fadeOut 0.6s ease-in-out forwards',
            },

            // that is actual animation
            keyframes: theme => ({
                fadeIn: {
                    '0%': { opacity: '0%' },
                    '100%': { opacity: '100%' },
                },
                fadeOut: {
                    '0%': { opacity: '100%' },
                    '100%': { opacity: '0%' },
                },
            }),
        },

        screens: {
            mobile: "320px",
            // => @media (min-width: 640px) { ... }

            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    /* IE and Edge */
                    "-ms-overflow-style": "none",

                    /* Firefox */
                    "scrollbar-width": "none",

                    /* Safari and Chrome */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
