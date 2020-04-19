import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import routes from '../config/web/routes';
import CardGrid from '../components/CardGrid/CardGrid';
import { MainTitle, ContentWrap } from '../components/Layout/styled';
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

const Index = () => {
  return (
    <StoreProvider>
      <Layout>
        <ContentWrap>
          <div style={{ display: 'flex', flex: 1 }}>
            <MainTitle>
              Hi! 👋 <br /> I'm Diana.
            </MainTitle>
          </div>
          <div style={{ display: 'flex', flex: 2 }}>
            <CardGrid items={routes} />
          </div>
        </ContentWrap>
      </Layout>
    </StoreProvider>
  );
};
export default Index;
