import React, { useRef, forwardRef, Suspense } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import styled, { createGlobalStyle } from 'styled-components';

import ThemeProvider from '@context/ThemeProvider';
import LayoutProvider from '@context/LayoutProvider';

import useTheme from '@hooks/useTheme';
import useLayout from '@hooks/useLayout';
import { Helmet } from 'react-helmet';
import SEO from './SEO';
import Navigation from '../../components/Navigation';
import Scene from '../../components/Scene';

const GlobalStyle = createGlobalStyle`
  html {
    padding: unset;
    margin: unset;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    padding: unset;
    margin: unset;
    font-size: 21px;
    height: 100vh;
    overflow: none;

  }
`;
const AniMain = styled(a.main)`
  margin: unset;
  padding-right: 10vw;
  padding-left: 10vw;
  z-index: -2;
`;

const Wrapper = ({ children }) => {
  const { colorSprings } = useLayout();

  return (
    <AniMain style={{ backgroundColor: colorSprings.background }}>
      <Navigation />
      <GlobalStyle />
      {children}
    </AniMain>
  );
};

const SceneWrapper = styled.div`
  z-index: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (min-width: 568px) {
    width: 50%;
    left: unset;
    right: 0;
  }
  @media screen and (min-width: 768px) {
    padding-right: 5vw;
  }
`;

/**
 * Wraps all gatsby generated pages with common needs
 * handles
 *
 * @param {*} { children, postNode, postPath, postSEO }
 * @returns
 */

function Main({ children, postNode, postPath, postSEO }) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&#038;family=Roboto:wght@900&#038;display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Wrapper>
          {children}
          <SceneWrapper>
            <Scene cameraProps={{ position: [0, 5, 30], zoom: 1 }} />
          </SceneWrapper>
        </Wrapper>
      </LayoutProvider>
    </ThemeProvider>
  );
}
export default Main;
