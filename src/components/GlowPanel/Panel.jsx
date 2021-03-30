import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { CameraHelper, MathUtils } from 'three';

import { useControl } from 'react-three-gui';

const Panel = ({ label, index, position, width, height, depth, color, ...rest }) => {
  const ctrlColor = useControl(`${label || `#${index}`} Color`, {
    group: label,
    type: 'color',
    value: color,
  });
  const ctrlHeight = useControl(`${label || `#${index}`} Height`, {
    group: label,
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });
  const ctrlWidth = useControl(`${label || `#${index}`} Width`, {
    group: label,
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });
  const ctrlThickness = useControl(`${label || `#${index}`} Thickness`, {
    group: label,
    type: 'number',
    value: depth,
    min: 0,
    max: 100,
  });

  const ctrlX = useControl(`${label || `#${index}`} X Position`, {
    group: label,
    type: 'number',
    value: position.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`${label || `#${index}`} Y Position`, {
    group: label,
    type: 'number',
    value: position.y || height / 2,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`${label || `#${index}`} Z Position`, {
    group: label,
    type: 'number',
    value: position.z,
    min: -100,
    max: 100,
  });

  return (
    <mesh receiveShadow position={[ctrlX, ctrlY, ctrlZ]} {...rest}>
      <boxBufferGeometry args={[ctrlWidth, ctrlHeight, ctrlThickness]} />
      <meshStandardMaterial roughness={0} metalness={1} opacity={0.1} />
    </mesh>
  );
};

export default Panel;
