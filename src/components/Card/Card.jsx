import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSpring, animated } from 'react-spring';

const CardWrapper = styled.div`
  ${tw`relative center inline-flex bg-card`};
  min-height: 150px;
  min-width: 50%;
  @media screen and (min-width: ${props => props.theme.screens.md}){
    min-width: 25%;
  }

`;

const CardContent = styled.div`
  ${tw`px-2 m-auto`}
`;
const CardTitle = styled.h3`
  ${tw`text-white w-full px-2 absolute pin-b `}
`;


const Card = ({ title, onClick, children, ...restProps }) => {
  return (
    <CardWrapper {...restProps}>
        {children && <CardContent>{children}</CardContent>}
        <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};


export default Card;
