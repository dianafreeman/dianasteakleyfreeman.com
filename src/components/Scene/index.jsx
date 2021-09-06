/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useContextBridge,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

import { LayoutContext } from "@project/providers/LaptopProvider";

import LaptopModel from "./Model";

const CAMERA = {
  position: [0, 4, 1],
  lookAt: [0, 0, 0],
  fov: 55,
};

const Scene = ({ laptopOpen, setLaptopOpen }) => {
  const ContextBridge = useContextBridge(LayoutContext);
  const group = useRef();

  const { camera } = useThree();

  // useSpring({
  //   to: {
  //     lookAt: CAMERA.lookAt,
  //     position: CAMERA.position,
  //   },
  //   onFrame: ({ lookAt, position }) => {
  //     camera.position.set(position);
  //     camera.lookAt(lookAt);
  //     camera.updateProjectionMatrix();
  //   },
  // });

  return (
    <ContextBridge>
      <pointLight position={[10, 10, 10]} intensity={1} />
      <a.group ref={group}>
        <LaptopModel
          // position-y={-0.5}
          position-y={1}
          // rotation-x={0.2}
          isOpen={laptopOpen}
          setOpen={setLaptopOpen}
          isFloating={false}
        />
      </a.group>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.4, 0]}
        opacity={0.8}
        width={20}
        height={20}
        blur={2}
        far={4.5}
        resolution={256}
      />
      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={laptopOpen}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </ContextBridge>
  );
};

export default ({ canvasStyle, ...props }) => {
  return (
    <Canvas
      style={canvasStyle}
      dpr={[1, 2]}
      camera={{
        position: CAMERA.position,
        fov: CAMERA.fov,
        zoom: 1,
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={null}>
        <Scene {...props} />
      </Suspense>
    </Canvas>
  );
};
