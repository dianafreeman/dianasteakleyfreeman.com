const urljoin = require('url-join');
const path = require('path');
const config = require('./src/config/siteConfig');

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
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/Layout/index`),
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
          '@theme': './theme',
          '@hooks': './hooks',
          '@assets': './assets',
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-nprogress`,
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
        modulePath: path.resolve('src/netlifycms/index.js'), // default: undefined
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
        includeRobots: false,
      },
    },
  ],
};
