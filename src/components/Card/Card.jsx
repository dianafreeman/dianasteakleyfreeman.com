import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { CardStage, CardWrapper, CardContent, CardTitle, ShadowWrapDiv } from './styled';

const ShadowWrap = ({ isHovered, shadowIdx }) => {
  const DEGREES = ['0', '-3', '-6'];
  const colors = ['lightblue', 'magenta', 'orange'];
  const { transform } = useSpring({
    transform: `scale(${isHovered ? 0.95 : 0.7}) rotate(${
      isHovered ? [DEGREES[shadowIdx]] : 0
    }deg)`,
  });
  return <ShadowWrapDiv style={{ transform }} colorKey={colors[shadowIdx]} />;
};

const Card = ({ item, onMouseOver, onMouseLeave, children, ...restProps }) => {
  const [isHovered, setHover] = useState(false);
  const { transform } = useSpring({
    transform: `rotate(${isHovered ? 3 : 0}deg)`,
  });
  return (
    <CardStage
      onMouseOver={() => {
        onMouseOver && onMouseOver();
        setHover(true);
      }}
      onMouseLeave={() => {
        onMouseOver && onMouseLeave();
        setHover(false);
      }}
      {...restProps}
    >
      <ShadowWrap aria-hidden="true" shadowIdx={2} isHovered={isHovered} />
      <ShadowWrap aria-hidden="true" shadowIdx={1} isHovered={isHovered} />
      <ShadowWrap aria-hidden="true" shadowIdx={0} isHovered={isHovered} />
      <CardWrapper to={item.destination}>
        <CardContent style={{ transform }}>
          {children}
          <CardTitle>{item.title || item.name}</CardTitle>
        </CardContent>
      </CardWrapper>
    </CardStage>
  );
};

export default Card;

Card.PropTypes = {
  item: PropTypes.object.isRequired,
};
