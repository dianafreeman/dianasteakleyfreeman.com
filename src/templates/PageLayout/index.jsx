import React, { Suspense, useState, useEffect } from 'react';
import { useContextBridge } from '@react-three/drei';
import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import { Canvas } from '@react-three/fiber';

import COLORS from '@config/colors';

import SEO from './SEO';
import './layout.scss';

import ThemeContext from '../../context/ThemeContext';

function Layout({ children, postNode, postPath, postSEO }) {
  // Let ThreeJS use outside context

  const [colors] = useState(COLORS);

  // ThreeJS Model Hover State
  const [hovered, setHovered] = useState(false);

  // ThreeJS Model PointerDown State
  const [down, setDown] = useState(false);

  // Global DarkMode State
  const [darkMode, setDarkMode] = useState(false);

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [springs] = useSpring(
    {
      wobble: down ? 1.1 : hovered ? 1.2 : 1,
      coat: darkMode && !hovered ? 0.04 : 1,
      env: darkMode && !hovered ? 0.4 : 1,
      ambient: darkMode && !hovered ? 1.5 : 0.5,
      color: hovered ? colors.primary : darkMode ? colors.dark : colors.gray,
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 50 },
    },
    [darkMode, hovered, down],
  );

  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>',
        )}'), auto`;
  }, [hovered]);

  const { background } = useSpring({
    background: darkMode ? colors.dark : colors.light,
  });

  return (
    <ThemeContext.Provider
      value={{
        down,
        setDown,
        darkMode,
        setDarkMode,
        hovered,
        setHovered,
        colors,
        springs,
      }}
    >
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <a.main style={{ background }}>{children}</a.main>
    </ThemeContext.Provider>
  );
}
export default Layout;
