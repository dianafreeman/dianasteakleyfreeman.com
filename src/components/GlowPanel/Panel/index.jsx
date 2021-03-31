import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { CameraHelper, MathUtils } from 'three';

import { useControl } from 'react-three-gui';

const Panel = ({ label, index, position, width, height, depth, color, transparent, ...rest }) => {
  const ctrlColor = useControl(`${label} Panel Color`, {
    group: label,
    type: 'color',
    value: color,
  });
  const ctrlHeight = useControl(`${label} Panel Height`, {
    group: label,
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });
  const ctrlWidth = useControl(`${label} Panel Width`, {
    group: label,
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });
  const ctrlThickness = useControl(`${label} Panel Thickness`, {
    group: label,
    type: 'number',
    value: depth,
    min: 0,
    max: 100,
  });

  const ctrlX = useControl(`${label} Panel X Position`, {
    group: label,
    type: 'number',
    value: position.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`${label} Panel Y Position`, {
    group: label,
    type: 'number',
    value: position.y,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`${label} Panel Z Position`, {
    group: label,
    type: 'number',
    value: position.z,
    min: -100,
    max: 100,
  });

  return (
    <mesh castShadow position={[ctrlX, ctrlY, ctrlZ]} {...rest}>
      <boxBufferGeometry args={[ctrlWidth, ctrlHeight, ctrlThickness]} />
      <meshStandardMaterial roughness={1} metalness={0} color={ctrlColor} />
    </mesh>
  );
};

export default Panel;
