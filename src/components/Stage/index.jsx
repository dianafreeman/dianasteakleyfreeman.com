import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import PropTypes from 'prop-types';
import { useControl } from 'react-three-gui';
import { TextureLoader, MirroredRepeatWrapping } from 'three';

const Stage = ({ length = 500, width = 400, ...rest }) => {
  const roughness = useControl('roughness', {
    group: 'Stage',
    type: 'number',
    value: 30,
    min: 0,
    max: 30,
  });
  const metalness = useControl('metalness', {
    group: 'Stage',
    type: 'number',
    value: 2,
    min: 0,
    max: 30,
  });
  const color = useControl('color', {
    group: 'Stage',
    type: 'color',
    value: '#fff',
  });

  // const textureMap = useLoader(TextureLoader, StoneColorMap);
  // textureMap.wrapS = MirroredRepeatWrapping;
  // textureMap.wrapT = MirroredRepeatWrapping;
  // textureMap.repeat.set(7, 4);

  const bumpMap = useLoader(TextureLoader, StoneDisplacementMap);
  bumpMap.wrapS = MirroredRepeatWrapping;
  bumpMap.wrapT = MirroredRepeatWrapping;
  bumpMap.repeat.set(7, 4);
  return (
    <Suspense fallback={null}>
      <mesh receiveShadow position={[0, -0.1, 15]} {...rest}>
        <boxBufferGeometry attach="geometry" args={[length, 0.5, width]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          roughness={roughness}
          metalness={metalness}
          roughnessMap={bumpMap}
          bumpScale={1}
        />
      </mesh>
    </Suspense>
  );
};
export default Stage;
