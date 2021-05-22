import React, { useRef, useState, useEffect } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';

import useTheme from '@hooks/useTheme';
import MainLoading from '../components/MainLoading';

/**
 *This can consume the theme!
 *
 * @param {*} { children }
 * @returns
 */
function LayoutProvider({ children }) {
  const { colors } = useTheme();

  // Has Page Loaded?
  const [loading, setLoading] = useState(false);

  // is the initial animation done?
  const [finished, setFinished] = useState();

  // Is this the index Page?

  // ThreeJS Model Hover State
  const [hovered, setHovered] = useState(false);

  // ThreeJS Model PointerDown State
  const [down, setDown] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="${colors.pointer}"/></svg>`,
        )}'), auto`;
  }, [hovered]);

  return (
    <LayoutContext.Provider
      value={{
        down,
        setDown,
        darkMode,
        setDarkMode,
        hovered,
        setHovered,
        colors,
        springs,
        breakpoints,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
export default LayoutProvider;
