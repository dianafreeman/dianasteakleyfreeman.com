import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`*, *:before, *:after {
  box-sizing: border-box;
}
html {
  background-color: ${props => props.theme.schemes.dark.background};
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  -ms-overflow-style: none;
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
#root{
  height: 100%;
  width:100%;
}

body {
  width: 100%;
  height: inherit;
  padding: unset;
  margin: unset;
  background-color: unset;
  font-size: 22px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Open Sans', sans-serif;
}


#root p, #root span, #root a {
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  font-size: 5vw;
}`;

export default GlobalStyle;
