import React from 'react';
import { MathUtils, MultiplyOperation } from 'three';
import { Reflector, useTexture } from '@react-three/drei';
import FlatText from './FlatText';
import BlockText from './BlockText';

import Normal from '../../assets/textures/stageFloor/NormalMap.jpg';
import Color from '../../assets/textures/stageFloor/ColorMap.jpg';

const deg = (val) => MathUtils.degToRad(val);

function Ground() {
  const [floor, normal] = useTexture([
     Color, Color
  ]);
  return (
    <Reflector
      resolution={512}
      args={[100, 100]}
      mirror={0.2}
      mixBlur={2}
      mixStrength={1}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[400, 100]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[1, 1]}
          {...props}
        />
      )}
    </Reflector>
  );
}
function Models(props) {
  return (
    <>
      <group {...props}>
        {/* <FlatText /> */}
        <BlockText
          word="Hi! I'm Diana."
          color="#fff"
          position={[0, 0, 0]}
          // materialProps={{ roughness: 0.5, metalness: 1 }}
          castShadow
        />
      </group>

      {/* <Ground /> */}
    </>
  );
}
export default Models;
