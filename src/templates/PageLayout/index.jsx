import React, { Suspense, useState, useEffect } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';

import ThemeContext from '@context/ThemeContext';
import SEO from './SEO';

import './layout.scss';

const Navigation = () => {
  const { colors } = useTheme();
  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark py-2">
      <a className="navbar-brand" href="#">
        Navbar w/ text
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <span className="navbar-text">Navbar text with an inline element</span>
      </div>
    </nav>
  );
};

function Layout({ children, postNode, postPath, postSEO }) {
  // ThreeJS Model Hover State
  const [hovered, setHovered] = useState(false);

  // ThreeJS Model PointerDown State
  const [down, setDown] = useState(false);

  // Global DarkMode State
  const [darkMode, setDarkMode] = useState(false);

  const colorMap = {
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
    background: colorMap.dark,
    text: colorMap.light,
    pointerLight: colorMap.secondaryLight,
    model: colorMap.secondaryDark,
  };
  const light = {
    background: colorMap.light,
    text: colorMap.dark,
    pointerLight: colorMap.primaryLight,
    model: colorMap.primaryDark,
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
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 50 },
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
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 30 },
    },
    [darkMode, hovered, down],
  );

  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="${
            darkMode ? colorMap.secondary : colorMap.primary
          }"/></svg>`,
        )}'), auto`;
  }, [hovered, darkMode]);

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
      {/* <Navigation /> */}
      <a.main
        style={{
          background: colors.background,
        }}
      >
        {children}
      </a.main>
    </ThemeContext.Provider>
  );
}
export default Layout;
4;
