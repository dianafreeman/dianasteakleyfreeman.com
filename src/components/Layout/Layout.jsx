/* eslint-disable no-return-assign */
import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Masthead from '../Masthead';
import NavPanel from '../NavPanel';
import Helmet from './Helmet';
import GlobalStyle from '../GlobalStyle';

const Layout = ({ children, store, style, ...rest }) => {
  const springProps = useSpring({
    opacity: store.navIsOpen ? 0.15 : 1,
  });
  return (
    <div style={{ ...style, backgroundColor: '#393939', height: '100vh' }} {...rest}>
      <Helmet />
      <GlobalStyle fontFamily={store.activeFontFamily} />
      <Masthead>
        <NavPanel isOpen={store.navIsOpen} />
      </Masthead>
      <animated.div className="container-fluid" style={{ ...springProps, height: '90vh' }}>
        <div className="row" style={{ height: 'inherit' }}>
          {children}
        </div>
      </animated.div>
    </div>
  );
};
export default inject('store')(observer(Layout));

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};
