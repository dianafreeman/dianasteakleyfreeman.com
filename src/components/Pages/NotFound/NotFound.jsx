/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import tw from 'tailwind.macro';
import styled from 'styled-components';
<<<<<<< HEAD:src/pages/404.jsx
import PageLayout from '../layouts/Layout';
import { BigTitle } from '../elements/Titles';
=======
import Layout from '../../Layout';
import { BigTitle } from '../../Type/Titles';
>>>>>>> 2263a54... restart basic ui, refactor pages for SPA:src/components/Pages/NotFound/NotFound.jsx

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

const NotFound = () => {
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

export default NotFound;
