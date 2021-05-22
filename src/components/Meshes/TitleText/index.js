import * as THREE from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import useInterval from '@use-it/interval';
import { ContactShadows, Html, Center, Plane, Text } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';

import { a } from '@react-spring/three';
import { Flex, Box, useReflow } from '@react-three/flex';
import PoppinsFont from '@fonts/2d/Poppins/Poppins-Bold.ttf';
import useTheme from '@hooks/useTheme';

const AniText = a(Text);

const TitleText = ({ text = "I'm Diana", ...props }) => {
  const { colors, breakpoints } = useTheme();
  const { viewport } = useThree();

  const mesh = useRef();
  const isSmallScreen = viewport.width < breakpoints.sm ? '100%' : '50%';

  // useFrame(() => mesh.current.geometry.center());
  // useEffect(() => void mesh.current.geometry.translate(1, 0, 0), []); // .geometry.center(), [mesh.current]);
  return (
    <AniText
      ref={mesh}
      color={colors.text}
      font={PoppinsFont}
      fontSize={isSmallScreen ? 10 : 15}
      lineHeight={1}
      textAlign="center"
      anchorX="center"
      anchorY="center"
      outlineWidth={0.1}
      outlineColor={colors.background}
      {...props}
    >
      {text}
      <meshStandardMaterial />
    </AniText>
  );
};

export default TitleText;
