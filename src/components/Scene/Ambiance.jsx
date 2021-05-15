import React, { useContext, useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import useTheme from '../../hooks/useTheme';

const Ambiance = () => {
  const light = useRef();
  // debugger;
  const { colors, springs } = useTheme();
  debugger;
  useFrame((state) => {
    light.current.position.y = state.mouse.y * 20;
    light.current.position.x = state.mouse.x * 20;
  });

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 10]}
      near={0.1}
      far={1000}
      fov={75}
    >
      <a.ambientLight intensity={springs.ambient} />
      <a.pointLight ref={light} intensity={springs.env} />
    </PerspectiveCamera>
  );
};

export default Ambiance;
