import React from 'react';
import { Helmet } from 'react-helmet';
import PostListing from '../../components/PostListing';
import config from '@config/siteConfig';

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