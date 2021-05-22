import { Vector3 } from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import useInterval from '@use-it/interval';
import { ContactShadows, Html, Center, Plane, Text } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';

function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  const vec = new Vector3();
  useFrame(() =>
    group.current.position.lerp(
      vec.set(0, viewport.height * scroll.current, 0),
      0.1,
    ),
  );
  return <group ref={group}>{children}</group>;
}

export default ScrollContainer;
