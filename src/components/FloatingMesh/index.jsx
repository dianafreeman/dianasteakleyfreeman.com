import * as THREE from 'three';
import React, { useContext, useRef, useEffect } from 'react';
import { MeshDistortMaterial, Center, useAspect } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/core';
import { useDrag } from '@use-gesture/react';
import Dosis from '@assets/fonts/3d/Dosis_Bold.json';

import useTheme from '@hooks/useTheme';

const AnimatedMaterial = a(MeshDistortMaterial);
function FloatingMesh() {
  const mesh = useRef();
  const group = useRef();

  const { springs, hovered, setHovered, setDarkMode, setDown, colors } =
    useTheme();

  // const rotSpeed = 0.12;

  // FLOATING MESH aniamtion
  // This is frame - based animation, useFrame subscribes the component to the render - loop
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.x = THREE.MathUtils.lerp(
        mesh.current.position.x / 2,
        hovered ? state.mouse.x * 10 : 0,
        0.1,
      );

      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y / 2,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y * 10 : 0),
        0.1,
      );
    }
  });

  const font = new THREE.FontLoader().parse(Dosis);
  const textOptions = {
    font,
    size: 5,
    height: 0.75,
    curveSegments: 40,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.2,
    bevelSegments: 12,
  };

  const { wobble, env, coat } = springs;

  return (
    <Flex
      positionY={2}
      flexDirection="column"
      size={[1, 1, 0]}
      justifyContent="center"
      alignContent="top"
    >
      <Box width="50%">
        <a.mesh
          ref={mesh}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            console.log('up!');
            setDown(false);
            // Toggle mode between dark and bright
            setDarkMode((isDark) => !isDark);
          }}
        >
          <textBufferGeometry attach="geometry" args={['D', textOptions]} />;
          <AnimatedMaterial
            attach="material"
            color={colors.model}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
            distort={0}
          />
        </a.mesh>
      </Box>
    </Flex>
  );
}

export default FloatingMesh;
