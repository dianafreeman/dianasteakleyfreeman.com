/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../../Layout';

const Wrapper = styled.div`
  text-align: center;
  height: inherit;
  margin: auto;
`;

const Text = styled.p`
  font-size: 1.5em;
  color: white;
`;

const ComingSoon = () => {
  return (
    <Layout comingSoon>
      <Wrapper>
        <h1 style={{ paddingTop: '25vh' }}>Diana M Steakley Freeman</h1>

        <Text style={{ color: 'white', margin: 'auto', fontStyle: 'italic' }}>
          Hang tight -- a brand new site is coming soon!{' '}
        </Text>
      </Wrapper>
    </Layout>
  );
};

export default ComingSoon;
