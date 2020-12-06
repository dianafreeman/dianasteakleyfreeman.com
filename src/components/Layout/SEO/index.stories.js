import React, { useEffect } from 'react';
import config from '@config/siteConfig';
import SEO from '.';

export const asJson = ({ config }) => {
  const clone = React.cloneElement(<SEO config={config} />);
  // console.log(clone.querySelector('meta'));

  return (
    <code>
      <SEO config={config} />
      <pre>To Do</pre>
    </code>
  );
};
export default {
  title: 'SEO',
  component: SEO,
  args: {
    config,
  },
};
