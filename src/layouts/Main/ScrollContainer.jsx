function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  const vec = new THREE.Vector3();
  useFrame(() =>
    group.current.position.lerp(
      vec.set(0, viewport.height * scroll.current, 0),
      0.1,
    ),
  );
  return <group ref={group}>{children}</group>;
}

export default ScrollContainer;
