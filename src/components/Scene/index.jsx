import React, { Suspense, useEffect, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Center,
  ContactShadows,
  OrbitControls,
} from '@react-three/drei';

import useSceneLayout from './useSceneLayout';

import Ambiance from './Ambiance';
import FloatingMesh from './FloatingMesh';

function Scene() {
  const { hovered } = useSceneLayout();

  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>',
        )}'), auto`;
  }, [hovered]);

  return (
    <Suspense fallback={null}>
      <Canvas dpr={[1, 2]}>
        <Ambiance />
        <Center alignTop>
          <FloatingMesh />
        </Center>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          opacity={1}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </Suspense>
  );
}
export default Scene;
