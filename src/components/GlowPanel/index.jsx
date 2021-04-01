import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import {
  PerspectiveCamera,
  useHelper,
  OrbitControls,
  Text,
  QuadraticBezierLine,
  Extrude,
} from '@react-three/drei';
import { Controls, useControl, withControls } from 'react-three-gui';
import { FontLoader, MathUtils } from 'three';
import Glow from './Glow';
import Panel from './Panel';
// import DosisLight from '../ThreeText/fonts/DosisLight_Regular.json';
import RobotoMono from '../ThreeText/fonts/RobotoMono_Medium_Regular.json';
import { useSpring, animated } from 'react-spring';

function GlowPanel({ color, positionMap, height, width, label, depth, ...rest }) {
  const [hovered, setHovered] = useState(false);

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
        positionMap={{ ...positionMap, z: positionMap.z + depth }}
        label={label + 'Glow 1'}
        intensity={intensity}
      />
      <Panel positionMap={positionMap} label={label} {...shared} />
      <Glow
        {...shared}
        isOn={hovered}
        label={label + 'Glow 2'}
        rotateY={180}
        positionMap={{ ...positionMap, z: -(positionMap.z + depth) }}
        intensity={intensity}
      />
      <Floor isOn={hovered} {...shared} label={label + ' Floor'} positionMap={positionMap} />
    </group>
  );
}

const Floor = ({
  isOn,
  label,
  color,
  positionMap,
  height,
  width,
  depth,
  intensity,
  floorText,
  ...rest
}) => {
  const floorPanelHeight = 3;

  const lightY = depth + depth;
  const shared = {
    color,
    height,
    width,
    depth,
    ...rest,
  };
  return (
    <>
      <Panel
        {...shared}
        height={floorPanelHeight}
        label="Floor"
        height={floorPanelHeight}
        materialProps={{ roughness: 1, metalness: 0, color: color }}
        positionMap={{ ...positionMap, y: depth, z: floorPanelHeight / 2 }}
        rotation-x={MathUtils.degToRad(90)}
      />
      {/* <FloorText floorText={floorText} position={[positionMap.x, depth * 2.5, floorPanelHeight]} /> */}

      <Glow
        {...shared}
        isOn={isOn}
        label={label + ' 2'}
        rotateX={90}
        rotateY={180}
        sla
        height={floorPanelHeight}
        positionMap={{ ...positionMap, y: lightY, z: floorPanelHeight / 2 }}
        intensity={intensity}
      />
    </>
  );
};

GlowPanel.propTypes = {
  color: PropTypes.string.isRequired,
  positionMap: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  depth: PropTypes.number,
};
GlowPanel.defaultProps = {
  positionMap: { x: 0, y: 0, z: 0 },
  height: 25,
  width: 10,
  depth: 0.1,
};
export default GlowPanel;
