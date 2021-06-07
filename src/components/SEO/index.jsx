import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import config from "@project/config/siteConfig";
import SchemaOrgTags from "./SchemaOrgTags";

/**
 * AHH I hate this.
 *
 * TODO
 *
 * [x] Remove `moment`
 * [x] Remove `urlJoin`
 *  - refactor each of these methods
 *  - Create tests for each of these methods
 *
 * WTF is postSEO?
 */

function SEO({ postNode, postPath, postSEO }) {
  const [title] = useState(config.siteTitle);
  const [description] = useState(config.siteDescription);

  // const postURL = `${config.siteUrl}${config.pathPrefix}${postPath}`;
  const image = config.siteLogo;

  return (
    <Helmet>
      {/* General tags */}
      <title>{config.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* TODO: */}
      {/* <SchemaOrgTags postNode={postNode} /> */}

      {/* OpenGraph tags */}
      <meta property="og:url" content={config.siteUrl} />
      {/* TODO: */}
      {/* {postSEO ? <meta property="og:type" content="article" /> : null} */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.authorTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;

SEO.propTypes = {
  postNode: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
