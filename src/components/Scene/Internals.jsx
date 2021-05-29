import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useContextBridge } from '@react-three/drei';

import loadable from '@loadable/component';

import ThemeContext from '@project/context/ThemeContext';
import LayoutContext from '@project/context/LayoutContext';

const Stage = loadable(() => import('./Stage'));

function SceneInternals({ canvasProps, cameraProps, modelText, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  return (
    <Canvas
      colorManagement
      shadowMap
      camera={cameraProps}
      {...canvasProps}
      {...rest}
    >
      <ContextBridge>
        <Stage modelText={modelText} />
      </ContextBridge>
    </Canvas>
  );
}
export default SceneInternals;
