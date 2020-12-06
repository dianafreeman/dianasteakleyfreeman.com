import { graphql, useStaticQuery } from 'gatsby';

function useLandingPageImages() {
  const { coderFile, creatorFile, communicatorFile } = useStaticQuery(graphql`
    query {
      creatorFile: file(name: { eq: "LineDrawing" }) {
        publicURL
      }
      communicatorFile: file(name: { eq: "ColorDrawing" }) {
        publicURL
      }
      coderFile: file(name: { eq: "WireframeMe" }) {
        publicURL
      }
    }
  `);

  return [coderFile.publicURL, creatorFile.publicURL, communicatorFile.publicURL];
}

export default useLandingPageImages;
