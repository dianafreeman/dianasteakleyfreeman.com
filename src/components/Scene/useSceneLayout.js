import React, { createContext, useContext, useState } from 'react';
import { useSpring } from '@react-spring/core';
import colors from '@config/colors';

const useSceneLayout = () => {
  // ThreeJS Model Hover State
  const [hovered, setHovered] = useState(false);

  // ThreeJS Model PointerDown State
  const [down, setDown] = useState(false);

  // Global DarkMode State
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((curr) => !curr);
  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, env, ambient }] = useSpring(
    {
      wobble: down ? 1.1 : hovered ? 1.25 : 1,
      coat: darkMode && !hovered ? 0.04 : 1,
      env: darkMode && !hovered ? 0.4 : 1,
      ambient: darkMode && !hovered ? 1.5 : 0.5,
      color: hovered ? colors.primary : darkMode ? colors.dark : colors.gray,
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [darkMode, hovered, down],
  );
  return {
    hovered,
    setHovered,
    down,
    setDown,
    darkMode,
    toggleDarkMode,
    springs: { wobble, coat, color, env, ambient },
    colors,
  };
};

export default useSceneLayout;
