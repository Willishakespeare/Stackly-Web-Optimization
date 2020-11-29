/* eslint-disable @typescript-eslint/no-var-requires */
const withReactSvg = require("next-react-svg");
const path = require("path");
const { nextI18NextRewrites } = require("next-i18next/rewrites");
const withOffline = require("next-offline");
const localeSubpaths = {};

const nextConfig = {};

module.exports = withOffline(nextConfig);

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/assets/icons"),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
