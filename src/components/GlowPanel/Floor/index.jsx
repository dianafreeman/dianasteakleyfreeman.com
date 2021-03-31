import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHelper } from '@react-three/drei';
import { RectAreaLight, MathUtils } from 'three';
import { useControl } from 'react-three-gui';

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
        color={'#fff'} //override panel color
        height={floorPanelHeight}
        label="floor"
        height={floorPanelHeight}
        materialProps={{ roughness: 1, metalness: 0, color: color }}
        positionMap={{ ...positionMap, y: depth, z: floorPanelHeight / 2 }}
        rotation-x={MathUtils.degToRad(90)}
      />
      <FloorText
        floorText={floorText}
        positionMap={[positionMap.x, depth * 2.5, floorPanelHeight / 2]}
      />
      <Glow
        {...shared}
        isOn={isOn}
        label={label + ' 2'}
        rotateX={90}
        rotateY={180}
        height={floorPanelHeight}
        positionMap={{ ...positionMap, y: lightY, z: floorPanelHeight / 2 }}
        intensity={intensity}
      />
    </>
  );
};

export default Floor;
