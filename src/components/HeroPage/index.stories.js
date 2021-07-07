import React from "react";
import { Stats, ContactShadows, OrbitControls } from "@react-three/drei";
import HeroPage from ".";

export default {
  title: "Components/HeroPage",
  component: HeroPage,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

export const Landing = ({ showStats, meshSize, modelText, ...restArgs }) => {
  return <HeroPage {...restArgs} />;
};

Landing.args = {};
