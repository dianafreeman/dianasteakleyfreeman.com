import React from 'react';
import { Helmet } from 'react-helmet';
import config from '@config/siteConfig';
import PostListing from '../../components/PostListing';

export default function CategoryView({ category, postEdges }) {
  const helmetProps = {
    title: `Posts in category "${category}" | ${config.siteTitle}`,
  };
  return (
    <>
      <Helmet {...helmetProps} />
      <PostListing postEdges={postEdges} />
    </>
  );
}
