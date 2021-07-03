import React, { useRef, useState, Suspense } from "react";
import { Stats, OrbitControls, useContextBridge } from "@react-three/drei";
import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";
import { Canvas } from "@react-three/fiber";
import Lights from "../../Lights";
import Scene from "../..";
import Test from ".";

export default {
  title: "Components/Test",
  component: Test,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

const Template = ({ showStats, index, height }) => {
  return (
    <div style={{ height: `${height.value}${height.unit}` }}>
      <Test index={index} />
    </div>
  );
};

export const Model = Template.bind({});
Model.args = {
  showStats: true,
  index: 0,
  height: { value: 100, unit: "vh" },
  // width: { value: 100, unit: "vw" },
  // colorManagement: true,
  // shadowMap: true,
  // gl: { alpha: false },
  // cameraProps: { position: [0, 0, 2], zoom: 1 },
};
