module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ["@company-name/eslint-config-custom"],
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },
};
