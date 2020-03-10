import { createGlobalStyle } from 'styled-components';
import 'open-dyslexic';

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
  background-color: ${props => (props.lightTheme ? '#D5D5D5' : '#393939')};
}


h1, h2, h3, h4, h5, h6 {
  font-family: ${props => props.fontFamily.heading};
}
nav,  button {
  font-family: ${props => props.fontFamily.nav};
}

body, p, span, a , li, ul{
  font-family: ${props => props.fontFamily.body};
  font-weight: 300;
}
`;

export default GlobalStyle;
