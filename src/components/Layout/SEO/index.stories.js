import React from 'react';

import * as CONFIG from '@config/siteConfig';
import SEO from '.';

export const asJson = ({ config }) => {
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
    config: CONFIG,
  },
};
