import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Line = animated(styled.line`
  stroke: ${props => props.theme.color.black};
  stroke-width: 3;
`);

const TogglerButton = styled.div`
  text-align: right;
  background: none;
  padding: unset;
  font-family: inherit;
  width: 30px;
  margin: 5px;
  height: 30px;
  z-index: 999;
`;

const TogglerLine = ({ index, isOpen }) => {
  const x1s = [50, 0]; // [xOfFirstLine, xOfSecondLine]
  const y1s = isOpen ? [50, 50] : [0, 50]; // [yOfFirstLine, yOfSecondLine]
  const x2s = [50, 100]; // etc
  const y2s = isOpen ? [50, 50] : [100, 50]; // [yOfFirstLine, yOfSecondLine]

  const { x1, y1, x2, y2 } = useSpring({
    x1: x1s[index],
    y1: y1s[index],
    x2: x2s[index],
    y2: y2s[index],
  });
  return <Line x1={x1} y1={y1} x2={x2} y2={y2} index={index} />;
};

const ExpandToggler = ({ isOpen, setOpen , ...rest}) => {
  return (
    <TogglerButton onClick={setOpen} {...rest}>
      <svg viewBox="0 0 100 100">
        <TogglerLine index={0} isOpen={isOpen} />
        <TogglerLine index={1} isOpen={isOpen} />
      </svg>
    </TogglerButton>
  );
};
export default ExpandToggler;
