/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import NavItemOrList from '../NavItemOrList';
import { useSpring, useChain, config, animated, useTrail } from 'react-spring';
import ROUTES from '../../config/web/routes';


const MenuContainer = styled.nav`
  color: ${props => props.theme.color.white} !important;
  justify-content: center;
  padding-top: 2em;
  min-width: fit-content;
  text-align: right !important;
  position: relative;
`;

const NavTree = () => {
  return (
    <MenuContainer>
        <NavItemOrList name="What's on this page?" />
        <NavItemOrList name="Settings">
              <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                <div
                  style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }}
                />
              </div>
            </NavItemOrList>
        <NavItemOrList name="world" />
        <NavItemOrList name={<span>🙀 something something</span>} />
    </MenuContainer>
  );
};
export default NavTree;
