import React from 'react';

import DisplayCard from '../DisplayCard';
import POSTS_STUB from './index.stub.json';

function PostListing({ postEdges = POSTS_STUB }) {
  return (
    <>
      {postEdges.map((item) => (
        <DisplayCard post={item.node} />
      ))}
    </>
  );
}

export default PostListing;
