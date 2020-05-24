import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div``;

const COMPONENT_NAME = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

COMPONENT_NAME.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default inject('store')(observer(COMPONENT_NAME));
