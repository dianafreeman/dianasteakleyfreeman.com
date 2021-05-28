import * as THREE from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { ContactShadows, Plane } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import useTheme from '@project/hooks/useTheme';
import useLayout from '@project/hooks/useLayout';

function Floor({ position, ...rest }) {
  const { scene } = useThree();
  const { darkMode, colors } = useTheme();
  const { colorSprings } = useLayout();

  return (
    <>
      <Plane
        position={position}
        rotation={[Math.PI / 2, 0, THREE.MathUtils.degToRad(90)]}
        args={[100, 100, 30, 30]}
        {...rest}
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
