const tailwind = require('../tailwind')


const config = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  siteTitle: 'Diana Steakley-Freeman', // Navigation and Site Title
  siteTitleAlt: 'Diana', // Alternative Site title for SEO
  siteTitleShort: 'Diana', // short_name for manifest
  siteHeadline: 'Coder. Creator. Communicator. | Full Stack Web Developer', // Headline for schema.org JSONLD
  siteUrl: 'https://dianasteakleyfreeman.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Diana M. Steakley-Freeman', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@dianasfreeman', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}

const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
const homeURL = `${config.siteUrl}${realPrefix}`
const image = `${homeURL}${config.siteLogo}`

const schemaOrgWebPage = {
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  url: homeURL,
  headline: config.siteHeadline,
  inLanguage: 'en',
  mainEntityOfPage: homeURL,
  description: config.siteDescription,
  name: config.siteTitle,
  author: {
    '@type': 'Person',
    name: config.author,
  },
  copyrightHolder: {
    '@type': 'Person',
    name: config.author,
  },
  copyrightYear: '2019',
  creator: {
    '@type': 'Person',
    name: config.author,
  },
  publisher: {
    '@type': 'Person',
    name: config.author,
  },
  datePublished: '2019-01-17',
  image: {
    '@type': 'ImageObject',
    url: image,
  },
}

// Initial breadcrumb list

const itemListElement = [
  {
    '@type': 'ListItem',
    item: {
      '@id': homeURL,
      name: 'Homepage',
    },
    position: 1,
  },
]

const breadcrumb = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  description: 'Breadcrumbs list',
  name: 'Breadcrumbs',
  itemListElement,
}

module.exports = { config, schemaOrgWebPage, breadcrumb }
