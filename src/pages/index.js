import React, { Suspense } from 'react';
import reportWebVitals from '@config/reportWebVitals';
import { Canvas } from '@react-three/fiber';

import { useSpring } from '@react-spring/core';
import { OrbitControls } from '@react-three/drei';
import { a } from '@react-spring/web';

import Scene from '../components/Scene';

function Index() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring(
    { background: '#f0f0f0', fill: '#202020' },
    [],
  );
  return (
    <a.main>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </a.main>
  );
}

export default Index;
