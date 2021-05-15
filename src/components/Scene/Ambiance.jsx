import React, { useContext, useRef, useEffect } from 'react';
import { SceneContext } from './SceneProvider';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/core';

const Ambiance = () => {
  const light = useRef();
  const { down, darkMode, hovered } = useContext(SceneContext);

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1 : hovered ? 1.1 : 1,
      coat: darkMode && !hovered ? 0.04 : 1,
      ambient: darkMode && !hovered ? 1.5 : 0.5,
      env: darkMode && !hovered ? 0.4 : 1,
      color: hovered ? '#E8B059' : darkMode ? '#202020' : 'gray',
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [darkMode, hovered, down],
  );

  useFrame((state) => {
    light.current.position.y = state.mouse.y * 20;
    light.current.position.x = state.mouse.x * 20;
  });

  return (
    <PerspectiveCamera makeDefault position={[4, 0, 10]} fov={75}>
      <a.ambientLight intensity={ambient} />
      <a.pointLight ref={light} intensity={env} color="#F8C069" />
    </PerspectiveCamera>
  );
};

export default Ambiance;
