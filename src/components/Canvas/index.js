import React, { Suspense, useContext, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  useContextBridge,
  ContactShadows,
  OrbitControls,
  Center,
} from '@react-three/drei';

import ThemeContext from '@context/ThemeContext';

function Stage({ children }) {
  const ContextBridge = useContextBridge(ThemeContext);
  // const c = useContext(ThemeContext);
  debugger;

  return (
    <Canvas>
      <ContextBridge>
        {children}
        <Environment preset="warehouse" />
      </ContextBridge>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}
export default Stage;
