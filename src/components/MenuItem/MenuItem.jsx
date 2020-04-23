import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach-router';
import { useSpring, useChain, config, animated, useTrail } from 'react-spring';
import { useMeasure, usePrevious } from '../../utils';

const Title = styled.a`
  vertical-align: middle;
  span {
    padding-left: ${props => (props.hasIcon ? '0px' : '1.5ch')};
  }
`;

const Content = animated(styled.div`
  will-change: transform, opacity, height;
  margin-left: 6px;
  color: ${props => props.theme.color.dark};
  overflow: hidden;
`);

const Item = animated(styled.div`
  position: relative;
  margin: 1em;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.light} !important;
  text-align: right;
  &:hover {
    color: ${props => props.theme.light} !important;
  }
`);

const IconBtn = styled.i`
  padding: 0.5em;
  color: ${props => props.theme.color.light} !important;
`;

const MenuItem = ({ children, style, name, defaultOpen }) => {
  const [isOpen, setOpen] = useState(defaultOpen);

  // TODO: swing 3d should only happen on big screens

  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isOpen ? viewHeight + 30 : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });

  return <></>;
};

export default MenuItem;
