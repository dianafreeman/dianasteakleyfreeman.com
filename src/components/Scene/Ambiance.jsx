import React, { useContext, useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import colors from '@config/colors';
import useSceneLayout from './useSceneLayout';

const Ambiance = () => {
  const light = useRef();
  const {
    springs: { env, ambient },
  } = useSceneLayout();

  useFrame((state) => {
    light.current.position.y = state.mouse.y * 20;
    light.current.position.x = state.mouse.x * 20;
  });

  return (
    <PerspectiveCamera makeDefault position={[4, 0, 10]} fov={75}>
      <a.ambientLight intensity={ambient} />
      <a.pointLight ref={light} intensity={env} color={colors.pointLight} />
    </PerspectiveCamera>
  );
};

export default Ambiance;
