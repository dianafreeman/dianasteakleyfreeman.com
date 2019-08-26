import { createGlobalStyle } from "styled-components";
import { colors } from "../../tailwind";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: ${colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6{ 
    font-family: 'Cantata One', serif;
  }
  p, a  {
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }
  .typed-cursor{
    font-size: 3rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
    -webkit-letter-spacing: 0.05em;
    -moz-letter-spacing: 0.05em;
    -ms-letter-spacing: 0.05em;
    letter-spacing: 0.05em;
    text-shadow: 0 5px 35px rgba(255,255,255,0.15);
    display: inline;
    white-space: normal;
  }

`;

export default GlobalStyle;
