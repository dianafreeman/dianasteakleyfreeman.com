import React from "react";
import LandingPage from "../../../pages/index"

export default {
  title: "Pages/LandingPage",
  component: LandingPage,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

export const Main = ({ showStats, meshSize, modelText, ...restArgs }) => {
  return <LandingPage {...restArgs} />;
};

Main.args = {};
