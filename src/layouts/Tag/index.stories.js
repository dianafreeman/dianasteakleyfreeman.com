import React from "react";
import Tag from ".";
import stub from "./stub.json";

export const view = (args) => {
  return <Tag {...args} />;
};

export default {
  title: "Templates/Tag",
  component: Tag,
  args: {
    postEdges: stub.data.allMarkdownRemark.edges,
    pageContext: { tag: "tech" },
  },
};
