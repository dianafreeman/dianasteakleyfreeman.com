import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import PageLayout from '../components/Layouts/PageLayout';
import Card from '../components/Card';
import routes from '../config/web/routes';
import { BigTitle } from '../components/Titles';
import CardGrid from '../components/CardGrid/CardGrid';
import { useEffect } from 'react';

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

const Index = ({ data }) => {
  return (
    <PageLayout>
      <div style={{ paddingTop: '2vh' }}>
        <BigTitle>Hi! 👋 I'm Diana.</BigTitle>
        <CardGrid items={routes} />
      </div>
    </PageLayout>
  );
};
export default Index;
