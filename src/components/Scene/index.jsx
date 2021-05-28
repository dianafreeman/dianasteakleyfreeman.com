import React, { Suspense } from 'react';
import { useThree, Canvas } from '@react-three/fiber';
import {
  Environment,
  useContextBridge,
  ContactShadows,
} from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';

import ThemeContext from '@context/ThemeContext';
import LayoutContext from '@context/LayoutContext';

import FloatingMesh from './Meshes/FloatingMesh';
import Lights from './Lights';

function Stage({ children, ...rest }) {
  const { viewport } = useThree();

  const flexWidth = viewport.width * 0.2;
  const flexHeight = viewport.height * 0.2;

  return (
    <group {...rest}>
      <Lights />
      <Flex
        position={[0, 0, 0]}
        justifyContent="center"
        flexDirection="column"
        size={[flexWidth, flexHeight, 0]}
      >
        <Box my={2}>
          <FloatingMesh />
        </Box>
        <Box>
          <ContactShadows
            rotation-x={Math.PI / 2}
            opacity={0.75}
            position={[0, 0, 0]}
            width={30}
            height={30}
            near={0.1}
            blur={3} // Amount of blur (default=1)
            far={40} // Focal distance (default=10)
            resolution={256} // Rendertarget resolution (default=256)
          />
        </Box>
      </Flex>
      <Environment preset="warehouse" />
    </group>
  );
}

function Scene({ canvasProps, cameraProps, ...rest }) {
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
          <Stage />
        </ContextBridge>
      </Canvas>
    </Suspense>
  );
}
export default Scene;
