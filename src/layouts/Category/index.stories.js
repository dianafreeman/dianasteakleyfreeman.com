import React from "react";
import CategoryPage from ".";
import stub from "./stub.json";

export const view = (args) => {
  return <CategoryPage {...args} />;
};

export default {
  title: "Templates/Category",
  component: CategoryPage,
  args: {
    category: "Category Name",
    postEdges: stub.data.allMarkdownRemark.edges,
  },
};
