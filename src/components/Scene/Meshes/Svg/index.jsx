import { a, useSpring } from "@react-spring/three";

import * as THREE from "three";
import ReactDOM from "react-dom";
import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from "@react-three/drei";
import MeWithComputer from "@project/assets/svg/MeWithComputer.svg";

function Cell({ color, shape, fillOpacity, index }) {
  const [hovered, set] = useState(false);

  return (
    <mesh
      rotation={[Math.PI, 0, 0]}
      // onPointerOver={() => set(true)}
      // onPointerOut={() => set(false)}
      position-z={index * 0.1}
    >
      <meshBasicMaterial
        color={color}
        opacity={fillOpacity}
        depthWrite={false}
        side={THREE.DoubleSide}
        // transparent
      />
      <shapeBufferGeometry args={[shape]} />
    </mesh>
  );
}

function Svg({ url = MeWithComputer }) {
  const { paths } = useLoader(SVGLoader, url);

  const shapes = useMemo(
    () =>
      paths.flatMap((p) => {
        return p.toShapes(true).map((shape) => ({
          shape,
          color: p.color,
          fillOpacity: p.userData.style.fillOpacity,
        }));
      }),
    [paths]
  );

  const ref = useRef();
  useLayoutEffect(() => {
    const sphere = new THREE.Box3()
      .setFromObject(ref.current)
      .getBoundingSphere(new THREE.Sphere());
    ref.current.position.set(-sphere.center.x, -sphere.center.y, 0);
  }, []);

  return (
    <group scale={0.1} ref={ref}>
      {shapes.map((props, index) => (
        <Cell
          key={props.shape.uuid}
          {...props}
          text={index % 20 || `Cell ${index}`}
          index={index}
        />
      ))}
    </group>
  );
}

export default Svg;
