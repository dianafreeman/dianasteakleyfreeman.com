import { useControl } from 'react-three-gui';

const useGlowControls = (props) => {
  const {
    label,
    positionMap,
    rotateX,
    rotateY,
    rotateZ,
    intensity,
    color,
    height,
    width,
  } = props;
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
    value: positionMap.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`${label} Light Y Position`, {
    group: label,
    type: 'number',
    value: positionMap.y || height / 2,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`${label} Light Z Position`, {
    group: label,
    type: 'number',
    value: positionMap.z,
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
  return {
    controlledIntensity,
    controlledColor,
    ctrlHeight,
    ctrlWidth,
    ctrlX,
    ctrlY,
    ctrlZ,
    rotateYDeg,
    rotateXDeg,
    rotateZDeg,
  };
};

export default useGlowControls;
