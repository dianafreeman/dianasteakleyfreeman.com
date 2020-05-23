import React from 'react';
import PropTypes from 'prop-types';
import { useTrail, animated } from 'react-spring';
import styled from '@emotion/styled';

const MetaLabel = ({ children, ...rest }) => <animated.p {...rest}>{children}</animated.p>;
const MetaContent = ({ children, ...rest }) => <animated.span {...rest}>{children}</animated.span>;

const MetaBox = ({ items, children, ...rest }) => {
  return (
    <animated.div {...rest}>
      {items.map((t, idx) => (
        <MetaLabel key={`MetaLabel-${idx}-${t.value.toLowerCase().replace(' ', '-')}`}>
          {t.label}
          <MetaContent key={`MetaContent-${idx}-${t.value.toLowerCase().replace(' ', '-')}`}>
            {t.value}
          </MetaContent>
        </MetaLabel>
      ))}
    </animated.div>
  );
};

MetaBox.propTypes = {};

export default MetaBox;
