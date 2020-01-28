import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Line = animated(styled.line`
  stroke: ${props => props.theme.color.white};
  stroke-width: 3;
`);

const TogglerButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  padding: unset;
  font-family: inherit;
  width: 30px;
  margin: 5px;
  height: 30px;
  z-index: 999;
`;

const TogglerLine = ({ isHovered, index , isOpen }) => {
  const x1s = isHovered ? (isOpen ? [50, 5, 50]  : [0, 0, 0]) : [5, 5, 5];
  const y1s = isHovered ? (isOpen ? [15, 50, 85] : [50, 50, 50]) : [5, 50, 95];
  const x2s = isHovered ? (isOpen ? [100, 100, 100] : [50, 100, 50]) : [100, 100, 100];
  const y2s = isHovered ? (isOpen ? [50, 50, 50] : [15, 50, 85]) : [5, 50, 95];

  const { x1, y1, x2, y2 } = useSpring({
    x1: x1s[index],
    y1: y1s[index],
    x2: x2s[index],
    y2: y2s[index],
  });
  return <Line x1={x1} y1={y1} x2={x2} y2={y2} />;
};

const NavToggler = ({ onClick, isOpen }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <TogglerButton
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg viewBox="0 0 100 100">
        <TogglerLine index={0} isOpen={isOpen} isHovered={isHovered} />
        <TogglerLine index={1} isOpen={isOpen} isHovered={isHovered} />
        <TogglerLine index={2} isOpen={isOpen} isHovered={isHovered} />
      </svg>
    </TogglerButton>
  );
};
export default NavToggler;
