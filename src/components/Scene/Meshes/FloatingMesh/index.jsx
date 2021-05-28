import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { MeshDistortMaterial, Center, useTurntable } from '@react-three/drei';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/core';
import { useDrag } from '@use-gesture/react';
import Dosis from '@project/assets/fonts/3d/Dosis_Bold.json';

import useTheme from '@project/hooks/useTheme';
import useLayout from '@project/hooks/useLayout';

const AnimatedMaterial = a(MeshDistortMaterial);

function FloatingMesh({ string, props }) {
  const mesh = useRef();
  const group = useRef();

  const { springs, setHovered, setDown, colorSprings } = useLayout();

  const { size: canvasSize } = useThree();

  const [font] = useState(new THREE.FontLoader().parse(Dosis));

  const size = 10 + canvasSize.width * 0.01;
  const textOptions = {
    font,
    size,
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
    <a.group ref={group} {...props}>
      <a.mesh
        ref={mesh}
        scale={wobble}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setDown(true)}
        onPointerUp={() => {
          setDown(false);
          // TODO: reenable when background animation is NOT coming from `main`
          // setDarkMode((isDark) => !isDark);
        }}
      >
        <textBufferGeometry attach="geometry" args={[string, textOptions]} />
        <AnimatedMaterial
          attach="material"
          color={colorSprings.model}
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
