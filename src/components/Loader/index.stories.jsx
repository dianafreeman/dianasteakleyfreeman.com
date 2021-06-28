import React from "react";
import Loader from ".";

export default {
  title: "Components/Loader",
  component: Loader,
};

export const Main = ({ ...args }) => {
  return <Loader {...args} />;
};

Main.args = {
  active: true,
  progress: 50,
};
