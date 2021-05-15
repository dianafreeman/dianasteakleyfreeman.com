import React, { Suspense, useContext, useEffect, useRef } from 'react';
import {
  Environment,
  useContextBridge,
  ContactShadows,
  OrbitControls,
  Center,
} from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';

import ThemeContext from '@context/ThemeContext';
import Canvas from '../Canvas';
import Ambiance from './Ambiance';

function Scene({ children }) {
  const c = useContext(ThemeContext);
  debugger;

  return (
    <Suspense fallback={null}>
      <Canvas>
        <Ambiance />
        {children}
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.1, 0]}
          opacity={1}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Canvas>
    </Suspense>
  );
}
export default Scene;
