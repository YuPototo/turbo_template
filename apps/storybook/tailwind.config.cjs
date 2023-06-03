const base = require("@company-name/tailwind-config/tailwind-preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
    ...base,
    content: [...base.content, "./stories/**/*.{js,ts,tsx,jsx}"],
};
