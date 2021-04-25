import React from 'react';
import FlatText from './FlatText';
import BlockText from './BlockText';
import { MathUtils, MultiplyOperation } from 'three';
import { Plane } from '@react-three/drei';

const deg = (val) => MathUtils.degToRad(val);
function Models(props) {
  return (
    <>
      <group {...props}>
        <FlatText />
        <BlockText
          word="Hi! I'm Diana."
          color="#fff"
          position={[0, 0, 0]}
          materialProps={{ roughness: 0.5, metalness: 1 }}
          castShadow
        />
      </group>
      <Plane
        receiveShadow
        rotation={[deg(270), deg(0), deg(0)]}
        args={[500, 500]}
      >
        <meshStandardMaterial
          attach="material"
          color="#d8d9d4"
          roughness={0}
          reflectivity={1}
          combine={MultiplyOperation}
        />
      </Plane>
    </>
  );
}
export default Models;
