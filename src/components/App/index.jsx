import React from "react";

import { createGlobalStyle } from "styled-components";

import RobotoBlack from "@project/assets/fonts/2d/Roboto/Roboto-Black.ttf";
import RobotoBold from "@project/assets/fonts/2d/Roboto/Roboto-Bold.ttf";
import RobotoRegular from "@project/assets/fonts/2d/Roboto/Roboto-Regular.ttf";
import RobotoThin from "@project/assets/fonts/2d/Roboto/Roboto-Thin.ttf";
import LayoutProvider from "@project/context/LayoutProvider";
import ThemeProvider from "@project/context/ThemeProvider";
import "../../styles/global.css";

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

  html, body, #root {
    padding: unset;
    margin: unset;
}
#root{
  //  position: fixed;
    min-height: 100vh;
    width: 100vw;
    font-family: 'Roboto Bold', sans-serif;
    font-size: 21px;
}

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6{
    font-family: 'Roboto Black', sans-serif;
  }

`;

/**
 * Wraps all gatsby generated pages with common needs
 * handles
 *
 * @param {*} { children, postNode, postPath, postSEO }
 * @returns
 */

function App({ children }) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <GlobalStyle />
        <div className="bg-gray-900 min-h-screen">{children}</div>
      </LayoutProvider>
    </ThemeProvider>
  );
}
export default App;
