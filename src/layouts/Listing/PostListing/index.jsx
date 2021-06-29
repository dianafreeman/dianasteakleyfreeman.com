import React from "react";

import POSTS_STUB from "./index.stub.json";

function PostListing({ postEdges = POSTS_STUB }) {
  return (
    <>
      {postEdges.map((item) => (
        <div>
          <pre>{JSON.stringify(item.node, null, 2)}</pre>
        </div>
      ))}
    </>
  );
}

export default PostListing;
