import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { rightArrow, leftArrow, menuIcon, closeMenuIcon } from './shapes';

const useStyles = makeStyles({
  line: {
    stroke: 'black',
    strokeWidth: 3,
  },
});

export const Line = ({ points }) => {
  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
  const springPositionProps = useSpring({ x1, y1, x2, y2 });
  const classes = useStyles();

  return <animated.line {...springPositionProps} className={classes.line} />;
};

Line.propTypes = {
  index: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }))
    .isRequired,
};

const AnimatedLines = ({ size, shape, ...rest }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 100 100" {...rest}>
      {shape.map((ln) => (
        <Line points={ln} />
      ))}
    </svg>
  );
};

AnimatedLines.propTypes = {
  shape: PropTypes.oneOf(rightArrow, leftArrow, menuIcon, closeMenuIcon).isRequired,
  size: PropTypes.number,
};

AnimatedLines.defaultProps = {
  shape: menuIcon,
  size: 100,
};

export default AnimatedLines;
