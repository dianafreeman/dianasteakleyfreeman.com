/* eslint-disable */
const config = require('./src/config/web/metadata').data;
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${process.env.NODE_ENV !== 'testing' ? `${__dirname}` : `web`}/src/content/blog`,
        name: `blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${process.env.NODE_ENV !== 'testing' ? `${__dirname}` : `web`}/src/content/projects`,
        name: `project-posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
