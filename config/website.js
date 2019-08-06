const tailwind = require('../tailwind')

module.exports = {
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
