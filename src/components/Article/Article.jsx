import React, { useContext } from 'react';
import { useTrail } from 'react-spring';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../../context/ThemeContext';
import POST from './post.json';
import MetaBox from './MetaBox';

export const Image = styled.img`
  width: 100%;
  margin: auto;
  @media screen and (min-width: ${theme.screen.md}) {
    float: right;
    width: 45%;
    margin: 0 1em;
  }
`;

// export const ArticleWrap = styled.article`

// `;
// export const Content = styled.div`
//   color: white;
// `;
// export const Body = styled.div`
//   padding-top: 10px;
// `;

// export const Icon = styled.span`
//   padding-right: 0.5em;
// `;
/** @jsx jsx */
const Article = ({ post = POST, store, ...restProps }) => {
  // const items = { timeToRead: post.timeToRead, tags: post.tags, date: post.frontmatter.date };
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <article
      {...restProps}
      css={css`
        padding: 1em;
        width: inherit;
        background-color: ${theme.color.dark};
      `}
    >
      <div
        css={css`
          color: white;
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
  );
};

export default inject('store')(observer(Article));
