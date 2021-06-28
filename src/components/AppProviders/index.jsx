import React from "react";

import { a } from "@react-spring/web";
import { createGlobalStyle } from "styled-components";

import ThemeProvider from "@project/context/ThemeProvider";
import LayoutProvider from "@project/context/LayoutProvider";

import RobotoBlack from "@project/assets/fonts/2d/Roboto/Roboto-Black.ttf";
import RobotoBold from "@project/assets/fonts/2d/Roboto/Roboto-Bold.ttf";
import RobotoRegular from "@project/assets/fonts/2d/Roboto/Roboto-Regular.ttf";
import RobotoThin from "@project/assets/fonts/2d/Roboto/Roboto-Thin.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Roboto Black';
      src: local('Roboto Black'), url(${RobotoBlack}) format('truetype');
  }
  @font-face {
      font-family: 'Roboto Bold';
      src: local('Roboto Bold'), url(${RobotoBold}) format('truetype');
  }
  @font-face {
      font-family: 'Roboto Regular';
      src: local('Roboto Regular'), url(${RobotoRegular}) format('truetype');
  }
  @font-face {
      font-family: 'Roboto Thin';
      src: local('Roboto Thin'), url(${RobotoThin}) format('truetype');
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6{
    font-family: 'Roboto Black', sans-serif;
  }

  body, p, a {
    font-family: 'Roboto Bold', sans-serif;
    font-size: 21px;
  }

  button, small {
    font-family: 'Roboto Bold', sans-serif;
    font-size: 0.95rem;
    text-transform: uppercase;
  }
  html, body {
    padding: unset;
    margin: unset;
  }
`;

/**
 * Wraps all gatsby generated pages with common needs
 * handles
 *
 * @param {*} { children, postNode, postPath, postSEO }
 * @returns
 */

function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <GlobalStyle />
        <a.main id="#main">{children}</a.main>
      </LayoutProvider>
    </ThemeProvider>
  );
}
export default AppProviders;
