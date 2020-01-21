import React from 'react';
import { graphql } from 'gatsby';
import { Provider } from 'mobx-react';

import { Router } from '@reach/router';
import Layout from '../components/Layout/Layout';
import routes from '../config/web/routes';
import Store from '../stores';
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import NotFound from '../components/Pages/NotFound';

const LazyComponent = ({ store, PageComponent, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <PageComponent {...props} />
  </React.Suspense>
);
const Index = () => {
  return (
    <Provider store={Store}>
      <Router>
        <LazyComponent PageComponent={Home} path="/" />
        <LazyComponent PageComponent={Blog} path="blog" />
        <LazyComponent PageComponent={NotFound} default />
      </Router>
    </Provider>
  );
};
export default Index;
