import React from 'react';
import { default as ReactHelmet } from 'react-helmet';
import { useLocation, useParams, withRouter } from 'react-router-dom';

function Helmet() {
  const location = useLocation();
  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>{location.pathname}</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <style>{'#root{height:100vh;}'}</style>
      {/* TODO: SEO content */}
    </ReactHelmet>
  );
}

export default Helmet;
