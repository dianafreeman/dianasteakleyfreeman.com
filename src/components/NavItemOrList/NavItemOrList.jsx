/* eslint-disable react/prop-types */
import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { useSpring, useChain, config, animated, useTrail } from 'react-spring';
import { useMeasure, usePrevious } from '../../utils';
import Link from 'gatsby'

const Wrapper = styled.div``;
const Title = styled.a`
  vertical-align: middle;
  span {
    padding-left: ${props => (props.hasIcon ? '0px' : '1.5ch')};
  }
`;

const Content = animated(styled.div`
  will-change: transform, opacity, height;
  margin-left: 6px;
  color: ${props => props.theme.color.black};
  overflow: hidden;
`);

const Item = animated(styled.div`
  position: relative;
  margin: 1em;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.light} !important;
  text-align: right;
  &:hover {
    color: ${props => props.theme.light} !important;
  }
`);

const IconBtn = styled.i`
  padding: 0.5em;
  color: ${props => props.theme.color.white} !important;
`;

const NavItemOrList = ({ style, children, name, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);

  // TODO: swing 3d should only happen on big screens

  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isOpen ? viewHeight + 30 : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  return (
    <Wrapper>
      <Title style={style} hasIcon={!!children}>
        <span onClick={() => children && setOpen(!isOpen)}>
          <IconBtn
            className={children ? `fas fa-chevron-${isOpen ? 'down' : 'right'}` : ''}
            style={{ ...style, ...isOpen, opacity: children ? 1 : 0.3 }}
          />
          {name}
        </span>
      </Title>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <Item style={{ transform }} {...bind} children={children} />
      </Content>
    </Wrapper>
  );
};

export default NavItemOrList;
