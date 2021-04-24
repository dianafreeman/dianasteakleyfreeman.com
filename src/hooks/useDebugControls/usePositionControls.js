import { useControl } from 'react-three-gui';

export default function usePositionControls({
  label,
  min = -100,
  max = 100,
  xyz = [0, 0, 0],
}) {
  const [x, y, z] = xyz;
  const X = useControl(`${label} X Position`, {
    group: label,
    type: 'number',
    value: x,
    min,
    max,
  });
  const Y = useControl(`${label} Y Position`, {
    group: label,
    type: 'number',
    value: y,
    min,
    max,
  });
  const Z = useControl(`${label} Z Position`, {
    group: label,
    type: 'number',
    value: z,
    min,
    max,
  });
  return { position: [X, Y, Z] }; // { X, Y, Z };
}
