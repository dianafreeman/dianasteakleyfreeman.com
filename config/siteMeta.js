const config = {
  siteTitle: "Diana M Steakley-Freeman", // Site title.
  siteTitleShort: "DSF.com", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt:
    "Software Engineer, Digital Policy Buff, User Rights Enthusiast. Former Scientist, Forever Experimenting", // Alternative site title for SEO.
  siteLogo: "/logos/screenshot.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://dianasteakleyfreeman.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Coder, Creator, Communicator | Digital Policy Buff, User Rights Enthusiast | Former Scientist, Forever Experimenting.  I'm Diana, and this is my corner of the internet.", // Website description used for RSS feeds/meta description tag.
  googleAnalyticsID: "UA-134220362-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: "Diana SF", // Username to display in the author segment.
  userEmail: "diana@dianasteakleyfreeman.com", // Email used for RSS feed's author segment
  userTwitter: "dianasfreeman", // Optionally renders "Follow Me" in the AuthorInfo segment.
  userDescription:
    "Diana is a user rights advocate, a digital policy buff, a social scientist, and a software engineer (in that order)", // User description to display in the author segment.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dianafreeman",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/dianasfreeman",
    },
    {
      label: "Email",
      url: "mailto:diana@dianasteakleyfreeman.com",
    },
  ],
  copyright: "Copyright © 2021. Diana M Steakley-Freeman", // Copyright string for the footer of the website and RSS feed.
  backgroundColor: "#2b2b2b", // Used for setting manifest and progress theme colors.
  themeColor: "#0094f1", // Used for setting manifest background color.
};

/* VALIDATION */

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
