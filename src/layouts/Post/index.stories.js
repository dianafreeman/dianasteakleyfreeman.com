import React from "react";

import PostPage from ".";
import stub from "./stub.json";

export const mainView = (args) => {
  return <PostPage {...args} />;
};

export default {
  title: "Templates/Post",
  component: PostPage,
  args: {
    data: stub.data,
    pageContext: { slug: stub.data.markdownRemark.fields.slug },
  },
};
