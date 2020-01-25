import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`*, *:before, *:after {
  box-sizing: border-box;
}
html {
  background-color: ${props => props.theme.schemes.dark.background};
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
  background-color: unset;
}
h1, h2, h3, h4, h5, h6{
  font-weight: 400;
}

a {
  text-decoration: none;
}`;

export default GlobalStyle;
