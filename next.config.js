const path = require("path");

const appPath =
  process.env.NODE_ENV === "production" ? "/jaminthejamlounge" : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["@"] = path.resolve.apply(__dirname);
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  basePath: appPath,
  assetPrefix: appPath,
};

module.exports = nextConfig;
