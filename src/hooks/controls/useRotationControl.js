import { useControl } from 'react-three-gui';
import { MathUtils } from 'three';

// USAGE
/**
 * const meshProperties = useRotationControl(initialProps)
 *
 * @param {*} props
 * @returns
 */
export default function useRotationControl(props) {
  const { label, rotateXYZ } = props;
  const [X, Y, Z] = rotateXYZ;

  const rotateX = useControl(`${label} Light X Rotation`, {
    group: label,
    type: 'number',
    value: X || 0,
    min: -360,
    max: 360,
  });

  const rotateY = useControl(`${label} Light Y Rotation`, {
    group: label,
    type: 'number',
    value: Y || 0,
    min: -360,
    max: 360,
  });
  const rotateZ = useControl(`${label} Light Z Rotation`, {
    group: label,
    type: 'number',
    value: Z || 0,
    min: -360,
    max: 360,
  });
  const calc = (val) => MathUtils.degToRad(val);

  return { 'rotation-x': calc(rotateX), 'rotation-y': calc(rotateY), 'rotation-z': calc(rotateZ) };
}
