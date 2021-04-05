import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MathUtils } from 'three';
import { useControl } from 'react-three-gui';
import { useFrame, useResource } from 'react-three-fiber';
import usePositionControls from '../../hooks/useDebugControls/usePositionControls';
import { useHelper } from '@react-three/drei';

const Lights = () => {
  return (
    <>
      <directionalLight
        color="#f6f5cc"
        intensity={0.2}
        position={[0, 30, -100]}
        lookAt={[0, 10, 0]}
      />
      <directionalLight intensity={0.3} position={[0, 30, 100]} lookAt={[0, 10, 0]} />
    </>
  );
};

export default Lights;
