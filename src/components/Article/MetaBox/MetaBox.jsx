import React from 'react';
import PropTypes from 'prop-types';
import { useTrail, animated } from 'react-spring';
import styled from '@emotion/styled';

const MetaLabel = ({ children, ...rest }) => <animated.p {...rest}>{children}</animated.p>;
const MetaContent = ({ children, ...rest }) => <animated.span {...rest}>{children}</animated.span>;

const MetaBox = ({ items, children, ...rest }) => {
  // const config = { mass: 5, tension: 2000, friction: 200 };
  // const trail = useTrail(items.length, {
  //   config,
  //   to: { transform: 'scale3d(1, 1, 1)', opacity: 1 },
  //   from: { transform: 'scale3d(0.80, 0.80, 0.80)', opacity: 0 },
  // });

  return (
    <animated.div {...rest}>
      {items.map(t => (
        <MetaLabel>
          {t.label}
          <MetaContent>{t.value}</MetaContent>
        </MetaLabel>
      ))}
    </animated.div>
  );
};

MetaBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MetaBox;
