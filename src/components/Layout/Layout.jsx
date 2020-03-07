/* eslint-disable no-return-assign */
import React from 'react';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import theme from '../../config/theme';
import Masthead from '../Masthead';
import NavPanel from '../NavPanel';

const AniViewWrap = animated(styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.dark};
  color: ${props => props.theme.color.light};
  padding: 1em;
  padding-top: 0;
  display: block;
  position: relative;
  z-index: 0;
`);
const MaybeThemeProvider = ({ children, theme }) =>
process.env.NODE_ENV === 'storybook' ? (
  <>{children}</>
) : (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const Layout = ({ children, store, ...rest }) => {
  const { w } = useSpring({
    w: store.navIsOpen ? 30 : 0,
  });
  return (
    <MaybeThemeProvider theme={theme}>
      <GlobalStyle />
      <AniViewWrap
        id="primary"
        style={{ transform: w.interpolate(width => `translateX(-${width}vw)`) }}
      >
        <Masthead isOpen={store.navIsOpen} onNavClick={store.toggleNavOpen} />
        {children}
      </AniViewWrap>
      <NavPanel isOpen={store.navIsOpen} wrapperWidth={w.interpolate(width => `${width}vw`)} />
    </MaybeThemeProvider>
  );
};
export default inject('store')(observer(Layout));

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  theme: PropTypes.object.isRequired,
};
