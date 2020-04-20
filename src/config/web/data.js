const data = {
  pathPrefix: '/',
  siteTitle: 'Diana M Steakley-Freeman',
  siteTitleAlt: 'Diana M ',
  siteTitleShort: 'DMSF ',
  siteHeadline: 'Diana M Steakley-Freeman | Coder. Creator. Communicator.',
  siteUrl: 'https://dianasteakleyfreeman.com', //  No trailing slash!
  siteLanguage: 'EN',
  siteLogo: '/logo.png', // Used for SEO and manifest
  author: 'Diana M. Steakley-Freeman', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@dianasfreeman', // Twitter Username
  ogSiteName: 'dsfdevelopment', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',
};

const realPrefix = data.pathPrefix === '/' ? '' : data.pathPrefix;
const homeURL = `${data.siteUrl}${realPrefix}`;
const image = `${homeURL}${data.siteLogo}`;

const schemaOrgWebPage = {
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  url: homeURL,
  headline: data.siteHeadline,
  inLanguage: 'en',
  mainEntityOfPage: homeURL,
  description: data.siteDescription,
  name: data.siteTitle,
  author: {
    '@type': 'Person',
    name: data.author,
  },
  copyrightHolder: {
    '@type': 'Person',
    name: data.author,
  },
  copyrightYear: '2020',
  creator: {
    '@type': 'Person',
    name: data.author,
  },
  publisher: {
    '@type': 'Person',
    name: data.author,
  },
  datePublished: '2019-01-17',
  image: {
    '@type': 'ImageObject',
    url: image,
  },
};

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
];

const breadcrumb = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  description: 'Breadcrumbs list',
  name: 'Breadcrumbs',
  itemListElement,
};

module.exports = { data, schemaOrgWebPage, breadcrumb };
