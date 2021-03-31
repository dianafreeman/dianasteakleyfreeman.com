import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { CameraHelper, MathUtils } from 'three';

import { useControl } from 'react-three-gui';

const usePanelPositionControls = (props) => {
  const { label, positionMap } = props;
  const X = useControl(`${label} Panel X Position`, {
    group: label,
    type: 'number',
    value: positionMap?.x || 0,
    min: -100,
    max: 100,
  });
  const Y = useControl(`${label} Panel Y Position`, {
    group: label,
    type: 'number',
    value: positionMap?.y || 0,
    min: -100,
    max: 100,
  });
  const Z = useControl(`${label} Panel Z Position`, {
    group: label,
    type: 'number',
    value: positionMap?.z || 0,
    min: -100,
    max: 100,
  });
  return { X, Y, Z };
};

const usePanelAttributeControls = (props) => {
  const { color: colorVal, width: widthVal, height: heightVal, depth: depthVal, label } = props;
  const color = useControl(`${label} Panel Color`, {
    group: label,
    type: 'color',
    value: colorVal,
  });
  const height = useControl(`${label} Panel Height`, {
    group: label,
    type: 'number',
    value: heightVal,
    min: 0,
    max: 100,
  });
  const width = useControl(`${label} Panel Width`, {
    group: label,
    type: 'number',
    value: widthVal,
    min: 0,
    max: 100,
  });
  const depth = useControl(`${label} Panel Thickness`, {
    group: label,
    type: 'number',
    value: depthVal,
    min: 0,
    max: 100,
  });

  return { color, height, width, depth };
};
const Panel = ({ materialProps, geometryProps, ...props }) => {
  const pos = usePanelPositionControls(props);
  const { color, height, width, depth } = usePanelAttributeControls(props);
  return (
    <>
      <mesh castShadow {...props} position={[pos.X, pos.Y, pos.Z]}>
        <boxBufferGeometry {...geometryProps} args={[width, height, depth]} />
        <meshStandardMaterial {...materialProps} color={color} />
      </mesh>
    </>
  );
};

export default Panel;
