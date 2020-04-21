import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

import styled from 'styled-components';

const Wrapper = animated(styled.div`
  width: 100%;
  margin: 0.5em 0;
  display: flex;
  margin: 0.5em 0;
  background: white;
  width: 100%;
  h3 {
    color: black;
    padding: 0.5em;
  }
`);

const ListItem = ({ children, item, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Link className="link-wrapper" to={item.destination}>
        <h3>{item.name}</h3>
      </Link>
      {children}
    </Wrapper>
  );
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ListItem;
