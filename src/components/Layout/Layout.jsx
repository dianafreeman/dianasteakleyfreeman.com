/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import NavPanel from '../NavPanel';
import NavToggler from '../NavToggler';
import { data as config } from '../../config/web/data';
import Provider from '../Context';

const AniViewWrap = animated(styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  padding: 2em;
  display: block;
  position: relative;
  z-index: 0;
`);

const ViewAnimator = ({ navIsOpen, children }) => {
  const { x, rks } = useSpring({
    x: navIsOpen ? 25 : 0,
    rks: navIsOpen ? [45, 10, 1.1] : [0, 0, 1],
  });
  return (
    <animated.div style={{ transform: x.interpolate(x => `translate3d(-${x}vw,0,0)`) }}>
      {/* <animated.div
        style={{
          transform: rks.interpolate((r,k,s) => `rotateY(-${r}deg) skew(0, -${k}deg) scale3d(${s}, 1, 1)`),
          transformOrigin: '0 -1em'
        }}
      > */}
      {children}
      {/* </animated.div> */}
    </animated.div>
  );
};

const Layout = props => {
  const { pageTitle, children, backgroundColor = 'red', contentDescription } = props;
  const [navOpen, set] = useState(false);
  return (
    <Provider value="theme">
      <GlobalStyle theme={props.theme} />
      <NavToggler onClick={() => set(!navOpen)} isOpen={navOpen} />
      <NavPanel isOpen={navOpen} />
      <AniViewWrap id="primary">
        <ViewAnimator navIsOpen={navOpen}>{children}</ViewAnimator>
      </AniViewWrap>
    </Provider>
  );
};
export default Layout;

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  theme: PropTypes.object.isRequired,
};
