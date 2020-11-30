import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  line: {
    stroke: 'black',
    strokeWidth: 3,
  },
  button: {
    width: '50px',
  },
  main: {
    padding: theme.spacing(3),
  },
}));

const TogglerLine = ({ isArrow, index, isOpen }) => {
  const x1s = isArrow ? (isOpen ? [50, 5, 50] : [0, 0, 0]) : [5, 5, 5];
  const y1s = isArrow ? (isOpen ? [15, 50, 85] : [50, 50, 50]) : [5, 50, 95];
  const x2s = isArrow ? (isOpen ? [100, 100, 100] : [50, 100, 50]) : [100, 100, 100];
  const y2s = isArrow ? (isOpen ? [50, 50, 50] : [15, 50, 85]) : [5, 50, 95];
  const classes = useStyles();

  const { x1, y1, x2, y2 } = useSpring({
    x1: x1s[index],
    y1: y1s[index],
    x2: x2s[index],
    y2: y2s[index],
  });
  return <animated.line x1={x1} y1={y1} x2={x2} y2={y2} className={classes.line} />;
};

const ThreeLineToggle = ({ onClick, isOpen = true }) => {
  const [isArrow, setIsArrow] = useState(false);
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      onClick={onClick}
      onMouseEnter={() => setIsArrow(true)}
      onMouseLeave={() => setIsArrow(false)}
    >
      <svg viewBox="0 0 100 100">
        <TogglerLine index={0} isOpen={isOpen} isArrow={isArrow} />
        <TogglerLine index={1} isOpen={isOpen} isArrow={isArrow} />
        <TogglerLine index={2} isOpen={isOpen} isArrow={isArrow} />
      </svg>
    </Button>
  );
};

export default ThreeLineToggle;
