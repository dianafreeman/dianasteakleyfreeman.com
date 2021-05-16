import React, { Suspense, useContext, useEffect, useRef } from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import {
  Environment,
  useContextBridge,
  ContactShadows,
  OrbitControls,
  Center,
} from '@react-three/drei';

import ThemeContext from '@context/ThemeContext';

function Canvas({ children, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext);

  return (
    <ThreeCanvas {...rest}>
      <ContextBridge>
        {children}
        <Environment preset="warehouse" />
      </ContextBridge>
    </ThreeCanvas>
  );
}
export default Canvas;
