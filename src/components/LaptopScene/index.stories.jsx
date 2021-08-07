import React from "react";
import Scene from ".";

export default {
  title: "Components/Scene",
  component: Scene,
};

export const Main = ({ ...args }) => {
  return <Scene {...args} />;
};

Main.args = {
  active: true,
  progress: 50,
};
