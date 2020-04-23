import React from 'react';
import { inject, observer } from 'mobx-react';
import { useTrail } from 'react-spring';
import POST from './post.json';
import { Image, ArticleWrap, Content, Body, Icon } from './styled';
import MetaBox from './MetaBox';

const Article = ({ post = POST, title = 'A Title', store, ...restProps }) => {
  const items = { timeToRead: post.timeToRead, tags: post.tags, date: post.frontmatter.date };

  return (
    <ArticleWrap {...restProps}>
      <Content>
        <Body>
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
        </Body>
      </Content>
    </ArticleWrap>
  );
};

export default inject('store')(observer(Article));
