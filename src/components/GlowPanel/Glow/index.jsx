import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHelper } from '@react-three/drei';
import { RectAreaLight, MathUtils } from 'three';
import { useControl } from 'react-three-gui';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';

RectAreaLightUniformsLib.init();

const Glow = ({
  isOn,
  label,
  position,
  rotateX,
  rotateY,
  rotateZ,
  intensity,
  color,
  height,
  width,
  depth = 0,
}) => {
  const lightRef = useRef();

  const controlledIntensity = useControl(`${label} Light Intensity`, {
    group: label,
    type: 'number',
    value: intensity,
    min: 0.1,
    max: 10,
  });
  const controlledColor = useControl(`${label} Light Color`, {
    group: label,
    type: 'color',
    value: color,
  });
  const ctrlHeight = useControl(`${label} Light Height`, {
    group: label,
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });
  const ctrlWidth = useControl(`${label} Light Width`, {
    group: label,
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });

  const ctrlX = useControl(`${label} Light X Position`, {
    group: label,
    type: 'number',
    value: position.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`${label} Light Y Position`, {
    group: label,
    type: 'number',
    value: position.y || height / 2,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`${label} Light Z Position`, {
    group: label,
    type: 'number',
    value: position.z,
    min: -100,
    max: 100,
  });
  const rotateYDeg = useControl(`${label} Light Y Rotation`, {
    group: label,
    type: 'number',
    value: rotateY || 0,
    min: -360,
    max: 360,
  });
  const rotateXDeg = useControl(`${label} Light X Rotation`, {
    group: label,
    type: 'number',
    value: rotateX || 0,
    min: -360,
    max: 360,
  });
  const rotateZDeg = useControl(`${label} Light Z Rotation`, {
    group: label,
    type: 'number',
    value: rotateZ || 0,
    min: -360,
    max: 360,
  });

  return (
    <rectAreaLight
      ref={lightRef}
      width={ctrlWidth}
      height={ctrlHeight}
      rotation-z={MathUtils.degToRad(rotateZDeg)}
      rotation-y={MathUtils.degToRad(rotateYDeg)}
      rotation-x={MathUtils.degToRad(rotateXDeg)}
      position={[ctrlX, ctrlY, ctrlZ + depth]}
      args={[controlledColor, isOn ? controlledIntensity : 0.001, ctrlWidth, ctrlHeight]}
    />
  );
};

export default Glow;

Glow.propTypes = {
  isOn: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
  intensity: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
