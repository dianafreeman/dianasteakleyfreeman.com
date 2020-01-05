/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from '../../../tailwind';
import { useSpring, animated } from 'react-spring';

const CardWrapper = styled(Link)`
  ${tw`shadow-lg px-1 py-1 no-underline rounded-lg text-white text-center relative w-full md:w-1/3 lg:w-1/3 xl:w-1/4`};
  min-height: 250px;
`

const CardTitle = styled.h3`
  ${tw`font-serif`}
  font-weight: 700;
`;


const CardContent = styled.div`
  ${tw`relative h-full`}
  background-color: ${props => props.backgroundColor};
  `

const Card = ({ title, backgroundColor = 'white', onClick, children}) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardContent backgroundColor={backgroundColor}>
        {title && <CardTitle>{title}</CardTitle>}
        {children}
      </CardContent>
    </CardWrapper>
  );
};
export default Card;

Card.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};
