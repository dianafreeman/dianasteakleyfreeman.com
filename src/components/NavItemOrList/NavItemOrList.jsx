import React, { useState, useContext } from 'react';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring';
import { useMeasure, usePrevious } from '../../hooks';
import { ExpandToggler } from '../Togglers/index';
import { Wrapper, Title, Content, Item, LinkBorder } from './styled';
import HoverBorder from '../HoverBorder';

const NavItemOrList = ({
  children,
  name,
  destination,
  defaultOpen = false,
  navDepth = false,
  store,
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

          <Title
            isTopLevel={navDepth === 0}
            to={destination || '#'}
            onClick={() => !!children && setExpanded(!isExpanded)}
          >
            {name}
          </Title>
        </Wrapper>
      </HoverBorder>
      <Content
        style={{
          opacity,
          height: isExpanded && previous === isExpanded ? 'auto' : height,
        }}
      >
        <Item style={{ transform }} {...bind} children={children} />
      </Content>
    </>
  );
};

export default inject('store')(observer(NavItemOrList));
