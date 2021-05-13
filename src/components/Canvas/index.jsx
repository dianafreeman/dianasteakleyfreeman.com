import React from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';

function Canvas({ children, ...rest }) {
  // TODO
  // Create dev controls with context and provider
  return (
      <ThreeCanvas {...rest}>{children}</ThreeCanvas>
  );
}

export default Canvas;
