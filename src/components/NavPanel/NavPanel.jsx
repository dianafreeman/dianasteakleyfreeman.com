import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';
import { useMeasure } from '@hooks';

import NavItemOrList from '../NavItemOrList';
import NavToggler from '../Togglers/NavToggler';
import ButtonGroup from '../ButtonGroup';

const WHATS_ON_THIS_PAGE = [
  {
    title: 'Projects',
    scrollTarget: '/#heading-projects',
  },
  {
    title: 'Bio',
    scrollTarget: '/#heading-bio',
  },
  {
    title: 'Writing',
    scrollTarget: '/#heading-writing',
  },
  {
    title: 'Science',
    scrollTarget: '/#heading-science',
  },
];

const ToggleContainer = animated(styled.div`
  z-index: 999;
  position: relative;
  left: 10em;
`);

const FixedContainer = animated(styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  padding-right: unset;
`);

const NavWrapper = animated(styled.div`
  padding: 1em;
  padding-right: unset;
  overflow: hidden;
  background-color: #d5d5d5;
  height: 100vh;
  position: relative;
  top: 0;
  right: 0;
`);

const CustomizePanel = () => {
  const fontOptions = ['Default', 'OpenDyslexic'];
  const sizeOptions = ['+', ':', '-'];
  const sizeCustomFlex = [2, 1, 2];
  const animationOptions = ['ON', 'OFF'];
  return (
    <>
      <ButtonGroup label="Font" options={fontOptions} />
      <ButtonGroup
        label="Text Size"
        activateIdx={1}
        options={sizeOptions}
        customFlex={sizeCustomFlex}
      />
      <ButtonGroup label="Animations" activateIdx={0} options={animationOptions} />
    </>
  );
};

const NavPanel = ({ isOpen = false, setOpen = () => false, ...rest }) => {
  const { opacity, w } = useSpring({
    opacity: isOpen ? 1 : 0,
    w: isOpen ? 30 : 0,
  });
  console.log(rest);

  // const [idxOfExpanded, setExpanded] = useState(2); // set to customize panel by default

  return (
    <>
      <FixedContainer className="col-sm-10 col-md-5 col-lg-3">
        <ToggleContainer
          style={{ position: 'absolute', right: w.interpolate(width => `${width}vw`) }}
        >
          <NavToggler onClick={() => setOpen()} isOpen={isOpen} />
        </ToggleContainer>
        <NavWrapper
          isOpen={isOpen}
          style={() => {
            opacity, w.interpolate(width => `${width}vw`);
          }}
        >
          <nav>
            <NavItemOrList navDepth={0} name="What's on this page?">
              {WHATS_ON_THIS_PAGE.map((h, idx) => (
                <NavItemOrList key={`on-this-page-${idx}`} name={h.title} />
              ))}
            </NavItemOrList>
            <NavItemOrList navDepth={0} name="Recent Posts">
              <NavItemOrList name="a post 1" style={{ background: 'red' }} />
              <NavItemOrList name="a post 2" />
              <NavItemOrList name="a post 3" />
            </NavItemOrList>
            <NavItemOrList navDepth={0} name="Customize">
              <CustomizePanel />
            </NavItemOrList>
          </nav>
        </NavWrapper>
      </FixedContainer>
    </>
  );
};

export default NavPanel;
