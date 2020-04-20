import React from 'react';
import { graphql } from 'gatsby';
import { Router, Link } from '@reach/router';
import Layout from '../components/Layout/Layout';
import routes from '../config/web/routes';
import { StoreProvider } from '../stores';
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import NotFound from '../components/Pages/NotFound';

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

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
);
const Index = () => {
  return (
    <StoreProvider>
      <Router>
        <LazyComponent Component={Home} path="/" />
        <LazyComponent Component={Blog} path="blog" />
        <LazyComponent Component={NotFound} default />
      </Router>
    </StoreProvider>
  );
};
export default Index;
