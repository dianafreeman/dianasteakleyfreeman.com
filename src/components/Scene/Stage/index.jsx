import React from 'react';
import { useThree } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';

import loadable from '@loadable/component';

const FloatingMesh = loadable(() => import('../Meshes/FloatingMesh'));
const Lights = loadable(() => import('../Lights'));

function Stage({ children, modelText, ...rest }) {
  const { viewport, size } = useThree();
  const meshSize = 2;

  return (
    <group {...rest}>
      <Lights />
      <FloatingMesh size={meshSize} position={[0, 0.5, 0]} string={modelText} />
      <ContactShadows
        rotation-x={Math.PI / 2}
        opacity={0.75}
        position={[0, -1, 0]}
        width={5}
        height={5}
        near={0.1}
        blur={5} // Amount of blur (default=1)
        far={4} // Focal distance (default=10)
        resolution={10} // Rendertarget resolution (default=256)
      />
      <Environment preset="warehouse" />
    </group>
  );
}

export default Stage;
