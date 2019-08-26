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
import Content from '../elements/Content';
import Inner from '../elements/Inner';

const PageTitleWrapper = styled(ParallaxLayer)`
  ${tw`my-auto px-2`}
  background-image: url('${props => props.bg}');
  background-size: cover;
  background-position: center;
`;

const PostWrapper = styled.div`
  ${tw`relative mt-4`}
  width: 100%;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.7);
  &:before{
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const PostContentLayer = styled(ParallaxLayer)`
 background-image: url('${props => props.bg}');
  background-size: cover;
  background-position: center;
  
`

const PostContentWrapper = styled.div`
  ${tw`px-2 py-3 mx-auto w-full mx-2`}
  background: lightgray;
  min-height: fit-content;

`

const BlogPostTemplate = ({ data }) => {
  const post = data.wordpressPost;
  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <Parallax pages={3} factor={1}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Img fluid={post.featured_media.localFile.childImageSharp} />
          <TypedTitle strings={[post.title]} />
        </ParallaxLayer>
        <PostContentLayer offset={0.5} speed={0.5} factor={3}>
          <PostContentWrapper>
            <article dangerouslySetInnerHTML={{ __html: post.content }} style={{display: 'block'}}/>
          </PostContentWrapper>
        </PostContentLayer>
        <Link to="/">Back to Home</Link>
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
      categories
      wordpress_id
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
