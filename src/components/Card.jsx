/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from '../../tailwind';
import { useSpring, animated } from 'react-spring';

const CardWrapper = styled(Link)`
  ${tw`shadow-lg px-1 py-1 no-underline rounded-lg text-white text-center relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3`};
  display: inline;
`


const TextWrapper = styled.div`
  ${tw`font-sans text-small `};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const CardTitle = styled.h3`
  ${tw`font-serif`}
  font-weight: 700;

`;
const CardFooter = styled.div`
  ${tw`absolute w-full font-sans`}
  background-color: ${colors['grey-dark']};
  background: linear-gradient(to right,#474d51,#273238);
  bottom: 0;
`

const CardImage = styled(Img)`
  ${tw`absolute pin-t h-full`}
  z-index: -1;
  &:after{
    content: ' ';
    background-color: rgba(${props => props.overlay}, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const CardContent = styled.div`
  ${tw`relative h-full`}
  background-color: ${props => props.bg}98;

  `

const Card = ({ title, bg, media , slug, color, type}) => {
  return (
    <CardWrapper to={`/${type}/${slug}`}>
    <CardContent bg={bg}>
        <CardImage fluid={media.fluid} overlay={color}/>
        <CardFooter>
        <CardTitle>{title}</CardTitle>
        </CardFooter>
        </CardContent>
    </CardWrapper>
  );
};
export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired
};
