import { useControl } from 'react-three-gui';
import { MathUtils } from 'three';

// USAGE
/**
 * const rotationControls = useRotationControl({label, rotateXYZ})
 *
 * @param {*} props
 * @returns
 */
export default function useRotationControls({ label }) {
  // const { label, rotateXYZ } = props;
  const [X, Y, Z] = [0, 0, 0];

  const rotateX = useControl(`${label} X Rotation`, {
    group: label,
    type: 'number',
    value: X || 0,
    min: -360,
    max: 360,
  });

  const rotateY = useControl(`${label} Y Rotation`, {
    group: label,
    type: 'number',
    value: Y || 0,
    min: -360,
    max: 360,
  });
  const rotateZ = useControl(`${label} Z Rotation`, {
    group: label,
    type: 'number',
    value: Z || 0,
    min: -360,
    max: 360,
  });
  const deg = (val) => MathUtils.degToRad(val);

  return { rotation: [deg(rotateX), deg(rotateY), deg(rotateZ)] };
}
