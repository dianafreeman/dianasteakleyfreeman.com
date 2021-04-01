// TODO
export default function usePositionControlMap(props) {
  const { label, position } = props;
  const X = useControl(`${label} Panel X Position`, {
    group: label,
    type: 'number',
    value: position?.x || 0,
    min: -100,
    max: 100,
  });
  const Y = useControl(`${label} Panel Y Position`, {
    group: label,
    type: 'number',
    value: position?.y || 0,
    min: -100,
    max: 100,
  });
  const Z = useControl(`${label} Panel Z Position`, {
    group: label,
    type: 'number',
    value: position?.z || 0,
    min: -100,
    max: 100,
  });
  return { X, Y, Z };
}
