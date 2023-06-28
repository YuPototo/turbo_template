// Importing env files here to validate on build
import "./src/env.mjs";
import "@company-name/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@company-name/ui"],
};

export default config;

