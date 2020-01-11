/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import FastAverageColor from 'fast-average-color';
import { ParallaxLayer, Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../layouts/Layout';
import TypedTitle from '../components/TypedTitle';
import icondata from '../config/icondata';

// const TechnologyIcon = (id) => (
//   <StaticQuery
//     query={graphql`
//     query TechQuery {
//       allWordpressWpTechnologies {
//         edges {
//           node {
//             wordpress_id
//             name
//             slug
//           }
//         }
//       }
//     }

//     `}
//     render={techData => (
//       <header>
//         {techData.allWordpressWpTechnologies.edges.map( tech => <h2>{tech.node.name}</h2>)}
//       </header>
//     )}
//   />
// );

const PageHeader = styled.div`
  ${tw`relative w-full`}
`;

const ArticleWrapper = styled.div`
  ${tw`py-3 px-3 mx-auto rounded-sm my-3 relative`}
  @media screen and (min-width: 568px) {
    width: 95vw;
  }
  background: rgba(225, 225, 225, 0.9);
  display: block;
`;
const TitleWrapper = styled.div`
  ${tw`text-left rounded-md w-full`}
  padding-top: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  right: 0;
  bottom: 1em;
  z-index: 1;
  h1 {
    text-shadow: 5px 5px 3px black !important;
  }
`;

const ProjectPageTemplate = ({ data }) => {
  const project = data.wordpressWpProjects;
  const technologies = data.allWordpressWpTechnologies.edges
    .filter(tech => project.technologies.includes(tech.node.wordpress_id))
    .map(edge => edge.node);

  return (
    <Layout parallax={false}>
      <PageHeader>
        <TitleWrapper>
          <TypedTitle strings={[project.title]} />
        </TitleWrapper>
      </PageHeader>
      <ArticleWrapper>
        <Img
          fluid={project.featured_media.localFile.childImageSharp.fluid}
          style={{ width: '300px', marginRight: '1em', float: 'left' }}
        />
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: project.content }}
            style={{ display: 'block' }}
          />
        </article>
        <aside>
          <p>
            This app uses...
            {technologies.map(tech => icondata.filter()`${tech.name}, `)}
          </p>
        </aside>
      </ArticleWrapper>
    </Layout>
  );
};

ProjectPageTemplate.propTypes = {
  data: PropTypes.objectOf('element').isRequired,
};

export default ProjectPageTemplate;

// export const query = graphql`
//   query($id: Int!) {
//     wordpressWpProjects(wordpress_id: { eq: $id }) {
//       acf {
//         project_color
//         project_link
//       }
//       featured_media {
//         localFile {
//           url
//           childImageSharp {
//             fluid(maxWidth: 960) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         id
//       }
//       content
//       title
//       slug
//       technologies
//       wordpress_id
//     }
//     allWordpressWpTechnologies {
//       edges {
//         node {
//           wordpress_id
//           name
//           slug
//         }
//       }
//     }
//   }
// `
