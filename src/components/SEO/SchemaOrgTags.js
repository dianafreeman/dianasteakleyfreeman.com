import React, { useState } from "react";
import { Helmet } from "react-helmet";

import config from "@project/config/siteMeta";
import getPublicationDate from "./utils/getPublicationDate";
import getImagePath from "./utils/getImagePath";

function SchemaOrgTags({ title }) {
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

  const blogURL = `${config.siteUrl}${config.pathPrefix}`;

  const schemaOrgJSONLD = [
    {
      "@project/context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
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
    },
  ];
  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD)}
    </script>
  );
}

export default SchemaOrgTags;
