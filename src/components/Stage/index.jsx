import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import PropTypes from 'prop-types';
import { useControl } from 'react-three-gui';
import { TextureLoader, MirroredRepeatWrapping, MathUtils } from 'three';
import DisplacementMap from '../../assets/textures/stone/DisplacementMap.png';
import NormalMap from '../../assets/textures/stone/NormalMap.jpg';
import RoughnessMap from '../../assets/textures/stone/RoughnessMap.jpg';

const BrickWall = () => {
  const { roughness, color, metalness } = useStageControls();

  return (
    <mesh
      receiveShadow
      position={[0, 40, 0]}
      rotation={[MathUtils.degToRad(0), MathUtils.degToRad(0), MathUtils.degToRad(0)]}
      // {...rest}
    >
      <planeBufferGeometry attach="geometry" args={[300, 60]} />
      <meshStandardMaterial
        attach="material"
        color={'white'}
        roughness={0}
        metalness={0}
        // displacementMap={displacementMap}
        // roughnessMap={normalMap}
        bumpScale={1}
      />
    </mesh>
  );
};
const useStageControls = () => {
  const roughness = useControl('roughness', {
    group: 'Stage',
    type: 'number',
    value: 0,
    min: 0,
    max: 30,
  });
  const metalness = useControl('metalness', {
    group: 'Stage',
    type: 'number',
    value: 0,
    min: 0,
    max: 30,
  });
  const color = useControl('color', {
    group: 'Stage',
    type: 'color',
    value: '#838083',
  });
  return { roughness, metalness, color };
};

const Floor = ({ width, height, depth, materialProps, geometryProps, ...rest }) => {
  return (
    <mesh
      receiveShadow
      position={[0, -depth, height / 2]}
      rotation={[MathUtils.degToRad(270), MathUtils.degToRad(0), MathUtils.degToRad(0)]}
      {...rest}
    >
      <boxBufferGeometry attach="geometry" args={[width, height, depth]} />
      <meshStandardMaterial {...materialProps} attach="material" />
    </mesh>
  );
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

  const floorMaterialProps = {
    roughness,
    metalness,
    color,
    displacementMap,
    bumpMap: normalMap,
  };
  return (
    <Suspense fallback={null}>
      <BrickWall />
      <Floor depth={1} width={300} height={200} materialProps={floorMaterialProps} {...rest} />
    </Suspense>
  );
};
export default Stage;
