import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { MeshDistortMaterial, Center, useTurntable } from '@react-three/drei';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/core';
import { useDrag } from '@use-gesture/react';
import Dosis from '@assets/fonts/3d/Dosis_Bold.json';

import useTheme from '@hooks/useTheme';

const AnimatedMaterial = a(MeshDistortMaterial);

function FloatingMesh() {
  const mesh = useRef();
  const group = useRef();

  const { springs, setHovered, setDarkMode, setDown, colors } = useTheme();

  const [font] = useState(new THREE.FontLoader().parse(Dosis));
  const textOptions = {
    font,
    size: 20,
    height: 4,
    curveSegments: 40,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.2,
    bevelSegments: 12,
  };

  const { wobble, env, coat } = springs;
  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.elapsedTime);
    mesh.current.geometry.center();
  });

  return (
    <a.group ref={group}>
      <a.mesh
        ref={mesh}
        scale={wobble}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setDown(true)}
        onPointerUp={() => {
          setDown(false);
          setDarkMode((isDark) => !isDark);
        }}
      >
        <textBufferGeometry attach="geometry" args={['D', textOptions]} />
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
    </a.group>
  );
}

export default FloatingMesh;
