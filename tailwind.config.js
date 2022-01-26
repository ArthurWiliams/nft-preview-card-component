const { borderRadius } = require("tailwindcss/defaultTheme");

const { HTML_ENTRY } = require("./scripts/paths.js");

module.exports = {
    content: [HTML_ENTRY],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            blue: "hsl(215, 51%, 70%)",
            cyan: "hsl(178, 100%, 50%)",
            "very-dark-blue": {
                800: "hsl(215, 32%, 27%)",
                850: "hsl(216, 50%, 16%)",
                900: "hsl(217, 54%, 11%)"
            },
            white: "hsl(0, 0%, 100%)"
        },
        fontFamily: {
            sans: ["Outfit", "sans-serif"]
        },
        borderRadius: {
            DEFAULT: "1rem",
            md: borderRadius.md,
            full: borderRadius.full
        },
        fontWeight: {
            light: 300,
            normal: 400,
            semibold: 600
        },
        extend: {
            animation: {
                "fade-in": "fade-in 120ms ease-out 200ms both"
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        transform: "translateY(1.5rem)",
                        opacity: "0"
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                }
            }
        }
    }
};
