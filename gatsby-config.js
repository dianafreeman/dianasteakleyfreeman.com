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
    rssMetadata: {
      site_url: validSiteUrl,
      feed_url: urljoin(validSiteUrl, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
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
        root: './src', // <- will be used as a root dir
        aliases: {
          '@config': './config', // <- will become ./src/config
          '@hooks': './hooks',
          '@assets': './assets',
          '@fonts': './assets/fonts',
          '@context': './context',
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-nprogress`,
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
        htmlTitle: 'Content Manager',
        includeRobots: false,
      },
    },
  ],
};
