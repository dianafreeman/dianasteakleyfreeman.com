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
import useTheme from '@hooks/useTheme';
import useLayout from '@hooks/useLayout';
import Lights from './Lights';

function Stage({ children, ...rest }) {
  const { colors } = useTheme();
  // const { colorSprings } = useLayout();
  useFrame(({ scene }) => {
    {
      const near = 40;
      const far = 75;
      const color = colors.background; //colors.background || 'lightblue';
      scene.fog = new THREE.Fog(color, near, far);
    }
  });
  return (
    <group {...rest}>
      <Lights />
      <Environment preset="warehouse" />
      {children}
    </group>
  );
}

function Scene({ children, canvasProps, cameraProps, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  return (
    <Suspense fallback={null}>
      <Canvas
        concurrent
        colorManagement
        shadowMap
        camera={cameraProps}
        {...canvasProps}
        {...rest}
      >
        <ContextBridge>
          <Stage children={children} />
        </ContextBridge>
      </Canvas>
    </Suspense>
  );
}
export default Scene;
