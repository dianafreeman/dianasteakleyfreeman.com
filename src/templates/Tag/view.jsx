import React from 'react';
import { Helmet } from 'react-helmet';
import PostListing from '../../components/PostListing';
import config from '@config/siteConfig';

export default function TagView({ tag, postEdges }) {
  return (
    <>
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <PostListing postEdges={postEdges} />
    </>
  );
}
