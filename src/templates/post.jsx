/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import FastAverageColor from 'fast-average-color';
import { ParallaxLayer, Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../layouts/Layout';
import { colors } from '../config/tailwind';
import TypedTitle from '../components/TypedTitle';

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

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '',
    };
  }

  componentDidMount() {
    const fac = new FastAverageColor();
    const color = fac.getColor(
      document.querySelector('.gatsby-image-wrapper img')
    );
    this.setState({ backgroundColor: color.rgba });
    console.log(color);
  }

  render() {
    const post = this.props.data.wordpressPost;
    return (
      <Layout parallax={false} backgroundColor={this.state.backgroundColor}>
        <PageHeader>
          <TitleWrapper>
            <TypedTitle strings={[post.title]} />
          </TitleWrapper>
        </PageHeader>
        <ArticleWrapper>
          <Img
            fluid={post.featured_media.localFile.childImageSharp.fluid}
            style={{ width: '300px', marginRight: '1em', float: 'left' }}
          />
          <article>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{ display: 'block' }}
            />
          </article>
        </ArticleWrapper>
      </Layout>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.objectOf('element').isRequired,
};

export default BlogPostTemplate;

// export const query = graphql`
//   query($id: Int!) {
//     wordpressPost(wordpress_id: { eq: $id }) {
//       id
//       title
//       content
//       date
//       slug
//       featured_media {
//         localFile {
//           url
//           childImageSharp {
//             fluid(maxWidth: 960) {
//               ...GatsbyImageSharpFluid
//               src
//             }
//           }
//         }
//       }
//     }
//   }
//   `;
