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
      {/* TODO: SEO content */}
    </ReactHelmet>
  );
}

export default Helmet;
