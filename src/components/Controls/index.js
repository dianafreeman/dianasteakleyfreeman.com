import React from 'react';
import { OrbitControls } from '@react-three/drei';

function Controls() {
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default Controls;
