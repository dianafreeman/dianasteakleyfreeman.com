import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { useSpring, animated } from 'react-spring';
import NavItemOrList from '../NavItemOrList';
import ButtonGroup from '../ButtonGroup'

const Wrapper = animated(styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background-color: #d5d5d5;
`);

const Content = animated(styled.div`
  text-align: right;
  position: absolute;
  padding: 0 0.5em;
  margin: 0.5em;
  top: 0;
  right: 0;
  color: #393939;
  font-weight: 600;
  font-family: Open Sans, sans-serif;
  display: flex;
  flex-flow: column;
`);

const CustomizePanel = () => {

  const fontOptions = ["Default", "OpenDyslexic" ];
  const sizeOptions = ['+', ':', '-'];
  const sizeCustomFlex = [2, 0, 2];

  return (
    <>
    <ButtonGroup options={fontOptions} />
    <ButtonGroup options={sizeOptions} customFlex={sizeCustomFlex} />
    </>
    );

};
const NavPanel = ({ wrapperWidth, store }) => {
  const { opacity } = useSpring({
    opacity: store.navIsOpen ? 1 : 0,
  });

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
    <Wrapper isOpen={store.navIsOpen} style={{ width: wrapperWidth }}>
      <Content
        style={{
          opacity,
          width: store.navIsOpen ? '100%' : '0px',
          zIndex: store.navIsOpen ? '99' : '-99',
          overflow: 'hidden',
        }}
      >
        <NavItemOrList style={{ fontWeight: 900 }} name="What's on this page?">
          {headings.map((h, idx) => (
            <NavItemOrList key={`on-this-page-${idx}`} name={h.title} />
          ))}
        </NavItemOrList>
        <NavItemOrList style={{ fontWeight: 900 }} name="Recent Posts" />
        <NavItemOrList style={{ fontWeight: 900 }} name="Customize">
          <CustomizePanel />
        </NavItemOrList>
      </Content>
    </Wrapper>
  );
};

export default inject('store')(observer(NavPanel));
