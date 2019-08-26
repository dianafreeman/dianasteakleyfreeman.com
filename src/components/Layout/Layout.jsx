/* eslint-disable no-return-assign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { useSpring, animated } from 'react-spring';
import Masthead from '../Masthead';
import NavPanel from '../NavPanel';
import { NavContext } from '../../context/NavContext';
import theme from '../../context/ThemeContext/theme';
import Helmet from './Helmet';
import 'open-dyslexic';
import './Style.scss';

const Layout = ({ children, style, ...rest }) => {
  const [isOpen, setOpen] = useContext(NavContext);
  const springProps = useSpring({
    opacity: isOpen ? 0.15 : 1,
  });

  return (
    <div style={{ ...style, backgroundColor: theme.color.dark, minHeight: '100vh' }} x {...rest}>
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
            font-family: ${theme.fontFamily.heading};
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
            font-family: ${theme.fontFamily.nav};
          }

          body,
          p,
          span,
          a,
          li,
          ul {
            font-family: ${theme.fontFamily.body};
            font-weight: 300;
          }
        `}
      />
      <Helmet />
      <Masthead>
        <NavPanel setOpen={() => setOpen(!isOpen)} isOpen={isOpen} />
      </Masthead>
      <animated.div className="container-fluid" style={{ ...springProps, minHeight: '90vh' }}>
        <div className="row" style={{ height: 'inherit' }}>
          {children}
        </div>
      </animated.div>
    </div>
  );
};
// export default inject('store')(observer(Layout));
export default Layout;

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};
