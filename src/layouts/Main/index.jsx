import React, { useRef, forwardRef, Suspense } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import styled, { createGlobalStyle } from 'styled-components';

import ThemeProvider from '@context/ThemeProvider';
import LayoutProvider from '@context/LayoutProvider';

import useTheme from '@hooks/useTheme';

import { Helmet } from 'react-helmet';
import SEO from './SEO';
import Navigation from '../../components/Navigation';

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

const Internals = ({ children, postNode, postPath, postSEO }) => {
  const { colors } = useTheme();
  return (
    <>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&#038;family=Roboto:wght@900&#038;display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
