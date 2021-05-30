import { FontLoader } from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import Dosis from '@project/assets/fonts/3d/Dosis_Bold.json';

import useLayout from '@project/hooks/useLayout';

function FloatingMesh({ string, size, ...props }) {
  const mesh = useRef();
  const group = useRef();

  const { springs, setHovered, setDown, colorSprings } = useLayout();

  const [font] = useState(new FontLoader().parse(Dosis));

  const textOptions = {
    font,
    size: 2,
    height: 0.25,
    curveSegments: 40,
    bevelEnabled: true,
    bevelThickness: 0.25,
    bevelSize: 0.09,
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
        <a.meshPhysicalMaterial
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
