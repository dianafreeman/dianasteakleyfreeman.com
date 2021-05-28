import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import useLayout from '@project/hooks/useLayout';
import { a } from '@react-spring/web';
import { useSpring } from 'react-spring';

const Nav = styled(a.nav)`
  position: absolute;
  z-index: 9999;
  width: ${(props) => (props.isOpen ? `auto` : '0')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const NavItem = styled(a.li)`
  list-style: none;
  margin: 0 1em;
`;

const NavGroup = styled(a.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NavBrand = styled(a.div)`
  text-align: center;
`;
const BrandText = styled(a.h4)`
  text-align: center;
`;

const Navigation = () => {
  const { colorSprings } = useLayout();
  const [isOpen, setOpen] = useState(false);

  const { width } = useSpring({
    width: isOpen ? 'auto' : 0, // "auto" wont work
  });
  return (
    <Nav
      style={{
        backgroundColor: colorSprings.background,
        width,
      }}
    >
      <NavGroup>
        <NavItem>Projects</NavItem>
        <NavItem>Science</NavItem>
      </NavGroup>
      <NavBrand>
        <BrandText>Diana M. Steakley-Freeman</BrandText>
      </NavBrand>
      <NavGroup>
        <NavItem>
          <a href="">
            <AiFillLinkedin />
          </a>
        </NavItem>
        <NavItem>
          <a href="">
            <AiFillGithub />
          </a>
        </NavItem>
      </NavGroup>
    </Nav>
  );
};

export default Navigation;
