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
 ${tw` h-screen`}
 
`
const ArticleWrapper = styled.div`
  ${tw`p-3 mx-auto rounded-lg w-5/6`}
  background: rgba(225,225,225,0.9);
  overflow: hidden scroll;
`
const PageContent = styled.div`
  ${tw` relative `}
`

const BlogPostTemplate = ({ data }) => {
  const post = data.wordpressPost;
  return (
    <Layout>
      <Parallax pages={2}>
        <ParallaxLayer offset={0}>
          <HeaderImage fluid={post.featured_media.localFile.childImageSharp.fluid} />
          <PageTitleWrapper>
            <Link to="/">Back to Home</Link>
            <TypedTitle strings={[post.title]} />
          </PageTitleWrapper>
        </ParallaxLayer>
          <ArticleWrapper>
            <article>
              <div dangerouslySetInnerHTML={{ __html: post.content }} style={{display: 'block'}}/> 
            </article>
          </ArticleWrapper>
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
    wordpressPost(wordpress_id: { eq: $id }) {
      id
      title
      content
      date
      slug
      featured_media {
        localFile {
          url
          childImageSharp {
            fluid(maxWidth: 960) {
               ...GatsbyImageSharpFluid
              }
          }
        }
      }
    }
  }
`;
