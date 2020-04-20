/* eslint-disable no-return-assign */
import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import Masthead from '../Masthead';
import NavPanel from '../NavPanel';
import { AniViewWrap } from './styled';
import Helmet from './Helmet';
import GlobalStyle from '../GlobalStyle';
import NavToggler from '../Togglers/NavToggler';

const Layout = ({ children, store, ...rest }) => {
  return (
    <>
      <Helmet />
      {process.env.NODE_ENV !== 'storybook' && <GlobalStyle fontFamily={store.activeFontFamily} />}
        <Masthead />
        <NavToggler onClick={() => store.toggleNavOpen()} isOpen={store.navIsOpen} />

        {children}
      <NavPanel isOpen={store.navIsOpen} />
    </>
  );
};
export default inject('store')(observer(Layout));

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};
