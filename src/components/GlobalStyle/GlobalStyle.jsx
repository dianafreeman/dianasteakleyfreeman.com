import { createGlobalStyle } from '@emotion/styled';
import { Global, css } from '@emotion/core';


// const GlobalStyle = createGlobalStyle`

class GlobalStyle {
  render() {
    return (
      <Global
        styles={css`
          *,
          *:before,
          *:after {
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

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${props => props.fontFamily.heading};
            font-weight: 700;
            color: white;
          }
          h1 {
            font-size: 4.5em !important;
          }
          h2 {
            font-size: 3em !important;
          }
          h3 {
            font-size: 2.5em !important;
          }

          nav,
          button {
            font-family: ${props => props.fontFamily.nav};
          }

          body,
          p,
          span,
          a,
          li,
          ul {
            font-family: ${props => props.fontFamily.body};
            font-weight: 300;
          }
        `}
      />
    );
  }
}

export default new GlobalStyle;
