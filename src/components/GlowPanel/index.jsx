import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls, Text } from '@react-three/drei';
import { Controls, useControl, withControls } from 'react-three-gui';
import { FontLoader, MathUtils } from 'three';
import Glow from './Glow';
import Panel from './Panel';
// import DosisLight from '../ThreeText/fonts/DosisLight_Regular.json';
import RobotoMono from '../ThreeText/fonts/RobotoMono_Medium_Regular.json';

function GlowPanel({ color, position, height, width, label, depth, ...rest }) {
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
        position={{ ...position, z: position.z + depth }}
        label={label + 'Glow 1'}
        intensity={intensity}
      />
      <Panel position={position} label={label} {...shared} />
      <Glow
        {...shared}
        isOn={hovered}
        label={label + 'Glow 2'}
        rotateY={180}
        position={{ ...position, z: -(position.z + depth) }}
        intensity={intensity}
      />
      <Floor isOn={hovered} {...shared} label={label + ' Floor'} position={position} />
    </group>
  );
}

const FloorText = ({ floorText, position }) => {
  const font = new FontLoader().parse(RobotoMono);
  const textOptions = {
    font,
    size: 5,
    height: 0,
  };

  const rotateX = useControl(`Rotate X`, {
    group: 'Floor Text',
    type: 'number',
    value: -90,
    min: -360,
    max: 360,
  });
  const rotateY = useControl(`Rotate Y`, {
    group: 'Floor Text',
    type: 'number',
    value: 0,
    min: -360,
    max: 360,
  });
  const rotateZ = useControl(`Rotate Z`, {
    group: 'Floor Text',
    type: 'number',
    value: 90,
    min: -360,
    max: 360,
  });

  return (
    <mesh
      position={position}
      rotation-z={MathUtils.degToRad(rotateZ)}
      rotation-y={MathUtils.degToRad(rotateY)}
      rotation-x={MathUtils.degToRad(rotateX)}
    >
      <textGeometry attach="geometry" args={[floorText.toUpperCase(), textOptions]} />
      <meshLambertMaterial color="#00000" />
    </mesh>
  );
};

const Floor = ({
  isOn,
  label,
  color,
  position,
  height,
  width,
  depth,
  intensity,
  floorText,
  ...rest
}) => {
  const floorPanelHeight = height * 3 || 100;

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
        color={'#fff'}
        height={floorPanelHeight}
        label="floor"
        height={floorPanelHeight}
        position={{ ...position, y: depth, z: floorPanelHeight / 2 }}
        rotation-x={MathUtils.degToRad(90)}
      />
      <FloorText floorText={floorText} position={[position.x, depth * 2.5, floorPanelHeight / 2]} />
      <Glow
        {...shared}
        isOn={isOn}
        label={label + ' 2'}
        rotateX={90}
        rotateY={180}
        height={floorPanelHeight}
        position={{ ...position, y: lightY, z: floorPanelHeight / 2 }}
        intensity={intensity}
      />
    </>
  );
};

GlowPanel.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
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
