import React, { createContext, useEffect, useState } from 'react';
import { useSpring } from '@react-spring/core';

export const SceneContext = createContext({
  darkMode: false,
  down: false,
  setDown: () => null,
  setHovered: () => null,
  setDarkMode: () => null,
});

export default function SceneProvider({ children }) {
  const [hovered, setHovered] = useState(false);
  const [down, setDown] = useState(false);
  const [darkMode, setDarkMode] = useState('DARK'); //dark or light

  return (
    <SceneContext.Provider
      value={{
        hovered,
        setHovered,
        down,
        setDown,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}

// export const useSceneContext = useContext(SceneContext);
