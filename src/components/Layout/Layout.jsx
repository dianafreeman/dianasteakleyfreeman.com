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

const Layout = ({ children, store, ...rest }) => {
  const { w } = useSpring({
    w: store.navIsOpen ? 30 : 0, // TODO: put this '30' value in STORE
  });
  return (
    <>
      <Helmet />
      {process.env.NODE_ENV !== 'storybook' && <GlobalStyle fontFamily={store.activeFontFamily} />}

      <AniViewWrap
        id="primary"
        style={{ transform: w.interpolate(width => `translateX(-${width}vw)`) }}
      >
        <Masthead />
        {children}
      </AniViewWrap>
      <NavPanel />
    </>
  );
};
export default inject('store')(observer(Layout));

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};
