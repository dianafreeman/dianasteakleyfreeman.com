import React from "react";
import { Stats } from "@react-three/drei";
import Scene from ".";

export default {
  title: "Components/Scene",
  component: Scene,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

const Template = ({ showStats, ...restArgs }) => {
  return (
    <>
      {showStats && <Stats />}
      <Scene {...restArgs} />
    </>
  );
};

export const Model = Template.bind({});
Model.args = {
  modelText: "Hi!",
  showStats: true,
  height: { value: 100, unit: "vh" },
  width: { value: 100, unit: "vw" },
};
