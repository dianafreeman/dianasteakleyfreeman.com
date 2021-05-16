import React, { useContext, useRef, useEffect } from 'react';
import { PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import useTheme from '../../hooks/useTheme';

const Lights = () => {
  const light = useRef();
  const { colors, springs } = useTheme();
  // const { size } = useThree();

  const { size } = useThree();

  const conversionScale = 0.01;
  const scaledSize = {
    width: size.width * conversionScale,
    height: size.height * conversionScale,
  };
  const xOffset = scaledSize.width / 2;

  useFrame((state) => {
    light.current.position.y = state.mouse.y * 20;
    light.current.position.x = state.mouse.x * 20;

    state.camera.lookAt((state.size.width * conversionScale) / 2, 0, 0);
    state.camera.position.set((state.size.width * conversionScale) / 2, 0, 20);
    state.camera.updateProjectionMatrix();
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
