import React, { Suspense } from 'react';
import reportWebVitals from '@config/reportWebVitals';
import { Canvas } from '@react-three/fiber';

import { useSpring } from '@react-spring/core';
import { OrbitControls } from '@react-three/drei';

import Scene from '../components/Scene';

function Index() {
  // This spring controls the background and the svg fill (text color)

  return <Scene />;
}

export default Index;
