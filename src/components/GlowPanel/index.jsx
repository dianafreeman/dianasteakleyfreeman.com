import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { Controls, useControl, withControls } from 'react-three-gui';

import Glow from './Glow';
import Panel from './Panel';
import { MathUtils } from 'three';

function GlowPanel({ color, position, height, width, label, depth, ...rest }) {
  const [hovered, setHovered] = useState(false);
  // const depth = 0.1,
  //   width = 10,
  //   height = 25;
  const intensity = 1;

  const shared = {
    color,
    height,
    width,
    depth,
    ...rest,
  };

  return (
    <group
      onPointerOver={() => {
        // console.log('over!');
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
        // console.log('leave!');
      }}
    >
      <Glow
        {...shared}
        isOn={hovered}
        rotateY={0}
        position={{ ...position, z: position.z + depth }}
        label={label + ' 1'}
        intensity={intensity}
      />
      <Panel position={position} {...shared} />
      <Glow
        {...shared}
        isOn={hovered}
        label={label + ' 2'}
        rotateY={180}
        position={{ ...position, z: -(position.z + depth) }}
        intensity={intensity}
      />
    </group>
  );
}

GlowPanel.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.number,
  width: PropTypes.number,
  depth: PropTypes.number,
};
GlowPanel.defaultProps = {
  position: [0, 0, 0],
  height: 25,
  width: 10,
  depth: 0.1,
};
export default GlowPanel;
