/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { FaBars, FaLink } from 'react-icons/fa';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring';
import { Link } from 'gatsby';
import data from '../../config/web/routes';

const MenuContainer = styled.nav`
  ${tw`w-8/9`}
  display: flex;
  flex-wrap: row;
  fontofacolor: black;
  justify-content: center;
  &::before {
    position: absolute;
    width: 100vw;
    height: 3em;
    content: '';
    background-color: white;
  }
`;
const MenuItem = styled(Link)`
  ${tw` mx-6 my-2 py-2 font-bold`}
  position: relative;
  display: block;
`;

const Navbar = () => {
  return (
    <MenuContainer>
      {data.map((item, idx) => (
        <MenuItem key={`nav-${idx}`}>{item.name}</MenuItem>
      ))}
    </MenuContainer>
  );
};
export default Navbar;
