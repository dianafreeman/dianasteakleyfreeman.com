import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const Wrapper = styled.div``;

const COMPONENT_NAME = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

COMPONENT_NAME.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default COMPONENT_NAME;
