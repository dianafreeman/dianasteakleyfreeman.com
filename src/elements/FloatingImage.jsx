import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Image = styled.img`
  ${tw`w-auto h-full sm:w-3/4 md:w-3/5 lg:w-2/5 `}
  opacity: 0.8;
  height: 200px;
  ${props => props.floatDir}: 0;
`;

const FloatingImage = ({ src, floatDir }) => (
  <Image src={src} floatDir={floatDir} />
);

export default FloatingImage;

FloatingImage.propTypes = {
  src: PropTypes.string.isRequired,
  floatDir: PropTypes.string.isRequired,
};
