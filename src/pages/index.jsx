import React from 'react';
import { Router } from '@reach/router';
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import NotFound from '../components/Pages/NotFound';

const LazyComponent = ({ PageComponent, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <PageComponent {...props} />
  </React.Suspense>
);

const Index = () => {
  return (
    <Router>
      <LazyComponent PageComponent={Home} path="/" />
      <LazyComponent PageComponent={Blog} path="blog" />
      <LazyComponent PageComponent={NotFound} default />
    </Router>
  );
};
export default Index;
