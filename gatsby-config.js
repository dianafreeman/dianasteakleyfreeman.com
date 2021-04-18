const urljoin = require('url-join');
const path = require('path');
const config = require('./src/config/siteConfig');

// Make sure that pathPrefix is not empty
const validatedPathPrefix = config.pathPrefix === '' ? '/' : config.pathPrefix;

module.exports = {
  pathPrefix: validatedPathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix,
      )}/logos/logo-512.png`,
      image_url: `${validSiteUrl}/logos/logo-512.png`,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix,
      )}/logos/logo-512.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',

    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index`),
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
    'gatsby-plugin-offline',
  ],
};
