import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import PageLayout from '../components/Layouts/PageLayout';
import Card from '../components/Card';
import routes from '../config/web/routes';
import { BigTitle } from '../components/Titles';
import CardGrid from '../components/CardGrid/CardGrid';

export const query = graphql`
  query IndexQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const Index = ({ data }) => (
  <PageLayout>
    <BigTitle>Diana M Steakley Freeman</BigTitle>
    {/* {routes.map((r, idx) => (
      <Card dest={r.destination} title={r.name} index={idx} key={`card-${idx}`} />
    ))} */}
    <CardGrid items={routes} />
  </PageLayout>
);
export default Index;
