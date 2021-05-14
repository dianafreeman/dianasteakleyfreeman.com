import React from 'react';
import { MathUtils } from 'three';

import BlockText from './BlockText';

function Models(props) {
  return (
    <group {...props}>
      <BlockText
        word="Diana"
        color="#3f76ff"
        position={[0, 0, 0]}
        materialProps={{ roughness: 0, metalness: 0 }}
        castShadow
      />
    </group>
  );
}
export default Models;
