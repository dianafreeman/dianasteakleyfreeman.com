import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { Line, TogglerButton } from './styled'

const TogglerLine = ({ index, isExpanded }) => {
  const x1s = [50, 0]; // [xOfFirstLine, xOfSecondLine]
  const y1s = isExpanded ? [50, 50] : [0, 50]; // [yOfFirstLine, yOfSecondLine]
  const x2s = [50, 100]; // etc
  const y2s = isExpanded ? [50, 50] : [100, 50]; // [yOfFirstLine, yOfSecondLine]

  const { x1, y1, x2, y2 } = useSpring({
    x1: x1s[index],
    y1: y1s[index],
    x2: x2s[index],
    y2: y2s[index],
  });
  return <Line x1={x1} y1={y1} x2={x2} y2={y2} index={index} />;
};

const ExpandToggler = ({ isExpanded, onClick , ...rest}) => {
  return (
    <TogglerButton onClick={onClick} {...rest}>
      <svg viewBox="0 0 100 100">
        <TogglerLine index={0} isExpanded={isExpanded} />
        <TogglerLine index={1} isExpanded={isExpanded} />
      </svg>
    </TogglerButton>
  );
};
export default ExpandToggler;
