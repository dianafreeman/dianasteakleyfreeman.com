import React from "react";

import PostListing from "./PostListing";

export default function ListingPage({ pageContext, data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return <PostListing pageContext={pageContext} postEdges={postEdges} />;
}
