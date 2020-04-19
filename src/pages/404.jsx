/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import { BigTitle } from '../components/Type/Titles';

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: inherit;
  margin: auto;
`;

const Text = styled.p`
  font-size: 1.5em;
  color: white;
`;

const ErrorPage = () => {
  return (
    <Layout>
      <Row>
        <BigTitle>Well this is awkward.</BigTitle>
      </Row>
      <Row>
        <Text>
          Something went wrong. Might I direct you back to the <Link to="/">home page</Link>?
        </Text>
      </Row>
    </Layout>
  );
};

export default ErrorPage;
