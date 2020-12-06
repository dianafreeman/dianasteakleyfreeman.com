import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default React.forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "ColorDrawing" }) {
        publicURL
      }
    }
  `);

  return <img ref={ref} src={data.file.publicURL} {...props} />;
});
