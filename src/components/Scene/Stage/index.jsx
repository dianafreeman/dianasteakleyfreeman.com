import React from 'react';
import { useThree } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';

import loadable from '@loadable/component';

const FloatingMesh = loadable(() => import('../Meshes/FloatingMesh'));
const Lights = loadable(() => import('../Lights'));

function Stage({ children, modelText, ...rest }) {
  const { viewport, size } = useThree();

  const yOffset = viewport.height / 10;
  const meshSize = 10 + size.width * 0.01;

  return (
    <group {...rest}>
      <Lights />
      <FloatingMesh size={meshSize} position={[0, 0, 0]} string={modelText} />
      <ContactShadows
        rotation-x={Math.PI / 2}
        opacity={0.75}
        position={[0, -(yOffset * 2), 0]}
        width={30}
        height={30}
        near={0.1}
        blur={3} // Amount of blur (default=1)
        far={40} // Focal distance (default=10)
        resolution={157} // Rendertarget resolution (default=256)
      />

      <Environment preset="warehouse" />
    </group>
  );
}

export default Stage;
