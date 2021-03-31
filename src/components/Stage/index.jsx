import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import PropTypes from 'prop-types';
import { useControl } from 'react-three-gui';
import { TextureLoader, MirroredRepeatWrapping } from 'three';
import DisplacementMap from '../../assets/textures/stone/DisplacementMap.png';
import NormalMap from '../../assets/textures/stone/NormalMap.jpg';
import RoughnessMap from '../../assets/textures/stone/RoughnessMap.jpg';

const useStageControls = () => {
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
  return { roughness, metalness, color };
};

const Stage = ({ length = 500, width = 400, ...rest }) => {
  const { roughness, color, metalness } = useStageControls();
  const normalMap = useLoader(TextureLoader, NormalMap);
  normalMap.wrapS = MirroredRepeatWrapping;
  normalMap.wrapT = MirroredRepeatWrapping;
  normalMap.repeat.set(7, 4);

  const displacementMap = useLoader(TextureLoader, DisplacementMap);
  displacementMap.wrapS = MirroredRepeatWrapping;
  displacementMap.wrapT = MirroredRepeatWrapping;
  displacementMap.repeat.set(7, 4);

  return (
    <Suspense fallback={null}>
      <mesh receiveShadow position={[0, -0.5, 0]} {...rest}>
        <boxBufferGeometry attach="geometry" args={[length, 0.5, width]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          roughness={roughness}
          metalness={metalness}
          displacementMap={displacementMap}
          roughnessMap={normalMap}
          bumpScale={1}
        />
      </mesh>
    </Suspense>
  );
};
export default Stage;
