import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSpring, animated } from 'react-spring';

const CardWrapper = styled.div`
  ${tw`relative center inline-flex`};
  min-height: ${props => props.minHeight || '100' }px;
  margin: 10px;
  `;

const CardBody = styled.div`
  ${tw`w-1/2 relative mx-1 bg-card`}
  min-width: 33vw;
  `;

const CardContent = styled.div`
  ${tw`px-2 m-auto`}

`;
const CardTitle = styled.h3`
  ${tw`text-white w-full px-2 absolute pin-b mb-1`}
`


const Card = ({ title, onClick, children, ...restProps }) => {
  return (
    <CardWrapper {...restProps} {...restProps}>
      <CardBody>
        {children && <CardContent>{children}</CardContent>}
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </CardWrapper>
  );
};
export default Card;

Card.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
