import React from "react";
import Listing from ".";
import stub from "./stub.json";

export const view = (args) => {
  return <Listing {...args} />;
};

export default {
  title: "Templates/Listing",
  component: Listing,
  args: {
    postEdges: stub.data.allMarkdownRemark.edges,
    pageContext: { currentPageNum: 1, pageCount: 5 },
  },
};
