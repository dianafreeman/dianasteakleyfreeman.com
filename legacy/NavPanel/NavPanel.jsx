<<<<<<< HEAD
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
  position: relative;
  right: 300px;
`);

const FixedContainer = animated(styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #d5d5d5;
`);

const NavWrapper = animated(styled.nav`
  padding: 1em;
  overflow: hidden;
`);
=======
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { useSpring, animated } from 'react-spring';
import NavItemOrList from '../NavItemOrList';
import ButtonGroup from '../ButtonGroup';
import { Wrapper, Content } from './styled';
>>>>>>> restart basic ui, refactor pages for SPA

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

<<<<<<< HEAD
const NavPanel = ({ isOpen, setOpen }) => {
  const { opacity, w } = useSpring({
    opacity: isOpen ? 1 : 0,
    w: isOpen ? 30 : 0,
  });
  // const [idxOfExpanded, setExpanded] = useState(2); // set to customize panel by default

  return (
    <>
      <ToggleContainer style={{ right: w.interpolate(width => `${width}vw`) }}>
        <NavToggler onClick={() => setOpen()} isOpen={isOpen} />
      </ToggleContainer>
      <FixedContainer style={{ opacity }} className="col-sm-10 col-md-5 col-lg-3">
        <NavWrapper isOpen={isOpen} style={{ width: w.interpolate(width => `${width}vw`) }}>
          <NavItemOrList navDepth={0} name="What's on this page?">
            {WHATS_ON_THIS_PAGE.map((h, idx) => (
=======
const NavPanel = ({ isOpen }) => {
  const { opacity, w } = useSpring({
    opacity: isOpen ? 1 : 0,
    w: isOpen ? 30 : 0, // TODO: put this '30' value in STORE
  });

  const [idxOfExpanded, setExpanded] = useState(2); // set to customize panel by default

  const headings = [
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

  return (
    <Wrapper isOpen={isOpen} style={{ width: w.interpolate(width => `${width}vw`) }}>
      <nav>
        <Content
          style={{
            opacity,
            width: isOpen ? '100%' : '0px',
            zIndex: isOpen ? '99' : '-99',
            overflow: 'hidden',
          }}
        >
          <NavItemOrList navDepth={0} name="What's on this page?">
            {headings.map((h, idx) => (
>>>>>>> restart basic ui, refactor pages for SPA
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
<<<<<<< HEAD
        </NavWrapper>
      </FixedContainer>
    </>
=======
        </Content>
      </nav>
    </Wrapper>
>>>>>>> restart basic ui, refactor pages for SPA
  );
};

export default NavPanel;
