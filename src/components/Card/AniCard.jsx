import React, { useRef, useEffect, useState } from 'react';
import { animated } from 'react-spring';

const AniCard = ({ children, styles, ...restProps }) => {
  const Wrapper = animated(Card);
  return <Wrapper {...restProps} style={styles} />;
};
