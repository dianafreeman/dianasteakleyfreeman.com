/* eslint-disable no-console */
const path = require("path");
const config = require("./config/site");

// Make sure that pathPrefix is not empty
const validatedPathPrefix = config.pathPrefix === "" ? "/" : config.pathPrefix;
const validSiteUrl = `${config.siteUrl}${validatedPathPrefix}`;

module.exports = {
  pathPrefix: validatedPathPrefix,
  siteMetadata: {
    siteUrl: validSiteUrl,
    ...config,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/App/index.jsx`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: ".",
        aliases: {
          "@project/config": "./config",
          "@project/hooks": "./src/hooks",
          "@project/assets": "./src/assets",
          "@project/fonts": "./src/assets/fonts",
          "@project/providers": "./src/providers",
          "@project/components": "./src/components",
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [config.googleAnalyticsID],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve("src/layouts/Admin/index.js"),
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "DSF.com Content Manager",
        includeRobots: false,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icons: [
          {
            src: `/logos/logo-48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/logos/logo-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/logos/logo-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
