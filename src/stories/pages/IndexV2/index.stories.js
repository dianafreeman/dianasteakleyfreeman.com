import React from "react";
import { Stats, ContactShadows, OrbitControls } from "@react-three/drei";
import IndexV2 from ".";

export default {
  title: "Pages/IndexV2",
  component: IndexV2,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

export const Landing = ({ showStats, meshSize, modelText, ...restArgs }) => {
  return <IndexV2 {...restArgs} />;
};

Landing.args = {};
