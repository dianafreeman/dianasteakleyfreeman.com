import React from 'react';
import { Router } from '@reach/router';
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import NotFound from '../components/Pages/NotFound';

const Index = () => {
  return (
    <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <NotFound default />
    </Router>
  );
};
export default Index;
