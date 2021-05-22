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

  const colorMap = {
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

  const dark = {
    background: colorMap.black,
    text: colorMap.light,
    pointerLight: colorMap.secondaryLight,
    model: colorMap.secondaryDark,
    floor: colorMap.dark,
    pointer: colorMap.secondary,
  };
  const light = {
    background: colorMap.white,
    text: colorMap.dark,
    pointerLight: colorMap.primaryLight,
    model: colorMap.primaryDark,
    floor: colorMap.light,
    pointer: colorMap.primary,
  };

  const modelColor = (isDarkMode) => {
    if (isDarkMode) {
      return hovered ? colorMap.secondary : dark.model;
    }
    return hovered ? colorMap.primary : light.model;
  };

  // Colors
  const [colors] = useSpring(
    {
      background: darkMode ? dark.background : light.background,
      text: darkMode ? dark.text : light.text,
      pointerLight: darkMode ? dark.pointerLight : light.pointerLight,
      model: modelColor(darkMode),
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 5 },
    },
    [darkMode, hovered],
  );

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [springs] = useSpring(
    {
      wobble: down ? 0.95 : hovered ? 1.05 : 1,
      coat: darkMode && !hovered ? 0.04 : 1,
      env: darkMode && !hovered ? 0.4 : 1,
      ambient: darkMode && !hovered ? 1.5 : 0.5,
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [darkMode, hovered, down],
  );

  return (
    <ThemeContext.Provider
      value={{
        setDarkMode,
        darkMode,
        colors,
        springs,
        breakpoints,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
4;
