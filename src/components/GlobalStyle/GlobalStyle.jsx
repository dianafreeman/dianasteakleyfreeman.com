import { createGlobalStyle } from 'styled-components';


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
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
}


h1, h2, h3, h4, h5, h6 {
  font-family: 'Open Sans', sans-serif;
}

`

;

export default GlobalStyle;
