/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import PageLayout from '../components/Layouts/PageLayout';
import { BigTitle } from '../components/Titles';

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: inherit;
  margin: auto;
`;

const Text = styled.p`
    ${tw`text-xl text-white`}
`

const ErrorPage = () => {
  return (
    <PageLayout>
      <Row>
        <BigTitle>Well this is awkward.</BigTitle>
      </Row>
      <Row>
       <Text>Something went wrong. Might I direct you back to the <Link to="/">home page</Link>?</Text>
      </Row>
    </PageLayout>
  );
};

export default ErrorPage;
