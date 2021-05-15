import * as THREE from 'three';
import React, { useContext, useRef, useEffect } from 'react';
import { MeshDistortMaterial, useHelper, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/core';

import Dosis from '@assets/fonts/Dosis_Bold.json';

import debounce from '@hooks/useDebounce/debounce';
import useSceneLayout from './useSceneLayout';

const AnimatedMaterial = a(MeshDistortMaterial);

function FloatingMesh() {
  const mesh = useRef();
  const { hovered, setHovered, springs, setDown, toggleDarkMode } =
    useSceneLayout();

  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.x = THREE.MathUtils.lerp(
        mesh.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.1,
      );
      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
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

  const { wobble, color, env, coat } = springs;
  return (
    <a.mesh
      ref={mesh}
      scale={wobble}
      onPointerOver={() => debounce(setHovered(true))}
      onPointerOut={() => debounce(setHovered(false))}
      onPointerDown={() => debounce(setDown(true))}
      onPointerUp={() => {
        setDown(false);
        // Toggle mode between dark and bright
        toggleDarkMode();
      }}
    >
      <textBufferGeometry attach="geometry" args={['D', textOptions]} />;
      <AnimatedMaterial
        attach="material"
        color={color}
        envMapIntensity={env}
        clearcoat={coat}
        clearcoatRoughness={0}
        metalness={0.1}
        distort={0}
      />
    </a.mesh>
  );
}

export default FloatingMesh;
