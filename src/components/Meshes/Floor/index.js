import * as THREE from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { ContactShadows, Plane } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import useTheme from '@hooks/useTheme';
import useLayout from '@hooks/useLayout';

function Floor({ position }) {
  const { scene } = useThree();
  const { darkMode } = useTheme();
  const { colors } = useLayout();

  return (
    <>
      <ContactShadows
        rotation-x={Math.PI / 2}
        opacity={0.75}
        position={[0, 0.1, 0]}
        width={30}
        height={30}
        near={0.1}
        blur={2} // Amount of blur (default=1)
        far={10} // Focal distance (default=10)
        resolution={256} // Rendertarget resolution (default=256)
      />
      <Plane
        position={position}
        rotation={[Math.PI / 2, 0, THREE.MathUtils.degToRad(90)]}
        args={[100, 100, 30, 30]}
      >
        <meshBasicMaterial
          color={colors.floor}
          wireframe={darkMode}
          side={THREE.DoubleSide}
        />
      </Plane>
    </>
  );
}

export default Floor;
