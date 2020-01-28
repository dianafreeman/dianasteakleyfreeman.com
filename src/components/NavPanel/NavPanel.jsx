import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import NavItemOrList from '../NavItemOrList'

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  text-align: right;
  color: white;
  z-index: ${props => props.isOpen ? '3' : '-1'};
  ${props => !props.isOpen && `width: 0px;`}
`;

const Content = animated(styled.div`
  padding: 2em;
  height: 100%;
  font-weight: 600;
  font-family: Open Sans, sans-serif;
`);

const NavPanel = ({ children, isOpen, onToggleClick }) => {
  const { opacity, width } = useSpring({
    opacity: isOpen ? 1 : 0,
  });
  return (
    <Wrapper isOpen={isOpen}>
      <Content style={{ opacity }} >
        <NavItemOrList name="What's on this page?" >
            <NavItemOrList name={'Projects'} />
            <NavItemOrList name={'Bio'} />
            <NavItemOrList name={'Blog'} />
            <NavItemOrList name={'Contact'} />
          </NavItemOrList>
        <NavItemOrList name="name 2"/>
        <NavItemOrList name="name 3"/>
      </Content>
    </Wrapper>
  );
};

export default NavPanel;
