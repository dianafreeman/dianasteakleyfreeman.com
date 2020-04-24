import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
  border-bottom: 2px solid white;
`;
// isOpen={defaultNavOpen || store.navIsOpen} onNavClick={store.toggleNavOpen}
const Masthead = ({ children, onNavClick, title, isOpen, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Masthead.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Masthead;
