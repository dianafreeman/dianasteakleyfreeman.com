import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { LinkBorder, Wrapper } from './styled';

const HoverBorder = ({ children, double = false }) => {
  const [isHovered, set] = useState(false);
  const { opacity } = useSpring({
    opacity: isHovered ? 1 : 0,
  });

  return (
    <Wrapper onMouseOver={() => set(true)} onMouseLeave={() => set(false)}>
      {children}
      <LinkBorder style={{ opacity }} double={double}> </LinkBorder>
    </Wrapper>
  );
};

HoverBorder.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default HoverBorder;
