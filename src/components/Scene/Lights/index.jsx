import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import useLayout from "@project/hooks/useLayout";
import useTheme from "@project/hooks/useTheme";

const Lights = () => {
  const light = useRef();
  const { springs } = useLayout();
  const { colors } = useTheme();

  useFrame((state) => {
    light.current.position.y = state.mouse.y * 20;
    light.current.position.x = state.mouse.x * 20;
  });
  return (
    <>
      <a.ambientLight intensity={springs.ambient} />
      <a.pointLight
        ref={light}
        intensity={springs.env}
        color={colors.pointLight}
      />
    </>
  );
};

export default Lights;
