/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import Layout from '../layouts/Layout';
import { colors } from '../../tailwind';
// Components
import TypedTitle from '../components/TypedTitle';


const PageTitleWrapper = styled.div`
  ${tw`absolute pin-t`}
`;

const HeaderImage = styled(Img)`
 ${tw`absolute h-screen`}
 
`
const ArticleWrapper = styled.div`
  ${tw`p-3 mx-auto rounded-lg w-5/6`}
  background: rgba(225,225,225,0.9);
  height: inherit;
  overflow: hidden scroll;
`
const PageContent = styled.div`
  ${tw` relative `}
`

const BlogPostTemplate = ({ data }) => {
  const project = data.wordpressWpProjects;
  return (
    <Layout>
      <Helmet title={`${project.title} | Blog`} />
      <Parallax pages={2}>
        <ParallaxLayer offset={0}>
          <HeaderImage fluid={project.featured_media.localFile.childImageSharp.fluid} />
          <PageTitleWrapper>
            <Link to="/">Back to Home</Link>
            <TypedTitle strings={[project.title]} />
          </PageTitleWrapper>
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} factor={1.5}>
          <ArticleWrapper>
            <article>
              <div dangerouslySetInnerHTML={{ __html: project.content }} style={{display: 'block'}}/> 
            </article>
          </ArticleWrapper>
        </ParallaxLayer>
      
      </Parallax>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.objectOf('element').isRequired
};

export default BlogPostTemplate;

export const query = graphql`
  query($id: Int!) {
    wordpressWpProjects(wordpress_id: { eq: $id }) {
        acf {
            project_color
            project_link
          }
          featured_media {
            localFile {
                url
                childImageSharp {
                  fluid(maxWidth: 960) {
                     ...GatsbyImageSharpFluid
                    }
                }
              }
            id
          }
          content
          title
          slug
          technologies
          wordpress_id
    }
  }
`;