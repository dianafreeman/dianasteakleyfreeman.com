import React, { useState, useEffect } from "react";
import { useSpring } from "@react-spring/core";
import useTheme from "@project/hooks/useTheme";
import LayoutContext from "./LayoutContext";

/**
 *This can consume the theme!
 *
 * @param {*} { children }
 * @returns
 */
function LayoutProvider({ children }) {
  const { darkMode, palette, colors } = useTheme();

  // Has Page Loaded?
  const [loading, setLoading] = useState(true);

  // is the initial animation done?
  const [finished, setFinished] = useState(false);

  // ThreeJS Model Hover State
  const [hovered, setHovered] = useState(false);

  // ThreeJS Model PointerDown State
  const [down, setDown] = useState(false);

  const springConfig = (n) =>
    n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 20 };

  // Color Springs
  const [colorSprings] = useSpring(
    {
      background: darkMode ? palette.black : palette.white,
      text: darkMode ? palette.light : palette.dark,
      pointerLight: darkMode ? palette.white : palette.primaryLight,
      model: darkMode ? palette.secondaryDark : palette.primaryDark,
      floor: darkMode ? palette.dark : palette.light,
      pointer: darkMode ? palette.secondary : palette.primary,
      config: springConfig,
    },
    [darkMode, hovered]
  );

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [springs] = useSpring(
    {
      wobble: hovered ? 1.05 : 1,
      coat: 1,
      env: 1,
      ambient: 0.5,
      // coat: darkMode && !hovered ? 0.04 : 1,
      // env: darkMode && !hovered ? 0.4 : 1,
      // ambient: darkMode && !hovered ? 1.5 : 0.5,
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 30 },
    },
    [darkMode, hovered, down]
  );

  useEffect(() => {
    document.body.style.cursor = hovered
      ? "none"
      : `url('data:image/svg+xml;base64,${btoa(
          `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="${colors.pointer}"/></svg>`
        )}'), auto`;
  }, [hovered, colors.pointer]);

  return (
    <LayoutContext.Provider
      value={{
        colorSprings,
        springConfig,
        down,
        finished,
        hovered,
        loading,
        setDown,
        setFinished,
        setHovered,
        setLoading,
        springs,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
export default LayoutProvider;
