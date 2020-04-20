import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { useSpring, animated } from 'react-spring';
import NavItemOrList from '../NavItemOrList';
import ButtonGroup from '../ButtonGroup';
import { Wrapper, Content } from './styled';

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
        </Content>
      </nav>
    </Wrapper>
  );
};

export default NavPanel;
