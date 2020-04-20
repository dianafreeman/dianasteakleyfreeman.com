import React from 'react';
<<<<<<< HEAD
import { Router } from '@reach/router';
=======
import { graphql } from 'gatsby';
import { Router, Link } from '@reach/router';
import Layout from '../components/Layout/Layout';
import routes from '../config/web/routes';
import { StoreProvider } from '../stores';
>>>>>>> restart basic ui, refactor pages for SPA
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import NotFound from '../components/Pages/NotFound';

const LazyComponent = ({ PageComponent, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <PageComponent {...props} />
  </React.Suspense>
);

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
);
const Index = () => {
  return (
<<<<<<< HEAD
    <Router>
      <LazyComponent PageComponent={Home} path="/" />
      <LazyComponent PageComponent={Blog} path="blog" />
      <LazyComponent PageComponent={NotFound} default />
    </Router>
=======
    <StoreProvider>
      <Router>
        <LazyComponent Component={Home} path="/" />
        <LazyComponent Component={Blog} path="blog" />
        <LazyComponent Component={NotFound} default />
      </Router>
    </StoreProvider>
>>>>>>> restart basic ui, refactor pages for SPA
  );
};
export default Index;
