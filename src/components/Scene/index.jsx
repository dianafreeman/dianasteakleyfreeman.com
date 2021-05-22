import * as THREE from 'three';
import React, { Suspense, useContext, useEffect, useRef } from 'react';
import {
  Environment,
  useContextBridge,
  ContactShadows,
  Html,
  Center,
} from '@react-three/drei';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import ThemeContext from '@context/ThemeContext';
import LayoutContext from '@context/LayoutContext';

import Lights from './Lights';

function Stage({ children, ...rest }) {
  return (
    <group {...rest}>
      {children}
      <Lights />
      <Environment preset="warehouse" />
    </group>
  );
}

function Scene({ children, canvasProps, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  return (
    <Canvas
      concurrent
      colorManagement
      shadowMap
      camera={{ position: [0, 5, 40], zoom: 1 }}
      {...canvasProps}
    >
      <ContextBridge>
        <Stage children={children} {...rest} />
      </ContextBridge>
    </Canvas>
  );
}
export default Scene;
