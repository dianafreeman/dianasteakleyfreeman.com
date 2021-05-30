import React, { useState } from "react";
import { Helmet } from "react-helmet";
import urljoin from "url-join";

import config from "@project/config/siteMeta";

/**
 * AHH I hate this.
 *
 * TODO
 *
 * [x] Remove `moment`
 *  - Remove `urlJoin`
 *  - refactor each of these methods
 *  - Create tests for each of these methods
 *
 * WTF is postSEO?
 */

// function renderSchemaOrgTags() {}
// function renderOpenGraphTags() {}
// function renderTwitterCardTags() {}

function SEO({ postNode, postPath, postSEO }) {
  const [title] = useState(config.siteTitle);
  const [description] = useState(config.siteDescription);

  const postURL = `${config.siteUrl}${config.pathPrefix}${postPath}`;
  let image = config.siteLogo;

  const getImagePath = (imageURI) => {
    if (
      !imageURI?.match(
        `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
      )
    )
      return urljoin(config.siteUrl, config.pathPrefix, imageURI);
    return imageURI;
  };

  const getPublicationDate = () => {
    if (!postNode?.frontmatter?.date) return null;
    // DEV NOTE: test this, not sure it still works....
    return postNode.frontmatter.date;
  };

  image = getImagePath(image);
  const datePublished = getPublicationDate();

  const authorJSONLD = {
    "@type": "Person",
    name: config.userName,
    email: config.userEmail,
    address: config.userLocation,
  };

  const logoJSONLD = {
    "@type": "ImageObject",
    url: getImagePath(config.siteLogo),
  };

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      "@project/context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        "@project/context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@project/context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt || "",
        headline: title,
        image: { "@type": "ImageObject", url: image },
        author: authorJSONLD,
        publisher: {
          ...authorJSONLD,
          "@type": "Organization",
          logo: logoJSONLD,
        },
        datePublished,
        description,
      }
    );
  }

  return (
    <Helmet>
      {/* General tags */}
      <title>{config.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;