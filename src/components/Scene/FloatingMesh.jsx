import React, { useContext, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SceneContext } from './SceneProvider';
import { MeshDistortMaterial, useHelper, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/core';
import Dosis from '@assets/fonts/Dosis_Bold.json';

const AnimatedMaterial = a(MeshDistortMaterial);

function FloatingMesh() {
  const mesh = useRef();
  const { hovered, setHovered, down, darkMode, setDown } =
    useContext(SceneContext);

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

  return (
    <a.mesh
      ref={mesh}
      scale={wobble}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => {
        setDown(false);
        // Toggle mode between dark and bright
        // toggleMode();
        // setBg({
        //   background: !mode ? '#202020' : '#f0f0f0',
        //   fill: !mode ? '#f0f0f0' : '#202020',
        // });
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
