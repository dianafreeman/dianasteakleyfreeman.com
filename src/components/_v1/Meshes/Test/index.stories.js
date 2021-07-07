import React, { useRef, useState, Suspense } from "react";
import { Stats, OrbitControls, useContextBridge } from "@react-three/drei";

import Test from ".";

export default {
  title: "Components/Test",
  component: Test,
  argTypes: {
    showStats: { control: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#2b2b2b" }],
    },
  },
};

const Template = ({ showStats, index, height }) => {
  return (
    <div style={{ height: `${height.value}${height.unit}` }}>
      {showStats && <Stats />}
      <Test index={index} />
    </div>
  );
};

export const Model = Template.bind({});
Model.args = {
  showStats: true,
  index: 0,
  height: { value: 100, unit: "vh" },
  background: "dark",
  // width: { value: 100, unit: "vw" },
  // colorManagement: true,
  // shadowMap: true,
  // gl: { alpha: false },
  // cameraProps: { position: [0, 0, 2], zoom: 1 },
};
