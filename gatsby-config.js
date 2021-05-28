const urljoin = require('url-join');
const path = require('path');
const config = require('./src/config/siteMeta');

// Make sure that pathPrefix is not empty
const validatedPathPrefix = config.pathPrefix === '' ? '/' : config.pathPrefix;
const validSiteUrl = `${config.siteUrl}${validatedPathPrefix}`;

module.exports = {
  pathPrefix: validatedPathPrefix,
  siteMetadata: {
    siteUrl: validSiteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/Main/index.jsx`),
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@project/config': './config',
          '@project/hooks': './hooks',
          '@project/assets': './assets',
          '@project/fonts': './assets/fonts',
          '@project/context': './context',
          '@project/components': './components',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: path.resolve('src/layouts/Admin/index.js'), // default: undefined
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'DSF.com Content Manager',
        includeRobots: false,
      },
    },
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
            src: `/static/logos/logo-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/static/logos/logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/static/logos/logo-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
