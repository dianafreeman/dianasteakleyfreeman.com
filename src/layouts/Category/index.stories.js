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
    pageContext: { category: "Category Name" },
    data: stub.data,
  },
};
