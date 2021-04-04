import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MathUtils } from 'three';
import { useControl } from 'react-three-gui';
import usePositionControls from '../../hooks/useDebugControls/usePositionControls';

const Lights = () => {
  // const positionProps1 = usePositionControls({ label: 'Spotlight1', xyz: [0, 60, 15] });

  return (
    <>
      <hemisphereLight args={['#ffffbb', '#080820', 1]} />
      <spotLight castShadow intensity={0.5} position={[0, 40, -150]} lookAt={[0, 20, 0]} />
      <ambientLight intensity={0.25} position={[0, 30, 0]} />
    </>
  );
};

export default Lights;
