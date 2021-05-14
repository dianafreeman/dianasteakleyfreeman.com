import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import SwirlingLights from './SwirlingLights';
import { useHelper } from '@react-three/drei';
import { useResource } from '@hooks';
import { DirectionalLightHelper } from 'three';

const Lights = () => {
  return (
    <>
      {/* <directionalLight
        ref={light}
        castShadow
        color="#f6f5cc"
        intensity={0.2}
        position={[0, 30, -10]}
        lookAt={[0, 10, 0]}
      />
      <directionalLight
        castShadow
        intensity={1}
        position={[0, 30, 100]}
        lookAt={[0, 10, 0]}
      />
      <ambientLight intensity={0.5} /> */}
      <SwirlingLights />
    </>
  );
};

export default Lights;
