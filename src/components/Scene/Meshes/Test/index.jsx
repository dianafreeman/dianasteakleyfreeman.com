import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Environment,
  Center,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
// import GLTFTarget from "@project/assets/glb/MacBookPro_blend.glb";
import HeroPage from "./HeroPage";
import Model from "./MacBookPro_blend";

/*
 // Make it float
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     group.current.rotation.x = THREE.MathUtils.lerp(
//       group.current.rotation.x,
//       Math.cos(t / 2) / 10 + 0.25,
//       0.1
//     );
//     group.current.rotation.y = THREE.MathUtils.lerp(
//       group.current.rotation.y,
//       Math.sin(t / 4) / 10,
//       0.1
//     );
//     group.current.rotation.z = THREE.MathUtils.lerp(
//       group.current.rotation.z,
//       Math.sin(t / 4) / 20,
//       0.1
//     );
//     group.current.position.y = THREE.MathUtils.lerp(
//       group.current.position.y,
//       (-5 + Math.sin(t)) / 5,
//       0.1
//     );
//   });
*/
// [-10, 0, -25]

const state = {
  camera: {
    position: [
      [0, 0, -2],
      [0, 5, -10],
      [0, -10, -10],
    ],
    fov: 35,
  },
  laptop: {
    rotation: [
      [0, 0, 0],
      [0, -Math.PI / 5, 0],
    ],
    position: [
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
};
export default function App({ index }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        position: state.camera.position[index],
        fov: state.camera.fov,
      }}
    >
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <group
          position={state.laptop.position[index]}
          rotation={state.laptop.rotation[index]}
        >
          <Center>
            <Model />
          </Center>
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -2.5, 0]}
        opacity={0.5}
        width={20}
        height={20}
        blur={2}
        far={4.5}
        resolution={256}
      />
      <OrbitControls
      // enablePan={false}
      // enableZoom={false}
      // minPolarAngle={Math.PI / 2}
      // maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
