import React, { useRef, forwardRef, Suspense } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import styled, { createGlobalStyle } from 'styled-components';

import ThemeProvider from '@project/context/ThemeProvider';
import LayoutProvider from '@project/context/LayoutProvider';

import useTheme from '@project/hooks/useTheme';

import { Helmet } from 'react-helmet';
import SEO from './SEO';
import Navigation from '../../components/Navigation';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Roboto Black';
      src: local('Roboto Black'), url(../../assets/fonts/Roboto/Roboto-Black.ttf) format('truetype');
  }
  @font-face {
      font-family: 'Roboto Mono';
      src: local('Roboto Mono'), url(../../assets/fonts/Roboto_Mono/Roboto-VariableFont_wght.ttf) format('truetype');
  }
  html {
    padding: unset;
    margin: unset;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Black', sans-serif;
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

const Internals = ({ children, postNode, postPath, postSEO }) => {
  const { colors } = useTheme();
  return (
    <>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <GlobalStyle />
      <a.main
        style={{
          backgroundColor: colors.background,
          margin: 'unset',
          minHeight: '100vh',
          display: 'flex',
        }}
      >
        <Navigation />
        {children}
      </a.main>
    </>
  );
};
/**
 * Wraps all gatsby generated pages with common needs
 * handles
 *
 * @param {*} { children, postNode, postPath, postSEO }
 * @returns
 */

function Main(props) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <Internals {...props} />
      </LayoutProvider>
    </ThemeProvider>
  );
}
export default Main;
