/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
import { useMeasure, usePrevious } from '../../utils';
import { ExpandToggler } from '../Togglers/index';
import theme from '../../config/theme';

const WrapperWithAfter = styled.div`
  position: relative;
  display: flex;
  justify-content: ${props => (props.haschildren ? 'space-between' : 'end')};
  text-align: right;
}`;
/*
orange
magenta
lightblue
*/

const Title = styled(Link)`
  font-size: 20px;
  font-family: ${props => props.font};
  text-decoration: none;
  font-weight: ${props => (props.haschildren ? '800' : '400')};
  vertical-align: middle;
  color: #393939;
  span {
    padding-left: ${props => (props.haschildren ? '0px' : '1.5ch')};
  }
  ${props =>
    props.haschildren &&
    `&::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right,
      ${theme.color.lightblue} 0%,
      ${theme.color.lightblue} 33%,
      ${theme.color.magenta} 33%,
      ${theme.color.magenta} 66%,
      ${theme.color.orange} 66%,
      ${theme.color.orange} 100%);
      `}
`;

const Content = animated(styled.div`
  color: ${props => props.theme.color.dark};
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

const NavItemOrList = ({
  style,
  children,
  name,
  destination,
  defaultOpen = false,
  store,
  ...restProps
}) => {
  const [isExpanded, setExpanded] = useState(true);
  const [isHovered, setHovered] = useState(true);

  const { afterBgColor, afterHeight } = useSpring({
    afterBgColor: isHovered ? `` : 'gray',
    afterHeight: isHovered ? '1px' : '0px',
  });

  const previous = usePrevious(isExpanded);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isExpanded ? viewHeight + 30 : 0,
      opacity: isExpanded ? 1 : 0,
      transform: `translate3d(${isExpanded ? 0 : 20}px,0,0)`,
    },
  });
  return (
    <>
      <WrapperWithAfter haschildren={!!children} afterBgColor={afterBgColor}>
        {children && (
          <ExpandToggler
            isExpanded={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
            style={{ opacity: children ? 1 : 0.3 }}
          />
        )}
        <Title
          font={theme.fontFamily.heading}
          to={destination || '#'}
          style={style}
          haschildren={!!children}
        >
          {name}
        </Title>
      </WrapperWithAfter>
      <Content style={{ opacity, height: isExpanded && previous === isExpanded ? 'auto' : height }}>
        <Item style={{ transform }} {...bind} children={children} />
      </Content>
    </>
  );
};

export default inject('store')(observer(NavItemOrList));
