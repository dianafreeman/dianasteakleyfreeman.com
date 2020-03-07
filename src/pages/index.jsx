import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import routes from '../config/web/routes';
import CardGrid from '../components/CardGrid/CardGrid';
import { MainTitle, ContentWrap, ContentCol } from '../components/Layout/elements';
import Masthead from '../components/Masthead';
import { StoreProvider } from '../stores';

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
    <StoreProvider>
      <Layout>
        <ContentWrap>
          <ContentCol>
            <MainTitle>
              Hi! 👋 <br /> I'm Diana.
            </MainTitle>
          </ContentCol>
          <CardGrid items={routes} />
        </ContentWrap>
      </Layout>
    </StoreProvider>
  );
};
export default Index;
