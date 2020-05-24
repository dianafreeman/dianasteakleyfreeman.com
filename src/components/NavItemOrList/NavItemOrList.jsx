import React, { useState, useContext } from 'react';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { useSpring, animated } from 'react-spring';
import { Link } from '@reach/router';
import { useMeasure, usePrevious } from '../../hooks';
import { ExpandToggler } from '../Togglers/index';
import HoverBorder from '../HoverBorder';
import theme from '../../context/ThemeContext/theme';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-div: ${props => (props.isTopLevel ? 'space-between' : 'end')};
  text-align: right;
`;

/** @jsx jsx */
const NavItemOrList = ({
  children,
  name,
  destination,
  defaultOpen = false,
  navDepth = false,
  ...restProps
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const previous = usePrevious(isExpanded);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isExpanded ? viewHeight + 30 : 0,
      opacity: isExpanded ? 1 : 0,
      transform: `translate3d(${isExpanded ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <>
      <HoverBorder>
        <Wrapper
          onMouseEnter={() => setHovered(!isHovered)}
          onMouseLeave={() => setHovered(!isHovered)}
          isTopLevel={navDepth === 0}
        >
          {children && (
            <ExpandToggler
              isExpanded={isExpanded}
              onClick={() => setExpanded(!isExpanded)}
              style={{ opacity: children ? 1 : 0.3, display: 'flex' }}
            />
          )}

          <Link
            css={css`
              text-decoration: none;
              vertical-align: middle;
              color: ${theme.color.dark};
              font-family: ${theme.fontFamily.nav} !important;
              font-weight: 600;
              span {
                padding-left: ${props => (props.haschildren ? '0px' : '1.5ch')};
              }
            `}
            to={destination || '#'}
            onClick={() => !!children && setExpanded(!isExpanded)}
          >
            {name}
          </Link>
        </Wrapper>
      </HoverBorder>
      <animated.div
        style={{
          opacity,
          height: isExpanded && previous === isExpanded ? 'auto' : height,
        }}
      >
        <animated.div
          css={css`
            position: relative;
            margin: 1em;
            display: block;
            text-decoration: none;
            color: ${theme.dark};
            text-align: right;
            &:hover {
              color: ${theme.dark};
            }
          `}
          style={{ transform }}
          {...bind}
          children={children}
        />
      </animated.div>
    </>
  );
};

export default NavItemOrList;
