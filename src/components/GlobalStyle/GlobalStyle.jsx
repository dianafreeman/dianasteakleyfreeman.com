import { createGlobalStyle } from 'styled-components';
import 'open-dyslexic'

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  font-family: 'Open Sans', sans-serif;
  background-color: #D5D5D5;
}


h1, h2, h3, h4, h5, h6 {
  font-family: 'Open Sans Condensed', sans-serif;
}

`;

export default GlobalStyle;
