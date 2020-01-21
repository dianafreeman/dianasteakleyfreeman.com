/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Card from '../Card';

const CardGrid = ({ props }) => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f'];
  return (
    <div style={{flexFlow: 'row wrap', display: 'flex', margin: 'auto'}}>
      {items.map(i => (
        <Card key={`card-key-${i}`} title={i} />
      ))}
    </div>
  );
};

// CardGrid.propTypes = {

// };

export default CardGrid;
