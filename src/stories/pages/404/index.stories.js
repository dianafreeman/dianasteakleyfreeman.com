import React from "react";
import NotFoundPage from "../../../pages/404"

export default {
  title: "Pages/404 Not Found",
  component: NotFoundPage,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

export const Landing = ({ showStats, meshSize, modelText, ...restArgs }) => {
  return <NotFoundPage {...restArgs} />;
};

Landing.args = {};
