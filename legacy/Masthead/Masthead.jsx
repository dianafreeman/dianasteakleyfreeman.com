import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import styled from '@emotion/styled';
=======
import styled from 'styled-components';
>>>>>>> restart basic ui, refactor pages for SPA

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
  border-bottom: 2px solid white;
`;
<<<<<<< HEAD
// isOpen={defaultNavOpen || store.navIsOpen} onNavClick={store.toggleNavOpen}
const Masthead = ({ children, onNavClick, title, isOpen, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
=======
//isOpen={defaultNavOpen || store.navIsOpen} onNavClick={store.toggleNavOpen}
const Masthead = ({ children, onNavClick, title, isOpen, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
>>>>>>> restart basic ui, refactor pages for SPA
};

Masthead.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Masthead;
