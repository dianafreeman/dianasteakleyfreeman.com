import * as THREE from 'three';
import React, { Suspense, useContext, useEffect, useRef } from 'react';
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Html,
  Center,
} from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import ThemeContext from '@context/ThemeContext';
import Canvas from '../Canvas';
import Ambiance from './Ambiance';

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

function Scene({ children }) {
  const scrollRef = useRef();
  const scroll = useRef(0);
  const doScroll = (e) =>
    (scroll.current = e.target.scrollTop / e.target.scrollHeight);

  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <Ambiance />
          {children}
        </Canvas>
      </Suspense>
    </>
  );
}
export default Scene;
