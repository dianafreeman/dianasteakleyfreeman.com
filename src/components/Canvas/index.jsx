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

function Stage({ children, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext);

  return (
    <Canvas {...rest}>
      <ContextBridge>
        {children}
        <Environment preset="warehouse" />
      </ContextBridge>
    </Canvas>
  );
}
export default Stage;
