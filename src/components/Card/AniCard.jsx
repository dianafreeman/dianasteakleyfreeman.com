import React, { useRef, useEffect, useState } from 'react';
import { animated } from 'react-spring';
import Card from './Card';

const AniCard = ({ styles, ...restProps }) => {
  const Wrapper = animated(Card);
  return <Wrapper style={styles} {...restProps} />;
};

export default AniCard;
