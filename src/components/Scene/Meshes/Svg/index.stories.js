import React, { useRef } from "react";
import { Stats, OrbitControls } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import Lights from "../../Lights";
import Scene from "../..";
import SvgModel from ".";

export default {
  title: "Components/SvgModel",
  component: SvgModel,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

const Template = ({ showStats, height, ...props }) => {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.elapsedTime);
  });
  return (
    <div style={{ height: `${height.value}${height.unit}` }}>
      <Scene>
        {showStats && <Stats />}
        <Lights />
        <a.group ref={group} {...props}>
          <OrbitControls />
          <SvgModel />
        </a.group>
        );
      </Scene>
    </div>
  );
};

export const Model = Template.bind({});
Model.args = {
  string: "Hi!",
  showStats: true,
  height: { value: 100, unit: "vh" },
};
