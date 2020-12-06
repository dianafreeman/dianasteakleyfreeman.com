const config = {
  siteTitle: 'Diana M Steakley-Freeman', // Site title.
  siteTitleShort: 'DSF.com', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt:
    'Digital Policy Buff, User Rights Enthusiast. Former Scientist, Forever Experimenting', // Alternative site title for SEO.
  siteLogo: '/logos/logo-512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://dianasteakleyfreeman.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Coder, Creator, Communicator | Digital Policy Buff, User Rights Enthusiast | Former Scientist, Forever Experimenting.  I'm Diana, and this is my corner of the internet.", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Diana Steakley-Freeman | RSS feed', // Title of the RSS feed
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: 'Diana SF', // Username to display in the author segment.
  userEmail: 'diana@dianasteakleyfreeman.com', // Email used for RSS feed's author segment
  userTwitter: 'dianasfreeman', // Optionally renders "Follow Me" in the AuthorInfo segment.
  userLocation: 'USA', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    'Diana is a user rights advocate, a digital policy buff, a social scientist, and a software engineer (in that order)', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/Vagr9K/gatsby-advanced-starter',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/Vagr9K',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:vagr9k@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020. Diana M Steakley-Freeman', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};

/* VALIDATION */

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
