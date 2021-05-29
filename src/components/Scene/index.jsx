import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useContextBridge } from '@react-three/drei';

import loadable from '@loadable/component';

import ThemeContext from '@project/context/ThemeContext';
import LayoutContext from '@project/context/LayoutContext';

const Stage = loadable(() => import('./Stage'));

function Scene({ canvasProps, cameraProps, modelText, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  const isSSR = typeof window === 'undefined';
  return (
    !isSSR && (
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
            <Stage modelText={modelText} />
          </ContextBridge>
        </Canvas>
      </Suspense>
    )
  );
}
export default Scene;
