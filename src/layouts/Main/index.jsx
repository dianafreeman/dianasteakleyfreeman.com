import React from "react";

import { a } from "@react-spring/web";
import { createGlobalStyle } from "styled-components";

import ThemeProvider from "@project/context/ThemeProvider";
import LayoutProvider from "@project/context/LayoutProvider";
import RobotoBlack from "@project/assets/fonts/2d/Roboto/Roboto-Black.ttf";
import RobotoMonoLight from "@project/assets/fonts/2d/Roboto_Mono/static/RobotoMono-Light.ttf";

import useTheme from "@project/hooks/useTheme";

import SEO from "./SEO";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Roboto Black';
      src: local('Roboto Black'), url(${RobotoBlack}) format('truetype');
  }
  @font-face {
      font-family: 'Roboto Mono';
      src: local('Roboto Mono'), url(${RobotoMonoLight}) format('truetype');
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
          margin: "unset",
          minHeight: "100vh",
          display: "flex",
        }}
      >
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
