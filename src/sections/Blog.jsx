import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { ParallaxBackground, Section } from '../elements/Parallax';
import Content from '../elements/Content';
import { colors } from '../config/tailwind';
import { BlogGrid } from '../components/CardGrid';
import { BigTitle } from '../elements/Titles';

const Wrapper = styled.div`
  ${tw`w-full`};
`;
const Blog = ({ offset, posts }) => {
  return (
    <>
      <Section speed={-0.1} offset={offset} id="blog">
        {/* <FloatingImage floatDir="right" /> */}
      </Section>
      <Content speed={0.1} offset={offset}>
        <Wrapper>
          <BigTitle>Blog</BigTitle>
          <BlogGrid posts={posts} />
        </Wrapper>
      </Content>
    </>
  );
};

export default Blog;

Blog.propTypes = {
  offset: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
};
