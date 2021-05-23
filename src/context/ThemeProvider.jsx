import React, { useState } from 'react';
import { useSpring } from '@react-spring/core';

import ThemeContext from '@context/ThemeContext';

function ThemeProvider({ children }) {
  // Global DarkMode State
  const [darkMode, setDarkMode] = useState(false);

  const [breakpoints] = useState({
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  });

  const palette = {
    black: '#2b2b2b',
    white: '#f0f0f0',
    dark: '#0d1f2b',
    light: '#f1e9df',
    gray: '#929093',
    primary: '#E8B059',
    primaryLight: '#F8C069',
    primaryDark: '#e09600',
    secondary: '#0094f1',
    secondaryLight: '#2fa4f4',
    secondaryDark: '#2277b1',
  };

  const springConfig = (n) =>
    n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 5 };

  // Color
  const [colors] = useState({
    background: darkMode ? palette.black : palette.white,
    text: darkMode ? palette.light : palette.dark,
    pointerLight: darkMode ? palette.secondaryLight : palette.primaryLight,
    model: darkMode ? palette.secondaryDark : palette.primaryDark,
    floor: darkMode ? palette.dark : palette.light,
    pointer: darkMode ? palette.secondary : palette.primary,
  });

  return (
    <ThemeContext.Provider
      value={{
        setDarkMode,
        springConfig,
        darkMode,
        palette,
        colors,
        breakpoints,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
4;
