import React from 'react';
import { Helmet } from 'react-helmet';
import config from '@config/siteConfig';
import PostListing from '../../components/PostListing';

export default function TagView({ tag, postEdges }) {
  return (
    <>
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <PostListing postEdges={postEdges} />
    </>
  );
}
