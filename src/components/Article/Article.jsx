<<<<<<< HEAD
import React, { useContext } from 'react';
import { useTrail } from 'react-spring';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { ThemeContext, ThemeProvider } from '../../context/ThemeContext';
import theme from '../../context/ThemeContext/theme';
import POST from './post.json';
import MetaBox from './MetaBox';

/** @jsx jsx */
const Article = ({ post = POST, ...restProps }) => {
  // const [theme] = useContext(ThemeContext);
  // console.log('theme');
  // console.log(theme);
  const Image = styled.img`
    width: 100%;
    margin: auto;
    @media screen and (min-width: ${theme.screen.md}) {
      float: right;
      width: 45%;
      margin: 0 1em;
    }
  `;

  return (
    <ThemeProvider>
      <article
        {...restProps}
        css={css`
          padding: 1em;
          width: inherit;
        `}
      >
        <div
          css={css`
            padding: 1em;
            width: inherit;
          `}
        >
          <MetaBox
            items={[
              {
                label: `⏱ Time to read`,
                value: `${post.timeToRead} minutes`,
              },
              {
                label: `Published On`,
                value: `${post.frontmatter.date}`,
              },
            ]}
          />

          <Image src="https://via.placeholder.com/500x300" alt="" />
          <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ display: 'block' }} />
        </div>
      </article>
    </ThemeProvider>
  );
};

export default Article;
=======
import React from 'react';
import { inject, observer } from 'mobx-react';
import POST from './post.json';
import { Image, ArticleWrap, Content, Body, MetaBox, MetaContent, MetaLabel, Icon } from './styled';

const Article = ({ post = POST, title = 'A Title', store, ...restProps }) => {
  return (
    <ArticleWrap {...restProps}>
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

export default inject('store')(observer(Article));
>>>>>>> restart basic ui, refactor pages for SPA
