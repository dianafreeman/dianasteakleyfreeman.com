/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
import { useMeasure, usePrevious } from '../../utils';
import { ExpandToggler } from '../Buttons/index';
import theme from '../../config/theme'
import { StoreContext } from '../../stores';

const Wrapper = styled.div`
  ${props => `
  margin: 0.4em 0;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, ${props.theme.color.lightblue} 0%, ${props.theme.color.lightblue} 33%, ${props.theme.color.magenta} 33%, ${props.theme.color.magenta} 66%, ${props.theme.color.orange} 66%, ${props.theme.color.orange} 100%);
  `}
`;
/*
orange
magenta
lightblue
*/

const Title = styled(Link)`
  font-size: 1.5em;
  font-family: ${props => props.font};
  text-decoration: none;
  font-weight: ${props => (props.haschildren ? '800' : '400')};
  vertical-align: middle;
  color: #393939;
  span {
    padding-left: ${props => (props.haschildren ? '0px' : '1.5ch')};
  }
`;

const Content = animated(styled.div`
  color: ${props => props.theme.color.black};
  overflow: hidden;
`);

const Item = animated(styled.div`
  position: relative;
  margin: 1em;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.black} !important;
  text-align: right;
  &:hover {
    color: ${props => props.theme.black} !important;
  }
`);

const Toggler = styled(ExpandToggler)`
  float: left;
`;

const NavItemOrList = ({
  style,
  children,
  name,
  destination,
  defaultOpen = false,
  ...props
}) => {

  const [isHovered, setHovered] = useState(true);
  const store = useContext(StoreContext)

  const { background } = useSpring({
    background: isHovered
      ? `linear-gradient(to right,
       ${theme.color.lightblue} 0%,
       ${theme.color.lightblue} 33%,
       ${theme.color.magenta} 33%,
       ${theme.color.magenta} 66%,
       ${theme.color.orange} 66%,
       ${theme.color.orange} 100%)`
      : 'none',
  });

  const previous = usePrevious(store.navIsOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: store.navIsOpen ? viewHeight + 30 : 0,
      opacity: store.navIsOpen ? 1 : 0,
      transform: `translate3d(${store.navIsOpen ? 0 : 20}px,0,0)`,
    },
  });
  return (
    <>
      <Wrapper haschildren={!!children} style={{ background }}>
        <Title font={theme.fontFamily.heading} to={destination || '/'} style={style} haschildren={!!children}>
          {children && (
            <Toggler
              isOpen={store.navIsOpen}
              setOpen={() => store.toggleNavOpen()}
              style={{ opacity: children ? 1 : 0.3 }}
            />
          )}
          {name}
        </Title>
      </Wrapper>
      <Content style={{ opacity, height: store.navIsOpen && previous === store.navIsOpen ? 'auto' : height }}>
        <Item style={{ transform }} {...bind} children={children} />
      </Content>
    </>
  );
};

export default NavItemOrList;
