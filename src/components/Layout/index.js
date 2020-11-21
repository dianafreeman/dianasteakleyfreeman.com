import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #EBEBEB;
    font-family: "Roboto", sans-serif;
    color: black;
  }
`;

const Wrapper = styled.div`
  padding: ;
`;
const Layout = props => {
  return (
    <div>
      <GlobalStyle />
      <button>thing</button>
      <Wrapper>{props.children}</Wrapper>
      <button>thing</button>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
