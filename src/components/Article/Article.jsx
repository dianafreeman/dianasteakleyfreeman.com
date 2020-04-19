import React from 'react';
import { inject, observer } from 'mobx-react';
import POST from './post.json';
import { Image,
  ArticleWrap,
  Content,
  Body,
  MetaBox,
  MetaContent,
  MetaLabel,
  Icon } from './styled'

const Article = ({ post = POST, title = 'A Title',  store, ...restProps }) => {
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
