import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ThemeContext from "@project/context/ThemeContext";

function ThemeProvider({ children }) {
  // Global DarkMode State
  const [darkMode, setDarkMode] = useState(true);

  const [breakpoints] = useState({
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  });

  const palette = {
    black: "#2b2b2b",
    white: "#f0f0f0",
    dark: "#0d1f2b",
    light: "#f1e9df",
    gray: "#929093",
    primary: "#E8B059",
    primaryLight: "#F8C069",
    primaryDark: "#e09600",
    secondary: "#0094f1",
    secondaryLight: "#2fa4f4",
    secondaryDark: "#2277b1",
  };

  // Color
  const [colors] = useState({
    background: darkMode ? palette.black : palette.white,
    text: darkMode ? palette.light : palette.dark,
    pointerLight: darkMode ? palette.secondaryLight : palette.primaryLight,
    model: darkMode ? palette.secondaryDark : palette.primaryDark,
    floor: darkMode ? palette.dark : palette.light,
    pointer: darkMode ? palette.secondary : palette.primary,
  });

  const [spacing] = useState({
    sm: "1rem",
    md: "1.5rem",
    lg: "2.75rem",
    xl: "3rem",
    responsive: {
      sm: "calc(0.5rem * 2vw)",
    },
  });

  const [font] = useState({
    size: {
      sm: "2rem",
      md: "3rem",
      lg: "4.5rem",
      xl: "6rem",
      responsive: {
        sm: "calc(1rem + 4vw)",
        md: "calc(2rem + 4vw)",
        lg: "calc(3.5rem + 4vw)",
        xl: "calc(5rem + 4vw)",
      },
    },
  });

  const theme = {
    palette,
    colors,
    spacing,
    font,
    breakpoints,
  };

  return (
    <ThemeContext.Provider
      value={{
        setDarkMode,
        darkMode,
        palette,
        colors,
        breakpoints,
      }}
    >
      {/* Makes the above configuration available
      to styled components internally as a global `theme` */}
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
