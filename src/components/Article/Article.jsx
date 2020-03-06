import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import POST from './post.json'


const Image = styled.img`
  width: 100%;
  margin: auto;
  @media screen and (min-width: ${props => props.theme.screen.md}) {
    float: right;
    width: 45%;
    margin: 0 1em;
  }
`;

const ArticleWrap = styled.article`
  padding: 1em;
  width: inherit;
  font-family: 'Open Sans', sans-serif;
`;
const Content = styled.div`
  color: white;
`;
const Body = styled.div`
  padding-top: 10px;
`;

const MetaBox = styled.div`
border: 2px dashed white;
padding: 0.5em;
line-height: 1.5em;
width: 100%;
margin-bottom: 1em;
@media screen and (min-width: ${props => props.theme.screen.md}){
  width: 50%;
  float: left;
}
`;

const MetaContent = styled.small`
  font-style: italic;
`;

const MetaLabel = styled.small`
  font-weight: 600;
  font-style: italic;
`;
const Icon = styled.span`
  padding-right: 0.5em;
`;

const Article = ({ post = POST, title = 'A Title', ...restProps }) => {
  return (
    <ArticleWrap >
      <Content>
        <Body>
          <MetaBox>
            <Icon>⏱</Icon>
            <MetaLabel>Time to read: </MetaLabel>
            <MetaContent>{`${post.timeToRead} minutes`}</MetaContent>
            <br />
            <Icon>🏷</Icon>
            <MetaLabel> Tags: </MetaLabel>
            <MetaContent>a tag, a tag, and another</MetaContent>
            <br />
            <Icon>👷🏾‍♀️</Icon>
            <MetaLabel>Built with: </MetaLabel>
            {`${post.frontmatter.date}`}
          </MetaBox>
          <Image src="https://via.placeholder.com/500x300" alt="" />
          <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ display: 'block' }} />
        </Body>
      </Content>
    </ArticleWrap>
  );
};

export default Article;
