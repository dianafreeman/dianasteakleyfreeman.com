import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { StoreContext } from '../../stores';

const CardWrapper = animated(styled(Link)`
  min-height: 200px;
  min-width: 200px;
  display: flex;
  position: relative;
  flex-basis: 100%;
  text-align: left;
  @media screen and (min-width: ${props => props.theme.screen.sm}) {
    flex-basis: ${props => (props.listIsEven ? '50%' : '100%')};
  }
`);

const CardContent = animated(styled.div`
  width: 100%;
  background-color: white;
  margin: 0.5em;
  z-index: 2;
`);

const ShadowWrapDiv = styled(CardContent)`
  position: absolute;
  width: calc(100% - 1em);
  height: calc(100% - 1em);
  background-color: ${props => props.color};
  z-index: 0;
`;

const CardTitle = styled.h1`
  color: ${props => props.color};
  width: 100%;
  margin-left: 0.5em;
  position: absolute;
  bottom: 0px;
  white-space: wrap;
`;

const ShadowWrap = ({ isHovered, shadowIdx, color}) => {
  const DEGREES = ['0', '-3', '-6'];
  const { transform } = useSpring({
    transform: `rotate(${isHovered ? [DEGREES[shadowIdx]] : 0}deg)`,
  });
  return <ShadowWrapDiv style={{ transform }} color={color} />;
};

const Card = ({ item, onMouseOver, onMouseLeave, children,  store = useContext(StoreContext), ...restProps }) => {
  const [isHovered, setHover] = useState(false);
  const { transform } = useSpring({
    transform: `rotate(${isHovered ? 3 : 0}deg)`,
  });
  return (
    <CardWrapper
      to={item.destination}
      onMouseOver={() => {
        onMouseOver && onMouseOver();
        setHover(true);
      }}
      onMouseLeave={() => {
        onMouseOver && onMouseLeave();
        setHover(false);
      }}
    >
      <CardContent style={{ transform }}>
        {children}
        <CardTitle>{item.title || item.name}</CardTitle>
      </CardContent>
      <ShadowWrap shadowIdx={2} isHovered={isHovered} color={store.theme.color.lightblue} />
      <ShadowWrap shadowIdx={1} isHovered={isHovered} color={store.theme.color.magenta} />
      <ShadowWrap shadowIdx={0} isHovered={isHovered} color={store.theme.color.orange} />
    </CardWrapper>
  );
};

export default observer(Card);

Card.PropTypes = {
  item: PropTypes.object.isRequired,
};
