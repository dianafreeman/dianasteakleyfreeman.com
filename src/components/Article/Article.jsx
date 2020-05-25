import React, { useContext } from 'react';
import { useTrail } from 'react-spring';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { ThemeContext, ThemeProvider } from '../../hooks/useTheme';
import theme from '../../config/theme';
import POST from './post.json';
import MetaBox from './MetaBox';

/** @jsx jsx */
const Article = ({ post = POST, ...restProps }) => {
  // const [theme] = useContext(ThemeContext);

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
