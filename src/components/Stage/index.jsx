import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useControl } from 'react-three-gui';

const Stage = ({ length = 500, width = 400, ...rest }) => {
  const roughness = useControl('roughness', {
    group: 'Stage',
    type: 'number',
    value: 0.5,
    min: 0,
    max: 10,
  });
  const metalness = useControl('metalness', {
    group: 'Stage',
    type: 'number',
    value: 0,
    min: 0,
    max: 10,
  });
  const color = useControl('color', {
    group: 'Stage',
    type: 'color',
    value: '#fefefe',
  });

  return (
    <mesh position={[0, 0, 15]} {...rest}>
      <boxBufferGeometry args={[length, 0.5, width]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
};
export default Stage;
