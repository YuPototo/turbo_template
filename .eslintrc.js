module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ["@company-name/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
