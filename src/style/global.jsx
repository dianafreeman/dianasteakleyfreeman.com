import { createGlobalStyle } from 'styled-components';
import { colors } from '../config/tailwind';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    background-color: ${props => props.backgroundColor || colors['grey-dark']};
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: none;
    display: block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;

  }
  body {
    width: 100%;
    height: inherit;
    padding: unset;
    margin: unset;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Raleway', serif;
    font-weight: 400;
  }
  p, a, li, ul, ol, span {
    font-family: 'Crimson Text', sans-serif;
  }
  a {
    text-decoration: none;
  }


`;

export default GlobalStyle;
